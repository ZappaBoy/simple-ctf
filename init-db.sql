CREATE TABLE IF NOT EXISTS Users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(32) NOT NULL,
  password varchar(32) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO Users (username, password) VALUES ('redhitmark', 'R3dh1tm4rk');
INSERT INTO Users (username, password) VALUES ('ciccosbrz', 'apriporte');
INSERT INTO Users (username, password) VALUES ('zappaboy', 'birraforst');
INSERT INTO Users (username, password) VALUES ('vigimella', 'birraforstenientepiù');
