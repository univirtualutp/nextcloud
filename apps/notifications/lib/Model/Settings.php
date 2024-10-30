<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Notifications\Model;

use OCP\AppFramework\Db\Entity;

/**
 *
 * @method void setUserId(string $userId)
 * @method string getUserId()
 * @method void setBatchTime(int $batchTime)
 * @method int getBatchTime()
 * @method void setLastSendId(int $lastSendId)
 * @method int getLastSendId()
 * @method void setNextSendTime(int $nextSendTime)
 * @method int getNextSendTime()
 */
class Settings extends Entity {
	public const EMAIL_SEND_WEEKLY = 4;
	public const EMAIL_SEND_DAILY = 3;
	public const EMAIL_SEND_3HOURLY = 2;
	public const EMAIL_SEND_HOURLY = 1;
	public const EMAIL_SEND_OFF = 0;

	/** @var string */
	protected $userId;
	/** @var int */
	protected $batchTime;
	/** @var int */
	protected $lastSendId;
	/** @var int */
	protected $nextSendTime;

	public function __construct() {
		$this->addType('userId', 'string');
		$this->addType('batchTime', 'int');
		$this->addType('lastSendId', 'int');
		$this->addType('nextSendTime', 'int');
	}

	public function asArray(): array {
		return [
			'id' => $this->getId(),
			'user_id' => $this->getUserId(),
			'batch_time' => $this->getBatchTime(),
			'last_send_id' => $this->getLastSendId(),
			'next_send_time' => $this->getNextSendTime(),
		];
	}
}
