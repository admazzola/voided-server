/*
Start the server with
node main.js 

*/

var express = require('express');
var app = express();
//Static resources server
app.use(express.static(__dirname + '/www'));

var server = app.listen(6505, function () {
    var port = server.address().port;
    console.log('Server running at port %s', port);
});

var io = require('socket.io')(server);
/* Connection events */

io.on('connection', function(client) {
    console.log('User connected');

    client.on('joinGame', function(tank){
        console.log(tank.id + ' joined the game');
      //  var initX = getRandomInt(40, 900);
      //  var initY = getRandomInt(40, 500);
      //  client.emit('addTank', { id: tank.id, type: tank.type, isLocal: true, x: initX, y: initY, hp: TANK_INIT_HP });
      //  client.broadcast.emit('addTank', { id: tank.id, type: tank.type, isLocal: false, x: initX, y: initY, hp: TANK_INIT_HP} );

      //  game.addTank({ id: tank.id, type: tank.type, hp: TANK_INIT_HP});
    });

  });
