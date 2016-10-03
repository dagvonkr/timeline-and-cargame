var express = require('express');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/display.html');
});


io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('timeline', function(message) {
    socket.broadcast.emit('timeline', message);
  });

  socket.on('sliderChanged', function (message) {
    // console.log('---> sliderChanged: ${message}');
    socket.broadcast.emit('sliderChanged', message);
  });

  socket.on('sliderProgress', function (message) {
    // console.log('---> sliderChanged: ${message}');
    socket.broadcast.emit('sliderProgress', message);
  });

  socket.on('seek', function (message) {
    socket.broadcast.emit('seek', message);
  });

  socket.on('annoChange', function (message) {
    socket.broadcast.emit('annoChange', message);
  });

  socket.on('updateEmployees', function(message) {
    socket.broadcast.emit('updateEmployees', message)
  });

  socket.on('key', function(keyCode) {
    console.log('---> keyCode: ${keyCode}')
    socket.broadcast.emit('key', keyCode);
  });
  socket.on('touch', function(downOrUp) {
    console.log('touch');
    socket.broadcast.emit('touch', downOrUp);
  });

  socket.on('popUp', function() {
    socket.broadcast.emit('popUp');
  });
  socket.on('closePopUp', function() {
    socket.broadcast.emit('closePopUp');
  });

  socket.on('disconnect', function () {
    console.log('a user disconnected');
  });

});


app.use(express.static(__dirname + '/'));



http.listen(3000, function(){
  console.log('listening on *:3000');
});
