'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { handleIncomingMessage } = require('./app/messageHandler');

const app = express();

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('messenger bot')
});

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === 'verify_token') {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', handleIncomingMessage);

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});
