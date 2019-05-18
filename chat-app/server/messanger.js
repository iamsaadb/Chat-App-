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
      //  console.log('posting: ' + JSON.stringify(req.body));
        db.collection('messages').insertOne(req.body)
            .then(() => console.log('db insert worked'))
            .catch((e) => console.log(e))

            //publish with redis: 
            client.publish('message-channel', JSON.stringify(req.body));
       res.send('doesnt matter');
    });

    app.get('/messanger/clearMessages', (req, res) => {
      db.collection('messages').deleteMany({ })
          .then(() => console.log('db clear worked'))
          .catch((e) => console.log(e))
     res.send('messages cleared.');
  });

    app.get('/messanger/getMessages', (req, res) => {
        db.collection('messages').find({}).toArray()
        .then((docs) => {
          res.send(docs);
        })
        .catch((e) => {
          res.send('Error: ' + e);
        })
    });
    
    app.post('/messanger/postUser', (req, res) => {
     // console.log(req.body);
      db.collection('users').insertOne(req.body)
          .then()
          .catch((e) => console.log(e))
     res.send('doesnt matter');
  });

  app.get('/messanger/getUsers', (req, res) => {
      db.collection('users').find({}).toArray()
      .then((docs) => {
        console.log(docs)
        res.send(docs);
      })
      .catch((e) => {
        res.send('Error: ' + e);
      })
  });

  app.post('/messanger/deleteUser', (req, res) => {
    console.log('set to delete: '+req.body.username)
    db.collection('users').findOneAndDelete({username: req.body.username})
    .then((docs) => {
      console.log(docs.username + ' deleted ' + req.body.username)
      res.send(docs);
    })
    .catch((e) => {
      res.send('Error: ' + e);
    })
});

app.get('/messanger/clearUsers', (req, res) => {
  db.collection('users').deleteMany({})
      .then(() => console.log('db user clear worked'))
      .catch((e) => console.log(e))
 res.send('users cleared.');
});

 app.post('/messanger/verifyUser', (req, res) => {
  db.collection('users').findOne({"username": req.body.username})
  .then((docs) => {
    res.send(!docs);
  })
  .catch((e) => {
    res.send('Error: ' + e);
  })
});

    app.listen(5000);
});


