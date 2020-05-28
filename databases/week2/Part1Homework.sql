-- Homework part one

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task
    (title, description, created, updated, due_date, status_id)
VALUE('Write an email',
'The title of the email should be call for paper',
'2017-11-20 00:00:15',
'2017-12-10 05:05:30',
'2018-02-10 11:00:30',
2
);

-- Change the title of a task
UPDATE task SET title='Print the file' WHERE id=36;

-- Change a task due date
UPDATE task SET due_date='2019-02-07 11:10:05' WHERE id=36;
-- Part 1: Working with tasks 

-- Change a task status
UPDATE task SET task.status_id=1 WHERE id=36;

-- Mark a task as complete
UPDATE task SET task.status_id=3 WHERE id=36;

-- Delete a task
DELETE FROM task WHERE task.id=36;  