-- Part 4: Creating a club database

CREATE DATABASE football_club;
USE football_club;

-- Creating tables
SET NAMES utf8mb4;
-- Players
CREATE TABLE `player`
(
  `id` int
(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar
(255) NOT NULL,
  `age` int
(3) NOT NULL,
  
  PRIMARY KEY
(`id`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Game
CREATE TABLE `game`
(
  `id` int
(10) unsigned NOT NULL AUTO_INCREMENT,
  `played` DATETIME NULL DEFAULT NULL,
  `result` varchar
(255),
   
  PRIMARY KEY
(`id`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Possition
CREATE TABLE `field`
(

  `id` int
(10) unsigned NOT NULL AUTO_INCREMENT,
  
  `possition` varchar
(255) NOT NULL,
 `number_players` int
(3), 
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `player_game`
(

  `player_id` int
(10) unsigned NOT NULL,
  
  `game_id` int
(10) unsigned NOT NULL,
  
  PRIMARY KEY
(`player_id`, `game_id`),
  
  CONSTRAINT `fk_player_game_player` FOREIGN KEY
(`player_id`) REFERENCES `player`
(`id`) ON
DELETE CASCADE ON
UPDATE CASCADE,
  
  CONSTRAINT `fk_player_game_game` FOREIGN KEY
(`game_id`) REFERENCES `game`
(`id`) ON
DELETE CASCADE ON
UPDATE CASCADE

) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `player_field`
(
  `player_id` int
(10) unsigned NOT NULL,
  
  `field_id` int
(10) unsigned NOT NULL,
  
  PRIMARY KEY
(`player_id`, `field_id`),
  
  CONSTRAINT `fk_player_field_player` FOREIGN KEY
(`player_id`) REFERENCES `player`
(`id`) ON
DELETE CASCADE ON
UPDATE CASCADE,
  
  CONSTRAINT `fk_player_field_field` FOREIGN KEY
(`field_id`) REFERENCES `field`
(`id`) ON
DELETE CASCADE ON
UPDATE CASCADE

) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


 
 

 
