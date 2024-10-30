<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Notifications\BackgroundJob;

use OCA\Notifications\Model\Settings;
use OCA\Notifications\Model\SettingsMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use OCP\IDBConnection;
use OCP\IUser;
use OCP\IUserManager;

class GenerateUserSettings extends TimedJob {
	/** @var IDBConnection */
	private $connection;
	/** @var IUserManager */
	private $userManager;
	/** @var SettingsMapper */
	private $settingsMapper;

	public function __construct(
		ITimeFactory $time,
		IDBConnection $connection,
		IUserManager $userManager,
		SettingsMapper $settingsMapper
	) {
		parent::__construct($time);

		$this->connection = $connection;
		$this->userManager = $userManager;
		$this->settingsMapper = $settingsMapper;

		// run every day
		$this->setInterval(24 * 60 * 60);
	}

	protected function run($argument): void {
		$query = $this->connection->getQueryBuilder();
		$query->select('notification_id')
			->from('notifications')
			->orderBy('notification_id', 'DESC')
			->setMaxResults(1);

		$result = $query->executeQuery();
		$maxId = (int) $result->fetchOne();
		$result->closeCursor();

		$this->userManager->callForSeenUsers(function (IUser $user) use ($maxId) {
			if ($user->isEnabled()) {
				return;
			}

			try {
				$this->settingsMapper->getSettingsByUser($user->getUID());
			} catch (DoesNotExistException $e) {
				$settings = new Settings();
				$settings->setUserId($user->getUID());
				$settings->setNextSendTime(1);
				$settings->setBatchTime(Settings::EMAIL_SEND_3HOURLY);
				$settings->setLastSendId($maxId);
				$this->settingsMapper->insert($settings);
			}
		});
	}
}
