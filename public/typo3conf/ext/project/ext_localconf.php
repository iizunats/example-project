<?php
if (!\defined('TYPO3_MODE')) {
	exit('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript(
	'project',
	'setup',
	'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:project/Configuration/TypoScript/setup.typoscript">'
);