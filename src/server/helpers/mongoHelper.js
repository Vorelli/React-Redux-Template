const mongoURL = process.env["MONGO_URL"];
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'channels';

async function loadAll(collectionName) {
  await client.connect();
  const db = await client.db(dbName);
  const collection = await db.collection(collectionName);
  const entries = await collection.find({}).toArray();
  await client.close();
  return entries;
}

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to MongoDB server');
  const db = client.db(dbName);
  const collection = db.collection('messages');
}

main()
  .catch(console.error)
  .finally(() => client.close());

module.exports = { loadAll, main };