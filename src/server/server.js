const express = require('express');
const bodyParser = require('body-parser');

const chatroomHandler = require('./handlers/chatroomHandler.js');
const messagesHandler = require('./handlers/messagesHandler.js');
const metadataHandler = require('./handlers/metadataHandler.js');
const usersHandler = require('./handlers/usersHandler.js');
const mongoURL = process.env["MONGO_URL"];
const { MongoClient } = require('mongodb');
const client = new MongoClient(mongoURL);
const { loadAll } = require('./helpers/mongoHelper.js');

const loadAllMiddle = (collectionName) => async (req, res, next) => {
  await loadAll(collectionName).then(entries => {
    if(!res.locals.entries) {
      res.locals.entries = {};
    }
    res.locals.entries[collectionName] = entries;
  });
  next();
}

const app = express();

app.get((req, res, next) => {
  client.connect().then(() => {
    const db = client.db('channels');
    const collection = db.collection('messages');
    global.messages = collection.find();
    // console.log(collection);
  }).catch(err => console.log(err)).finally(() => {client.close()})
})

app.use(express.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../../dist'));

app.use('/messages', loadAllMiddle('messages'), messagesHandler);

app.use('/users', loadAllMiddle('users'), usersHandler);

app.use('/metadata', loadAllMiddle('metadata'), metadataHandler);

app.use('/chatrooms', loadAllMiddle('chatrooms'), chatroomHandler);

module.exports = app;