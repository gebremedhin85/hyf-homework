
-- database week1 homework 
-- 1. Find out how many tasks are in the task table
SELECT  COUNT(id) AS task_count FROM task;  

-- 2. Find out how many tasks in the task table do not have a valid due date
 SELECT  COUNT(task.id)  AS task_due_date_unspecified FROM task 
 WHERE task.Due_date is NULL;

-- 3. Find all the tasks that are marked as done
	 SELECT task.id, task.title, status.name FROM task
INNER JOIN status
	ON task.status_id=status.id
	WHERE  task.status_id =3
    ORDER BY task.id;

-- 4. Find all the tasks that are not marked as done
SELECT task.id, task.title, status.name FROM task
INNER JOIN status
	ON task.status_id=status.id
	WHERE  task.status_id !=3
    ORDER BY task.id;

-- 5. Get all the tasks, sorted with the most recently created first
SELECT * from task
GROUP BY task.created
ORDER BY task.created DESC;

-- 6. Get the single most recently created task
SELECT MAX(task.created) AS recent_created
FROM task;
 
-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT  task.title, task.Due_date FROM task
WHERE task.description LIKE '%database%'
 OR task.title LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT task.title, status.name FROM task
LEFT JOIN status
ON task.status_id=status.id
GROUP BY task.id; 

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT  status.name , COUNT(task.id) AS task_status_count 
FROM task
INNER JOIN status
ON task.status_id =status.id
  GROUP BY status.id;
 


-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT  status.name , COUNT(task.id) AS task_status_count 
FROM task
INNER JOIN status
ON task.status_id =status.id
  GROUP BY status.id 
  ORDER BY task_status_count DESC;
 