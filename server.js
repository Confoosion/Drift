var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var players = {};
var rooms = {};

let numOfPlayers = 0;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    numOfPlayers++;
    players[socket.id] = {
        angularRotation: 0,
        x: -100,
        y: -100,
        playerId: socket.id,
        rotation: 0,
        playerNum: numOfPlayers
    };
    socket.emit('currentPlayers', players);

    socket.broadcast.emit('newPlayer', players[socket.id]);

    socket.on('disconnect', () => {
        console.log('user disconnected');
        numOfPlayers--;
        delete players[socket.id];

        socket.emit('disconnection', socket.id);
    });

    socket.on('playerMovement', (movementData) => {
        players[socket.id].x = movementData.x;
        players[socket.id].y = movementData.y;
        players[socket.id].rotation = movementData.rotation;

        socket.broadcast.emit('playerMoved', players[socket.id]);
    });

    socket.on('createRoom', (numbers) => {

        rooms[numbers.code] = {
            code: numbers.code,
            map: numbers.map,
            playerNum: 1
        };

        socket.emit('gameInformationCorrect', rooms);

        socket.join(numbers.code);
        players[socket.id].playerNum = 1;
    });
});

server.listen(8081, () => {
    console.log(`Listening on ${server.address().port}`);
});