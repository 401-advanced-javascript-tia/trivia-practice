const io = require('socket.io')(3004);

io.on('connection', (socket) => {

  console.log('Client connected!');
  socket.on('disconnect', () => console.log('Client disconnected!'));

  socket.on('time', payload => {

    console.log('TIME: ', payload);
  })
});