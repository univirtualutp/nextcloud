<?php

declare(strict_types=1);

namespace OCA\AppAPI\DeployActions;

use OCA\AppAPI\AppInfo\Application;
use OCA\AppAPI\Db\DaemonConfig;
use OCA\AppAPI\Service\DaemonConfigService;
use OCP\IConfig;

/**
 * Class with utils methods for AIO setup
 */
class AIODockerActions {
	public const AIO_DAEMON_CONFIG_NAME = 'docker_aio';
	public const AIO_DOCKER_SOCKET_PROXY_HOST = 'nextcloud-aio-docker-socket-proxy:2375';

	public function __construct(
		private readonly IConfig    $config,
		private readonly DaemonConfigService $daemonConfigService
	) {
	}

	/**
	 * Detecting AIO instance by config setting or AIO_TOKEN env as fallback
	 */
	public function isAIO(): bool {
		return filter_var(getenv('THIS_IS_AIO'), FILTER_VALIDATE_BOOL);
	}

	/**
	 * Registers DaemonConfig with default params to use AIO Docker Socket Proxy
	 */
	public function registerAIODaemonConfig(): ?DaemonConfig {
		$defaultDaemonConfig = $this->config->getAppValue(Application::APP_ID, 'default_daemon_config');
		if ($defaultDaemonConfig !== '') {
			$daemonConfig = $this->daemonConfigService->getDaemonConfigByName(self::AIO_DAEMON_CONFIG_NAME);
			if ($daemonConfig !== null) {
				return null;
			}
		}

		$deployConfig = [
			'net' => 'nextcloud-aio', // using the same host as default network for Nextcloud AIO containers
			'nextcloud_url' => 'https://' . getenv('NC_DOMAIN'),
			'haproxy_password' => null,
			'computeDevice' => [
				'id' => 'cpu',
				'label' => 'CPU',
			],
		];

		$daemonConfigParams = [
			'name' => self::AIO_DAEMON_CONFIG_NAME,
			'display_name' => 'AIO Docker Socket Proxy',
			'accepts_deploy_id' => 'docker-install',
			'protocol' => 'http',
			'host' => self::AIO_DOCKER_SOCKET_PROXY_HOST,
			'deploy_config' => $deployConfig,
		];

		$daemonConfig = $this->daemonConfigService->registerDaemonConfig($daemonConfigParams);
		if ($daemonConfig !== null) {
			$this->config->setAppValue(Application::APP_ID, 'default_daemon_config', $daemonConfig->getName());
		}
		return $daemonConfig;
	}
}
