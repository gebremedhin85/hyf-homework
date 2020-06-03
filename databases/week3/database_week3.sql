create database meal_sharing;

use meal_sharing;

SET NAMES utf8mb4;
-- creating meal table
create table `meal`(
	`id` INT(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `location` VARCHAR(255) NOT NULL,
  `for_when` DATETIME,
  `max_reservations` INT(3),
  `price` DECIMAL NOT NULL,
  `created_date` DATETIME,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- creating reservation table
create table `reservation`(
	`id` INT(10) unsigned NOT NULL,
	`number_of_guests` INT(3),
	`meal_id` INT(10) unsigned NOT NULL,
    `created_date` DATETIME,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- creating review table
create table `review`(
	`id` INT(10) unsigned NOT NULL,	
	`title` varchar(255),
    `description` TEXT,
    `meal_id` INT(10) unsigned NOT NULL,
    `stars` INT(1),
	`created_date` DATETIME,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meal_review_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 -- inserting objects to each tables
ALTER TABLE meal RENAME COLUMN max_reservatins TO max_reservations;

 INSERT INTO meal (id, 
	 title, 
	 description, 
	 location, 
	 for_when, max_reservations,
	 price, 
	 created_date) 
 VALUE(1, 'Shellfish platter', 
 'Gillardeau oysters, rosé shrimps, cured scallops, grilled langoustine, danish lobster and crab
served with freshly baked sourdough bread, dill mayonnaise, sour crème, and summer salad',
'Havnegade, København K', '2020-06-10 13:15:00', 15, 350.55,
 '2020-05-12 18:30:00');
 INSERT INTO meal (id, 
	 title, 
	 description, 
	 location, 
	 for_when, max_reservations,
	 price, 
	 created_date) 
 VALUE(2, 'Open-faced sandwiches',
	'The sandwiches are served on sourddough ryebread made in house
    breaded plaice, shrimps, lobster mayonnaise and lemon',
    'Hvovebengåde, København H',
    '2020-06-15 14:55:00', 60, 139.99, '2020-06-02 09:00:00');
 INSERT INTO meal (id, 
	 title, 
	 description, 
	 location, 
	 for_when, max_reservations,
	 price, 
	 created_date) 
 VALUE(3, 'Green menu', 
	'White Asparagus- Onions - Spinach - Cep Mushrooms 
	Brocolini- Vesterhavs Cheese - Shiitake Mushrooms  
	Sorrel Sorbet- Rhubarb/Rosehip - Hazelnut Crunc',
	'Valby, Copenhagen',
	'2020-07-05 17:30:00', 35, 290.00, '2020-06-25 12:55:00');
 INSERT INTO meal (id, title, description, location, for_when, max_reservations,
	 price, created_date) VALUE(4, 'cheese burger', 
	 'it is a classic softice burger with organic cheese and ofcource medium frise', 
	 'Axel torve, vesterport CPH', '2020-06-20 15:00:00', 50, 120.50, '2020-05-30 13:00:00');
 
  INSERT INTO meal (id, 
	 title, 
	 description, 
	 location, 
	 for_when, max_reservations,
	 price, 
	 created_date) 
 VALUE(5, 'Salat pizza', 
	 'shawarama eller kylling alle med  ost, blandet salat og dressing', 
	 'Nørrebro, København NV', '2020-06-26 12:30:00', 45, 105.75, 
	 '2020-06-08 08:45:25');
 
 -- Reservations
  INSERT INTO reservation (id, 
	 number_of_guests,
     meal_id,
	 created_date) 
 VALUE(1, 6, 3, '2020-06-29 17:45:00');
 INSERT INTO reservation (id, 
	 number_of_guests,
     meal_id,
	 created_date) 
 VALUE(2, 10, 5, '2020-06-16 08:35:00');
 INSERT INTO reservation (id, 
	 number_of_guests,
     meal_id,
	 created_date) 
 VALUE(3, 20, 1, '2020-05-25 11:25:00');
 
 -- Review
 INSERT INTO review (id, title,
     description, meal_id, 
     stars, created_date) 
 VALUE(1, 'tasty one', 
	 'The burger is good. I put it above average. Frise and mynus was what I like the most.',
	 4, 3, '2020-06-26 10:00:55');
 INSERT INTO review (id, title,
     description, meal_id, 
     stars, created_date) 
 VALUE(2, 'satisfied', 
	 'Nice pizza with fresh ingriends. Salats, tomatos, agured with dressing tasts nice. The shawarama was not as tasty as I expected',
	 5, 2, '2020-07-02 16:25:00');
     
-- Queries
-- Meals
-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal ( 
	 title, 
	 description, 
	 location, 
	 for_when, max_reservations,
	 price, 
	 created_date) 
 VALUE( 'Pasta', 
	 'Home made classic Italian pasta with beef souce and mazzorella cheese.', 
	 'Istagade, København H', '2020-07-04 11:30:00', 24, 185.75, 
	 '2020-06-18 07:50:25');

-- Get a meal with any id
SELECT meal.id, meal.title, meal.location 
FROM meal
WHERE meal.id = 4;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET meal.title = 'Mocoronni', meal.location = 'Vesterbrogade, Københaven H' 
WHERE id = 6;

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE meal.id = 4;

-- Reservation
-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (id, 
	 number_of_guests,
     meal_id,
	 created_date) 
 VALUE(4, 22, 6, '2020-06-27 18:15:59');
 
-- Get a reservation with any id, 
SELECT * FROM reservation 
WHERE reservation.id = 4;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET reservation.number_of_guests = 10, reservation.meal_id = 5
WHERE id = 4;

-- Delete a reservation with any id, 
DELETE FROM reservation WHERE reservation.id = 4;

-- Review
-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (id, title,
     description, meal_id, 
     stars, created_date) 
 VALUE(3, 'cool one', 
	  'Really fantastic mocoronni meal',
	 6, 4, '2020-07-03 10:15:28');
INSERT INTO review (id, title,
     description, meal_id, 
     stars, created_date) 
 VALUE(4, 'fantastic', 
	  'It is exceptionally tasty shiwarama pizza',
	 5, 5, '2020-06-30 16:25:00');

-- Get a review with any id
SELECT * FROM review WHERE review.id = 3;

-- Update a review with any id. Update any attribute fx the title or multiple attributes
UPDATE review SET review.stars = 2, review.title = 'Not bad'
WHERE review.id = 3;

-- Delete a review with any id, 
 DELETE FROM review WHERE review.id = 3;

-- Additional queries adding some reservations and reviews 
INSERT INTO reservation (id, 
	 number_of_guests,
     meal_id,
	 created_date) 
 VALUE(5, 26, 5, '2020-06-21 20:05:00');
 INSERT INTO review (id, title,
     description, meal_id, 
     stars, created_date) 
 VALUE(5, 'Green', 
	  'It was special vegetables meal',
	 3, 4, '2020-06-28 19:50:30');
INSERT INTO review (id, title,
     description, meal_id, 
     stars, created_date) 
 VALUE(3, 'sandwich', 
	  'Tasty open sandwich',
	 2, 4, '2020-06-19 13:15:00');

-- Functionality queries
-- Get meals that has a price smaller than a specific price 
SELECT meal.id, meal.title, meal.price FROM meal
WHERE meal.price < 200;
 
-- Get meals that still has available reservations
SELECT meal.id AS meal_id, meal.title, meal.max_reservations 
FROM meal
LEFT JOIN reservation ON meal.id = reservation.meal_id
WHERE (meal.max_reservations - reservation.number_of_guests) > 0
GROUP BY meal.id;
 
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE meal.title LIKE '%pizza' OR meal.title LIKE 'pizza%';

-- Get meals that has been created between two dates
SELECT * FROM meal WHERE meal.created_date 
BETWEEN date('2020-06-25 20:30:20') AND date('2020-06-27 10:30:20');
    
-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal  LIMIT 3;
 
-- Get the meals that have good reviews(asuming meals with greater than four stars as good)
SELECT meal.id AS meal_id, meal.title, review.stars   
FROM meal
INNER JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3
ORDER BY meal.id;

-- Get reservations for a specific meal sorted by created_date
SELECT reservation.id AS reservation_id, reservation.created_date 
FROM reservation
WHERE reservation.meal_id = 5 
ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, AVG(review.stars) AS review_average FROM meal
INNER JOIN review ON meal.id = review.meal_id
GROUP BY meal.id;

