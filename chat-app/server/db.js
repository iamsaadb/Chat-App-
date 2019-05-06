const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const client = redis.createClient();


// Connect to mongo
const url = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(url);
    console.log('Connected to DB');

    // connect to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
  
 // Insert chat message that we recieve from ws

 const collection = db.collection('chat messages');
collection.insert({ content: msg }, function(err, o) {
    if (err) { console.warn(err.message); }
    else { console.log("chat message inserted into db: " + msg); }
});
});
const app = express();
app.use(bodyParser.json());

app.post('/messanger/postMessage', (req,res) =>{
   console.log(req.body);

});

app.listen(4000);


