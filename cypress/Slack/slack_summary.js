const fs = require('fs');
const Slack = require("@slack/bolt");
const dotenv = require("dotenv");

const sendSummary = function() {

	dotenv.config();

	const currentDirectory = process.cwd();
	if (currentDirectory.indexOf('admin/qa-e2e') == -1) {
		console.log("RUNNING ON LOCAL, NO SLACK");
		return;
	}

	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZoneName: 'short'
	};
	
	let today = new Date();
	today = today.toLocaleDateString("en-US", options);
	
	const file_path = './dashboard/data/status.json';
	const json_data = JSON.parse(fs.readFileSync(file_path, 'utf8'))[0];

	let status_string = `:sob: Some tests failed. [${today}]`;
	if (json_data.total_tests == json_data.tests_passed) {
		status_string = `:smiley: All tests passed. [${today}]`;
	}
	
	let all_feature_data = json_data.all_features;
	
	let blocks = [
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": status_string,
				"emoji": true
			}
		},
		{
			"type": "divider"
		}
	];
	
	Object.keys(all_feature_data).forEach(feature => {
		if (all_feature_data[feature].passed_attempt == -1) {
			blocks.push({
				"type": "section",
				"text": {
					"type": "plain_text",
					"text": `:warning: ${feature} did not pass.`,
					"emoji": true
				}
			});
		} else {
			blocks.push({
				"type": "section",
				"text": {
					"type": "plain_text",
					"text": `:white_check_mark: ${feature} passed on attempt ${all_feature_data[feature].passed_attempt}`,
					"emoji": true
				}
			});
		}
	}); 
	
	blocks.push({
		"type": "divider"
	});
	
	blocks.push({
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "<https://platform.skyciv.com/admin/tools/e2e|e2e Test Dashboard>"
		}
	});
	
	// const app = new Slack.App({
	// 	signingSecret: process.env.SLACK_SIGNING_SECRET,
	// 	token: process.env.SLACK_BOT_TOKEN,
	// });
	
	// /* Add blocks payload here ... */
	// await app.client.chat.postMessage({
	// 	token: process.env.SLACK_BOT_TOKEN,
	// 	channel: process.env.SLACK_CHANNEL,
	// 	text: "Test passed",
	// 	blocks: blocks
	// });

}

module.exports = {
	sendSummary: sendSummary
};