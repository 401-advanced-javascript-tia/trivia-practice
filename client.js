'use strict';

const ioClient = require('socket.io-client').connect('http://localhost:3004');

setInterval(() => {

  ioClient.emit('time', new Date().toTimeString());

}, 1000)
