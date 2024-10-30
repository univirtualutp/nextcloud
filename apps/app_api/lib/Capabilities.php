<?php

declare(strict_types=1);

namespace OCA\AppAPI;

use OCA\AppAPI\AppInfo\Application;
use OCA\AppAPI\Service\ProvidersAI\TextProcessingService;
use OCP\App\IAppManager;
use OCP\Capabilities\ICapability;
use OCP\IConfig;

class Capabilities implements ICapability {

	public function __construct(
		private readonly IConfig     $config,
		private readonly IAppManager $appManager,
	) {
	}

	public function getCapabilities(): array {
		$capabilities = [
			'loglevel' => intval($this->config->getSystemValue('loglevel', 2)),
			'version' => $this->appManager->getAppVersion(Application::APP_ID),
			'text_processing' => [
				'task_types' => array_keys(TextProcessingService::TASK_TYPES),
			]
		];
		return [
			'app_api' => $capabilities,
		];
	}
}
