const express = require('express');
const serverless = require('serverless-http');
const tweets = require('../tweets.json');
const cors = require('cors');

const app = express();
app.use(cors());
const router = express.Router();
const jsonSize = Object.keys(tweets).length;
router.get('/', (req, res) => {
  const randomTweet = Math.floor(Math.random() * (jsonSize - 0 + 1)) + 0;
  res.json(tweets[randomTweet]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
