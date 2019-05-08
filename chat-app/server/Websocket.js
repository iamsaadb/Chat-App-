import WebSocket from 'ws';


//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws)=>{
    console.log('Someone has connected');
    });
    
    client.on('message', (channel, message) => {
        console.log(`subscriber hears message ${message} `);
        wss.clients.forEach((client)=>{
            client.sendCommand(message);
        });
    });


//start our server
server.listen(process.env.PORT || 4000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
