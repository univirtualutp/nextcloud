<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\SuspiciousLogin\Service;

use OCA\SuspiciousLogin\Exception\ServiceException;
use OCP\ILogger;
use Rubix\ML\Datasets\Unlabeled;
use RuntimeException;

class EstimatorService {

	/** @var ModelStore */
	private $modelStore;

	/** @var ILogger */
	private $logger;

	public function __construct(ModelStore $modelStore,
		ILogger $logger) {
		$this->modelStore = $modelStore;
		$this->logger = $logger;
	}

	/**
	 * @param string $uid
	 * @param string $ip
	 * @param int|null $modelId
	 *
	 * @return bool
	 * @throws ServiceException
	 */
	public function predict(string $uid, string $ip, AClassificationStrategy $strategy, ?int $modelId = null): bool {
		try {
			if ($modelId === null) {
				$this->logger->debug("loading latest model");

				$estimator = $this->modelStore->loadLatest($strategy);
			} else {
				$this->logger->debug("loading model $modelId");

				$estimator = $this->modelStore->load($modelId);
			}
		} catch (RuntimeException $e) {
			throw new ServiceException("Could not load model $modelId to classify UID $uid and IP $ip: " . $e->getMessage(), $e->getCode(), $e);
		}

		$data = new Unlabeled([
			$strategy->newVector($uid, $ip),
		]);

		$predictions = $estimator->predict($data);

		return $predictions[0] === 'y';
	}
}
