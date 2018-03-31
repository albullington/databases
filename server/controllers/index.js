var models = require('../models');
var url = require('url');

var exampleData = [{
  username: 'fred',
  text: 'hey there',
  roomname: 'lobby'
}]

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 1,
  'Content-Type': 'text/plain'
}

module.exports = {
  messages: {
    get: function (req, res) {
      var response = {
        results: exampleData
      };
      res.writeHead(200, headers);
      res.end(response);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var newMessage = [];
      req
        .on('data', chunk => newMessage.push(chunk)) // don't need to chunk because express takes care of it
        .on('end'), () => {
          newMessage = JSON.parse(newMessage.join('')); // we don't have to parse, body parser should take care of it
          exampleData.unshift(newMessage); // will delete this once connected to db 
        };
      res.writeHead(201, headers);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

// this file is client talking to us, sending us get and post requests