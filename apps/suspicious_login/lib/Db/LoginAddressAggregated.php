<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\SuspiciousLogin\Db;

use OCP\AppFramework\Db\Entity;

/**
 * @method string getUid()
 * @method void setUid(string $uid)
 * @method string getIp()
 * @method void setIp(string $ip)
 * @method int getSeen()
 * @method void setSeen(int $seen)
 * @method int getFirstSeen()
 * @method void setFirstSeen(int $firstSeen)
 * @method int getLastSeen()
 * @method void setLastSeen(int $lastSeen)
 */
class LoginAddressAggregated extends Entity {
	protected $uid;
	protected $ip;
	protected $seen;
	protected $firstSeen;
	protected $lastSeen;
}
