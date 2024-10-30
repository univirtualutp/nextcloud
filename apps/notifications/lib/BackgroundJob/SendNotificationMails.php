<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Notifications\BackgroundJob;

use OCA\Notifications\MailNotifications;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;

class SendNotificationMails extends TimedJob {
	/** @var MailNotifications */
	protected $mailNotifications;
	/** @var bool */
	protected $isCLI;

	public function __construct(ITimeFactory $timeFactory,
		MailNotifications $mailNotifications,
		bool $isCLI) {
		parent::__construct($timeFactory);

		$this->mailNotifications = $mailNotifications;
		$this->isCLI = $isCLI;
	}

	protected function run($argument): void {
		$time = $this->time->getTime();
		$batchSize = $this->isCLI ? MailNotifications::BATCH_SIZE_CLI : MailNotifications::BATCH_SIZE_WEB;
		$this->mailNotifications->sendEmails($batchSize, $time);
	}
}
