import Slack from "@slack/bolt";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
let today = new Date();
today = today.toLocaleDateString("en-US", options);

const blocks = [{
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": `:x: Some tests failed. [ ${today} ]`
    }
  }
  // {
  //   "type": "image",
  //   "image_url": "https://media.giphy.com/media/3o7aDcz3u24RLHjGGI/giphy.gif",
  //   "alt_text": "SkyCiv image"
  // },
  // {
  //   "type": "divider"
  // },
  // {
  //   "type": "context",
  //   "elements": [
  //     {
  //       "type": "image",
  //       "image_url": "https://media.giphy.com/media/3o7aDcz3u24RLHjGGI/giphy.gif",
  //       "alt_text": "SkyCiv image"
  //     },
  //     {
  //       "type": "mrkdwn",
  //       "text": "Author: <https://www.trung&daniel.com/|*Trung and Daniel*>"
  //     }
  // ]
  // },
]

const app = new Slack.App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Add blocks payload here ... */

await app.client.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: "Test failed",
  blocks: blocks
});

await app.client.files.uploadV2({
  token: process.env.SLACK_BOT_TOKEN,
  initial_comment: "Log file",
  channel_id: process.env.SLACK_CHANNEL_ID,
  filename: 'log.txt',
  file: fs.createReadStream('log.txt'),
});