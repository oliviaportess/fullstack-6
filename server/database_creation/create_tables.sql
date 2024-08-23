USE scoreboard;


CREATE TABLE
  users (
    user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
  );


CREATE TABLE
  scores (
    score_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    score INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id)
  );
  