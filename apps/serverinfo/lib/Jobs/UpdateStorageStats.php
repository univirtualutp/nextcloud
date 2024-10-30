<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\ServerInfo\Jobs;

use OCA\ServerInfo\StorageStatistics;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use OCP\IConfig;

class UpdateStorageStats extends TimedJob {
	private StorageStatistics $storageStatistics;

	public function __construct(ITimeFactory $time, StorageStatistics $storageStatistics, IConfig $config) {
		$this->setInterval((int)$config->getAppValue('serverinfo', 'job_interval_storage_stats', (string)(60 * 60 * 3)));
		parent::__construct($time);

		$this->storageStatistics = $storageStatistics;
	}

	/**
	 * @inheritDoc
	 */
	protected function run($argument): void {
		$this->storageStatistics->updateStorageCounts();
	}
}
