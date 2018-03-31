var db = require('../db');
// DON'T REQUIRE CONTROLLERS
// Learning: only one file should require the other. If both require each other, it could lead
// to weird errors like having an empty module.exports object.

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (messageArray, callback) { // add @ symbol here?
      console.log('got to models post function');
      db.connection.query('INSERT INTO Messages SET ?', {message_text: messageArray[1]}, function(err) {
        if (err) {throw err;}
      });
    callback();
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      db.connection.query('INSERT INTO Users SET ?', {username: messageArray[0]}, function(err) {
        if (err) {throw err;}
      });
    }
  }
}

// this file is us talking to database, sending the database get and post requests

// declare vars in mysql with dollar sign $????


// connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {

// var exampleData = {
//   username: 'fred',
//   text: 'hey there',
//   roomname: 'lobby'
// }

// var post  = {id: 1, title: 'Hello MySQL'};
// var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
//   if (error) throw error;
//   // Neat!
// });
