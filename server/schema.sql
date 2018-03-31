DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  id int not null auto_increment,
  username text not null,
  PRIMARY KEY (id)
);

CREATE TABLE Rooms (
  id int not null auto_increment,
  roomname text,
  PRIMARY KEY (id)
);

CREATE TABLE Messages (
  id int not null auto_increment,
  username_id int not null, /* connect foreign key */
  message_text text,
  room_id int, /* connect foreign key */
  PRIMARY KEY (id),
  FOREIGN KEY (username_id) REFERENCES Users(id),
  FOREIGN KEY (room_id) REFERENCES Rooms(id)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

