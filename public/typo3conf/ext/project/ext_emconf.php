<?php

$EM_CONF['project'] = [
	'title'            => 'iizuna Project Extension',
	'description'      => 'A TYPO3 Example Extension for iizuna integration.',
	'category'         => 'fe',
	'version'          => '0.1.0',
	'state'            => 'beta',
	'clearcacheonload' => 1,
	'author'           => 'Tim Rücker',
	'author_email'     => 'tim.ruecker@iizunats.com',
	'constraints'      => [
		'depends' => [
			'typo3' => '9.5.0-9.5.99',
			'php'   => '7.0.0-7.2.99',
		],
	],
];