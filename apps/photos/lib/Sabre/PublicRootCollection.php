<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Photos\Sabre;

use OCA\Photos\Album\AlbumMapper;
use OCA\Photos\Sabre\Album\PublicAlbumRoot;
use OCA\Photos\Service\UserConfigService;
use OCP\Files\IRootFolder;
use OCP\IRequest;
use OCP\Security\Bruteforce\IThrottler;
use Sabre\DAV\Exception\NotFound;
use Sabre\DAVACL\AbstractPrincipalCollection;
use Sabre\DAVACL\PrincipalBackend;

class PublicRootCollection extends AbstractPrincipalCollection {
	private const BRUTEFORCE_ACTION = 'publicphotos_webdav_auth';
	private AlbumMapper $albumMapper;
	private IRootFolder $rootFolder;
	private UserConfigService $userConfigService;
	private IRequest $request;
	private IThrottler $throttler;

	public function __construct(
		AlbumMapper $albumMapper,
		IRootFolder $rootFolder,
		PrincipalBackend\BackendInterface $principalBackend,
		UserConfigService $userConfigService,
		IRequest $request,
		IThrottler $throttler
	) {
		parent::__construct($principalBackend, 'principals/token');

		$this->albumMapper = $albumMapper;
		$this->rootFolder = $rootFolder;
		$this->userConfigService = $userConfigService;
		$this->request = $request;
		$this->throttler = $throttler;
	}

	public function getName(): string {
		return 'photospublic';
	}

	/**
	 * Child are retrieved directly by getChild.
	 * This should never be called.
	 * @param array $principalInfo
	 */
	public function getChildForPrincipal(array $principalInfo): PublicAlbumRoot {
		throw new \Sabre\DAV\Exception\Forbidden();
	}

	/**
	 * Returns a child object, by its token.
	 *
	 * @param string $name
	 *
	 * @throws NotFound
	 *
	 * @return DAV\INode
	 */
	public function getChild($name) {
		$this->throttler->sleepDelayOrThrowOnMax($this->request->getRemoteAddress(), self::BRUTEFORCE_ACTION);

		if (is_null($name)) {
			throw new \Sabre\DAV\Exception\Forbidden();
		}

		$albums = $this->albumMapper->getSharedAlbumsForCollaboratorWithFiles($name, AlbumMapper::TYPE_LINK);

		if (count($albums) !== 1) {
			$this->throttler->registerAttempt(self::BRUTEFORCE_ACTION, $this->request->getRemoteAddress());
			throw new NotFound("Unable to find public album");
		}

		return new PublicAlbumRoot($this->albumMapper, $albums[0], $this->rootFolder, $albums[0]->getAlbum()->getUserId(), $this->userConfigService);
	}
}
