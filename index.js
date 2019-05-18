'use strict';

const path = require('path');

function getRulePackageDirectory(name, suffix) {
	const packagePath = require.resolve(name);
	const nodeModulesPath = path.dirname(packagePath);

	return path.join(nodeModulesPath, suffix || '');
}

const TSLINT_RULES = {
	'adjacent-overload-signatures': true,
	'member-access': true,
	'member-ordering': [
		true,
		{
			order: 'fields-first'
		}
	],
	'no-any': true,
	'no-empty-interface': true,
	'no-import-side-effect': true,
	'no-inferrable-types': [
		true,
		'ignore-params',
		'ignore-properties'
	],
	'no-internal-module': true,
	'no-non-null-assertion': true,
	'no-parameter-reassignment': true,
	'no-reference': true,
	'no-unnecessary-type-assertion': true,
	'no-var-requires': true,
	'only-arrow-functions': [
		true,
		'allow-declarations',
		'allow-named-functions'
	],
	'prefer-for-of': true,
	typedef: [
		true,
		'call-signature',
		'parameter',
		'property-declaration',
		'member-variable-declaration'
	],
	'typedef-whitespace': [
		true,
		{
			'call-signature': 'nospace',
			'index-signature': 'nospace',
			parameter: 'nospace',
			'property-declaration': 'nospace',
			'variable-declaration': 'nospace'
		},
		{
			'call-signature': 'onespace',
			'index-signature': 'onespace',
			parameter: 'onespace',
			'property-declaration': 'onespace',
			'variable-declaration': 'onespace'
		}
	],
	'unified-signatures': true,
	'await-promise': true,
	'function-constructor': true,
	'no-bitwise': true,
	'no-duplicate-super': true,
	'no-dynamic-delete': true,
	'no-floating-promises': true,
	'no-for-in-array': true,
	'no-inferred-empty-object-type': true,
	'no-invalid-this': true,
	'no-misused-new': true,
	'no-submodule-imports': true,
	'no-this-assignment': true,
	'no-unnecessary-class': true,
	'no-unsafe-any': true,
	'no-use-before-declare': true,
	'prefer-object-spread': true,
	'restrict-plus-operands': true,
	'strict-type-predicates': true,
	'use-default-type-parameter': true,
	'array-type': [
		true,
		'array-simple'
	],
	'arrow-return-shorthand': true,
	'callable-types': true,
	'class-name': true,
	encoding: true,
	'file-name-casing': [
		true,
		'kebab-case'
	],
	'import-spacing': true,
	'increment-decrement': [
		true,
		'allow-post'
	],
	'interface-name': [
		true,
		'never-prefix'
	],
	'interface-over-type-literal': true,
	'match-default-export-name': true,
	'newline-before-return': true,
	'no-angle-bracket-type-assertion': true,
	'no-boolean-literal-compare': true,
	'no-redundant-jsdoc': true,
	'no-reference-import': true,
	'no-unnecessary-callback-wrapper': true,
	'no-unnecessary-qualifier': true,
	'object-literal-shorthand': [
		true,
		'always'
	],
	'ordered-imports': true,
	'prefer-method-signature': true,
	'return-undefined': true,
	'switch-final-break': [
		true,
		'always'
	],
	'type-literal-delimiter': true
};

const TSLINT_CONFIG_XO_RULES = {
	'valid-jsdoc': false,
	'ter-arrow-parens': true,
	'object-curly-spacing': false,
	'linebreak-style': 'LF'
};

const TSLINT_CONSISTENT_CODESTYLE_RULES = {
	'no-accessor-recursion': true,
	'no-collapsible-if': true,
	'no-static-this': true,
	'object-shorthand-properties-first': true,
	'prefer-const-enum': true,
	'naming-convention': [
		true,
		{ type: 'variable', modifiers: ['global', 'const'], format: ['camelCase', 'UPPER_CASE'] },
		{ type: 'functionVariable', format: 'camelCase' },
		{ type: 'member', modifiers: 'private', leadingUnderscore: 'require' },
		{ type: 'member', modifiers: 'protected', leadingUnderscore: 'require' },
		{ type: 'type', format: 'PascalCase' },
		{ type: 'genericTypeParameter', prefix: 'T' },
		{ type: 'enumMember', format: 'PascalCase' }
	]
};

const TSLINT_MICROSOFT_CONTRIB_RULES = {
	'mocha-avoid-only': true,
	'mocha-unneeded-done': true,
	'no-for-in': true,
	'no-typeof-undefined': true,
	'no-useless-files': true
};

const TSLINT_SONARTS_RULES = {
	'no-all-duplicated-branches': true,
	'no-case-with-or': true,
	'no-collection-size-mischeck': true,
	'no-identical-conditions': true,
	'no-identical-expressions': true,
	'no-in-misuse': true,
	'no-misleading-array-reverse': true,
	'no-useless-increment': true,
	'no-useless-intersection': true,
	'consecutive-overloads': true,
	'max-union-size': {
		severity: 'warning'
	},
	'no-array-delete': true,
	'no-commented-code': {
		severity: 'warning'
	},
	'no-dead-store': {
		severity: 'warning'
	},
	'no-duplicate-in-composite': true,
	'no-duplicated-branches': true,
	'no-gratuitous-expressions': true,
	'no-hardcoded-credentials': [
		true,
		'password',
		'pwd',
		'passwd',
		'secret',
		'token'
	],
	'no-invariant-return': true,
	'no-inverted-boolean-check': true,
	'no-nested-incdec': true,
	'no-nested-template-literals': true,
	'no-redundant-boolean': true,
	'no-redundant-jump': true,
	'no-redundant-parentheses': true,
	'no-same-line-conditional': true,
	'no-small-switch': true,
	'no-unconditional-jump': true,
	'no-undefined-argument': true,
	'prefer-default-last': true,
	'prefer-optional': true,
	'prefer-promise-shorthand': true
};

module.exports = {
	extends: 'tslint-config-xo',
	rulesDirectory: [
		getRulePackageDirectory('tslint-microsoft-contrib'),
		getRulePackageDirectory('tslint-consistent-codestyle'),
		getRulePackageDirectory('tslint-sonarts', 'lib/rules')
	],
	rules: Object.assign(
		{},
		TSLINT_RULES,
		TSLINT_CONFIG_XO_RULES,
		TSLINT_MICROSOFT_CONTRIB_RULES,
		TSLINT_CONSISTENT_CODESTYLE_RULES,
		TSLINT_SONARTS_RULES
	)
};
