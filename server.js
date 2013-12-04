//setup Dependencies
var connect = require('connect')
    , express = require('express')
    , io = require('socket.io')
    , opts = require(__dirname + '/config/opts.js');

// Create server
var server = express.createServer();

// Load express configuration
require(__dirname + '/config/env.js')(express, server, connect);

// Load error configuration
require(__dirname + '/config/err.js')(server);

// Listen
server.listen(opts.p);

//Setup Socket.IO
require(__dirname + '/config/io.js')(server, io);

// routes
require(__dirname + '/routes')(server);

console.log('Listening on http://0.0.0.0:' + opts.p );
