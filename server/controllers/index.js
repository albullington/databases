var models = require('../models');

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
      console.log('in get response for messages')
      var response = {
        results: exampleData
      };
      res.writeHead(200, headers);
      res.end(JSON.stringify(response));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.writeHead(201, headers);
      var messageArray = [req.body.username, req.body.text, req.body.roomname];
      models.messages.post(messageArray, function(err, success) {
        if (err) {return err;}
        res.end();
      }); // pass in array of arguments
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var response = {
        results: exampleData
      };
      res.writeHead(200, headers);
      res.end(JSON.stringify(response));
      },
    post: function (req, res) {
      res.writeHead(201, headers);
      res.end();
    }
  }
};

// this file is client talking to us, sending us get and post requests