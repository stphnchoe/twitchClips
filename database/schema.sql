DROP DATABASE IF EXISTS twitchclips;

CREATE DATABASE twitchclips;

USE twitchclips;

CREATE TABLE comments (
  id SERIAL NOT NULL,
  video_id varchar(50) NOT NULL,
  username varchar(20) NOT NULL,
  comment varchar(300) NOT NULL,
  avatar_img varchar(150) NOT NULL,
  created_at TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (video_id) REFERENCES clips(id)
);

CREATE TABLE clips (    
  id varchar(50) NOT NULL,
  title varchar(100) NOT NULL,
  broadcaster varchar(20) NOT NULL,
  views int NOT NULL,
  game varchar(60) NOT NULL,
  embed_url varchar(150) NOT NULL,
  channel_url varchar(60) NOT NULL,
  created_at TIMESTAMP,
  PRIMARY KEY (id)
);