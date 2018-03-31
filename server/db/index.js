var mysql = require('mysql');
var models = require('../models');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "student",
  password: "student"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("use chat;", function (err) {
    if (err) { throw err; }
  });
});

module.exports.connection = connection;