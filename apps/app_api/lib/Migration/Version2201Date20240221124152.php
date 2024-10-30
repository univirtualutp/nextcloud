<?php

declare(strict_types=1);

namespace OCA\AppAPI\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version2201Date20240221124152 extends SimpleMigrationStep {
	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 *
	 * @return null|ISchemaWrapper
	 */
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options) {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$table = $schema->getTable('ex_apps');

		$table->addColumn('is_system', Types::SMALLINT, [
			'notnull' => true,
			'default' => 0,
			'length' => 1,
			'unsigned' => true,
		]);

		return $schema;
	}
}
