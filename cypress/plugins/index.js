/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
	
	require("cypress-fail-fast/plugin")(on, config);

	on('before:browser:launch', (browser = {}, args) => {
		if (browser.family === 'chrome') {
			launchOptions.preferences.default['default.disable_3d_apis'] = false;
			launchOptions.args.push('--enable-features=VaapiVideoDecoder');
			launchOptions.args.push('--use-gl=egl');
		} else if (browser.family === 'electron') {
			
			args.webPreferences.additionalArguments = [
			  ...(args.webPreferences.additionalArguments || []),
			  '--disable-gpu', // Disables GPU hardware acceleration. If software renderer is not in place, then the GPU process won't launch.
			  '--use-gpu-in-tests', // Use hardware gpu, if available, for tests.
			];
		}
	});
	
 	on('file:preprocessor', cucumber())
}