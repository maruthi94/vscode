/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check

'use strict';

const withDefaults = require('../shared.webpack.config');
const path = require('path');

const clientConfig = withDefaults({
	target: 'webworker',
	context: __dirname,
	entry: {
		extension: './src/pythonMain.ts'
	},
	output: {
		filename: 'pythonMain.js'
	},
	performance: {
		hints: false
	},
	resolve: {
		alias: {
			'vscode-nls': path.resolve(__dirname, '../../build/polyfills/vscode-nls.js')
		}
	}
});
clientConfig.module.rules[0].use.shift(); // remove nls loader

module.exports = clientConfig;
