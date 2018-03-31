var db = require('../db');
// DON'T REQUIRE CONTROLLERS
// Learning: only one file should require the other. If both require each other, it could lead
// to weird errors like having an empty module.exports object.

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (messageObj) { // add @ symbol here?
      console.log('got to models post function');
      db.connection.query("INSERT INTO Users (username) VALUES ('$messageObj.username');", function(err) {
        if (err) {throw err;}
      });
      db.connection.query("INSERT INTO Rooms (roomname) VALUES ('$messageObj.roomname');", function(err) {
        if (err) {throw err;}
      });
      db.connection.query("INSERT INTO Messages (message_text) VALUES ('$messageObj.text');", function(err) {
        if (err) {throw err;}
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// this file is us talking to database, sending the database get and post requests

// declare vars in mysql with dollar sign $????