<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Notifications\Settings;

use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\Settings\IIconSection;

class AdminSection implements IIconSection {
	private IL10N $l;
	private IURLGenerator $url;

	public function __construct(IURLGenerator $url, IL10N $l) {
		$this->url = $url;
		$this->l = $l;
	}

	/**
	 * returns the relative path to an 16*16 icon describing the section.
	 * e.g. '/core/img/places/files.svg'
	 *
	 * @returns string
	 * @since 12
	 */
	public function getIcon(): string {
		return $this->url->imagePath('notifications', 'notifications-dark.svg');
	}

	/**
	 * returns the ID of the section. It is supposed to be a lower case string,
	 * e.g. 'ldap'
	 *
	 * @returns string
	 * @since 9.1
	 */
	public function getID(): string {
		return 'notifications';
	}

	/**
	 * returns the translated name as it should be displayed, e.g. 'LDAP / AD
	 * integration'. Use the L10N service to translate it.
	 *
	 * @return string
	 * @since 9.1
	 */
	public function getName(): string {
		return $this->l->t('Notifications');
	}

	/**
	 * @return int whether the form should be rather on the top or bottom of
	 * the settings navigation. The sections are arranged in ascending order of
	 * the priority values. It is required to return a value between 0 and 99.
	 *
	 * E.g.: 70
	 * @since 9.1
	 */
	public function getPriority(): int {
		return 55;
	}
}
