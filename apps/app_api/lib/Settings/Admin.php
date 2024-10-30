<?php

declare(strict_types=1);

namespace OCA\AppAPI\Settings;

use OCA\AppAPI\AppInfo\Application;

use OCA\AppAPI\DeployActions\DockerActions;
use OCA\AppAPI\Service\DaemonConfigService;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IConfig;
use OCP\Settings\ISettings;
use Psr\Log\LoggerInterface;

class Admin implements ISettings {

	public function __construct(
		private readonly IInitialState       $initialStateService,
		private readonly DaemonConfigService $daemonConfigService,
		private readonly IConfig             $config,
		private readonly DockerActions       $dockerActions,
		private readonly LoggerInterface     $logger,
	) {
	}

	public function getForm(): TemplateResponse {
		$adminInitialData = [
			'daemons' => $this->daemonConfigService->getDaemonConfigsWithAppsCount(),
			'default_daemon_config' => $this->config->getAppValue(Application::APP_ID, 'default_daemon_config'),
			'init_timeout' => $this->config->getAppValue(Application::APP_ID, 'init_timeout', '40'),
			'container_restart_policy' => $this->config->getAppValue(Application::APP_ID, 'container_restart_policy', 'unless-stopped'),
		];

		$defaultDaemonConfigName = $this->config->getAppValue(Application::APP_ID, 'default_daemon_config');
		if ($defaultDaemonConfigName !== '') {
			$daemonConfig = $this->daemonConfigService->getDaemonConfigByName($defaultDaemonConfigName);
			if ($daemonConfig !== null) {
				$this->dockerActions->initGuzzleClient($daemonConfig);
				$daemonConfigAccessible = $this->dockerActions->ping($this->dockerActions->buildDockerUrl($daemonConfig));
				$adminInitialData['daemon_config_accessible'] = $daemonConfigAccessible;
				if (!$daemonConfigAccessible) {
					$this->logger->error(sprintf('Deploy daemon "%s" is not accessible by Nextcloud. Please verify its configuration', $daemonConfig->getName()));
				}
			}
		}

		$this->initialStateService->provideInitialState('admin-initial-data', $adminInitialData);
		return new TemplateResponse(Application::APP_ID, 'adminSettings');
	}

	public function getSection(): string {
		return Application::APP_ID;
	}

	public function getPriority(): int {
		return 10;
	}
}
