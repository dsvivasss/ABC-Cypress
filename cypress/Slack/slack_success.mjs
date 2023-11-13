import Slack from "@slack/bolt";
import dotenv from "dotenv";
dotenv.config();

const args = process.argv.slice(2);

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

const blocks = [{
  "type": "section",
  "text": {
    "type": "mrkdwn",
    "text": args.length > 0 ? args[0] : `All tests passed. [ ${today} ]`
  }
}]

const app = new Slack.App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Add blocks payload here ... */

await app.client.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: "Test passed",
  blocks: blocks
});