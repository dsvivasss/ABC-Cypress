const { defineConfig } = require('cypress')

module.exports = defineConfig({
	env: {
		qa_url: 'http://localhost:3000',
		login_url: 'http://localhost:3000/company_login',
		login_url_user: 'http://localhost:3000/candidate_login',
		projects_url: 'http://localhost:3000/project_list',
	},
	screenshotsFolder: 'cypress/screenshots_4-39',
	viewportHeight: 1080,
	viewportWidth: 1920,
	blockHosts: [
		'*.google-analytics.com',
		'*.google.com',
		'*.gstatic.com',
		'*.googletagmanager.com',
		'*.googletagservices.com',
		'*.googleadservices.com',
		'*.youtube.com',
		'*.intercom.io',
		'*.api-iam.intercom.io',
		'*.linkedin.oribi.io'
	],
	defaultCommandTimeout: 30000,
	chromeWebSecurity: true,
	waitForAnimations: false,
	e2e: {
		setupNodeEvents(on, config) {
		return require('./cypress/plugins/index.js')(on, config)
		},
		testIsolation: false,
		specPattern: 'cypress/e2e/**/*.feature',
		// experimentalSkipDomainInjection: [ "*.skyciv.com" ], // Only works on v12+. Needed so that cypress doesn't try to change document.domain to super domain (skyciv.com)
		experimentalRunAllSpecs: true,
	},
	// Disable videos and screenshots for now
	video: false,
	screenshots: false,
	// reporter: "mochawesome",
	// reporterOptions: {
	// 	"reportDir": "reports",
	// 	"overwrite": false,
	// 	"html": true,
	// 	"json": true
	// }
})
