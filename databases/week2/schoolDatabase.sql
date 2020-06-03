-- Part 2: School database
CREATE DATABASE school_database;
USE school_database;

-- creating tables class and student
SET NAMES utf8mb4;
-- Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
 `class_id` int(10) unsigned NOT NULL,
 CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- class --
insert into class (id, name, start_date, end_date) values (10, 'Class - 10', '2019-03-10 12:00:00', '2020-01-28 12:00:00');
insert into class (id, name, start_date, end_date) values (11, 'Class - 11', '2019-06-22 12:00:00', '2020-04-26 12:00:00');
insert into class (id, name, start_date, end_date) values (12, 'Class - 12', '2019-09-10 12:00:00', '2020-07-12 12:00:00');
insert into class (id, name, start_date, end_date) values (13, 'Class - 13', '2020-01-26 12:00:00', '2020-10-10 12:00:00');
insert into class (id, name, start_date, end_date) values (14, 'Class - 14', '2020-03-28 12:00:00', '2021-01-15 12:00:00');

-- student --
insert into student (id, name, email, phone, class_id) values (1, 'Gabrial Mario', 'glmario20@gmail.com', '345-678-9006', 10);
insert into student (id, name, email, phone, class_id) values (2, 'Jhon Arron', 'ronman_30@gmail.com', '450-914-8934', 10);
insert into student (id, name, email, phone, class_id) values (3, 'Jabir Salman', 'birsal@yahoo.com', '463-984-1235', 11);
insert into student (id, name, email, phone, class_id) values (4, 'Abdul Yonus', 'abnus1980@hotmail.com', '453-498.0890', 12);
insert into student (id, name, email, phone, class_id) values (5, 'Mariem Khalid', 'lidmariem_16@yahoo.com', '448-874-4539', 13);
insert into student (id, name, email, phone, class_id) values (6, 'Ashwaria Dhass', 'ashweria55@gmail.com', '450-678-3434', 14);

SELECT * FROM student;
SELECT * FROM class;

-- Create an index on the name column of the student table

CREATE  INDEX index_name
ON student (name);

-- Add a new column to the class table named status
ALTER TABLE class
ADD COLUMN status  enum('not started', 'ongoing', 'finished'); 
 
 

 