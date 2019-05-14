const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const redis = require('redis');
const client = redis.createClient();


const url = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(url);

mongoClient.connect((err) => {
    if (err) console.log(err);
    const db = mongoClient.db('Chat-App');

    const app = express();
    app.use(bodyParser.json());
    
    app.post('/messanger/postMessage', (req, res) => {
        console.log('posting: ' + JSON.stringify(req.body));
        db.collection('messages').insertOne(req.body)
            .then(() => console.log('db insert worked'))
            .catch((e) => console.log(e))

            //publish with redis: 
            client.publish('message-channel', JSON.stringify(req.body));
       res.send('doesnt matter');
    });

    app.get('/messanger/clearMessages', (req, res) => {
      db.collection('messages').remove( { } )
          .then(() => console.log('db clear worked'))
          .catch((e) => console.log(e))
     res.send('messages cleared.');
  });

    app.get('/messanger/getMessages', (req, res) => {
        db.collection('messages').find({}).toArray()
        .then((docs) => {
          console.log(docs);
          res.send(docs);
        })
        .catch((e) => {
          res.send('Error: ' + e);
        })
    });
    
  //   //same as a get endpoint, but says post instead. 
  //   app.post('/users/postUser', (req, res) => {
  //     console.log(req.body);
  //     db.collection('users').insertOne(req.body)
  //         .then(() => console.log('user insert worked'))
  //         .catch((e) => console.log(e))
  //    res.send('doesnt matter');
  // });


  //  //same as a get endpoint, but says post instead. 
  // app.get('/users/getUsers', (req, res) => {
  //     db.collection('users').find({}).toArray()
  //     .then((docs) => {
  //       console.log(docs)
  //       res.send(docs);
  //     })
  //     .catch((e) => {
  //       res.send('Error: ' + e);
  //     })
  // });

    app.listen(5000);
});


