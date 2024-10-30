<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Notifications\Listener;

use OCA\Notifications\Handler;
use OCA\Notifications\Model\SettingsMapper;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\User\Events\UserDeletedEvent;

/**
 * @template-implements IEventListener<Event|UserDeletedEvent>
 */
class UserDeletedListener implements IEventListener {
	private Handler $handler;
	private SettingsMapper $settingsMapper;

	public function __construct(
		Handler $handler,
		SettingsMapper $settingsMapper,
	) {
		$this->handler = $handler;
		$this->settingsMapper = $settingsMapper;
	}

	public function handle(Event $event): void {
		if (!($event instanceof UserDeletedEvent)) {
			// Unrelated
			return;
		}

		$user = $event->getUser();
		$this->handler->deleteByUser($user->getUID());
		$this->settingsMapper->deleteSettingsByUser($user->getUID());
	}
}
