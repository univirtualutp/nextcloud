<?php

declare(strict_types=1);

namespace OCA\AppAPI\Db\Translation;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\MultipleObjectsReturnedException;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\Exception;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * @template-extends QBMapper<TranslationProvider>
 */
class TranslationProviderMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'ex_translation');
	}

	/**
	 * @throws Exception
	 */
	public function findAllEnabled(): array {
		$qb = $this->db->getQueryBuilder();
		$result = $qb->select('exs.*')
			->from($this->tableName, 'exs')
			->innerJoin('exs', 'ex_apps', 'exa', $qb->expr()->eq('exa.appid', 'exs.appid'))
			->where(
				$qb->expr()->eq('exa.enabled', $qb->createNamedParameter(1, IQueryBuilder::PARAM_INT))
			)
			->executeQuery();
		return $result->fetchAll();
	}

	/**
	 * @param string $appId
	 * @param string $name
	 *
	 * @return TranslationProvider
	 * @throws DoesNotExistException
	 * @throws Exception
	 * @throws MultipleObjectsReturnedException
	 */
	public function findByAppidName(string $appId, string $name): TranslationProvider {
		$qb = $this->db->getQueryBuilder();
		return $this->findEntity($qb->select('*')
			->from($this->tableName)
			->where($qb->expr()->eq('appid', $qb->createNamedParameter($appId), IQueryBuilder::PARAM_STR))
			->andWhere($qb->expr()->eq('name', $qb->createNamedParameter($name), IQueryBuilder::PARAM_STR))
		);
	}

	/**
	 * @throws Exception
	 */
	public function removeAllByAppId(string $appId): int {
		$qb = $this->db->getQueryBuilder();
		$qb->delete($this->tableName)
			->where(
				$qb->expr()->eq('appid', $qb->createNamedParameter($appId, IQueryBuilder::PARAM_STR))
			);
		return $qb->executeStatement();
	}
}
