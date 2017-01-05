DROP TABLE IF EXISTS genrebender;

CREATE TABLE genrebender (
  id SERIAL PRIMARY KEY,
  track varchar(50),
  artist varchar(50),
  song_length integer,
  album varchar(50)
);

INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Foreplay', 'Jalen Santoy',254, 'Foreplay');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Love$ick', 'Mura Masa', 312, 'Love$sick');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('See You There', 'Tidus',433, 'See You There');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Red Bone', 'Childish Gambino',527, 'Awaken My Love');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Janet', 'Berhana',324, 'Berhana');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Jazz', 'Mick Jenkins',420, 'The Waters');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Gentrification', 'Deniro Farrar',345, 'Red Book');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Whateva Will Be', 'A Tribe Called Quest',253, 'We Got It From Here');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Show Me Love', 'Hundred Waters',402, 'Show Me Love');
INSERT INTO genrebender (track, artist, song_length, album) VALUES ('Grown Up', 'No Wyld',333, 'No Meds');


SELECT * FROM genrebender;
