const { MongoClient } = require('mongodb');

//MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(url);
var db;

// Initialize our connection to MongoDB once
mongoClient.connect("mongodb://localhost:27017/integration_test", function(err, database){
    if(err){
        console.log('MongoClient connect failed');
        console.log(err);
    }

    db =  database;
});

exports.Connect = function (callback) {
    callback(db);
};

exports.MongoClient = mongoClient;
exports.ObjectID = mongodb.ObjectID;