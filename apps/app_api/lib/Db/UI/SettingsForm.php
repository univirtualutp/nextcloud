<?php

declare(strict_types=1);

namespace OCA\AppAPI\Db\UI;

use OCP\AppFramework\Db\Entity;

/**
 * Class ExAppSettingsForm
 *
 * @package OCA\AppAPI\Db
 *
 * @method string getAppid()
 * @method string getFormid()
 * @method array getScheme()
 * @method void setAppid(string $appid)
 * @method void setFormid(string $appid)
 * @method void setScheme(array $scheme)
 */
class SettingsForm extends Entity implements \JsonSerializable {
	protected $appid;
	protected $formid;
	protected $scheme;

	public function __construct(array $params = []) {
		$this->addType('appid', 'string');
		$this->addType('formid', 'string');
		$this->addType('scheme', 'json');

		if (isset($params['id'])) {
			$this->setId($params['id']);
		}
		if (isset($params['appid'])) {
			$this->setAppid($params['appid']);
		}
		if (isset($params['formid'])) {
			$this->setFormid($params['formid']);
		}
		if (isset($params['scheme'])) {
			$this->setScheme($params['scheme']);
		}
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'appid' => $this->getAppid(),
			'formid' => $this->getFormid(),
			'scheme' => $this->getScheme(),
		];
	}
}
