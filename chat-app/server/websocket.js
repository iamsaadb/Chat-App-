const WebSocket = require('ws');
const redis = require('redis');
const client = redis.createClient();

//4 events related to websockets: need new because WebSocket is the constructor:
const wss =  new WebSocket.Server({ port: 6000 });

//event handler for connection: web socket server object
wss.on('connection', (ws) => {
    console.log('Someone has connected');
});

//we want to listen to messages being broadcast
client.on('message', (channel, message) => {
 console.log(`subscriber hears message ${message}`)

 //now we re-broadcast to all open tabs:
 wss.clients.forEach((client) => {
     client.send(message);
  });
});

client.subscribe('message-channel');
