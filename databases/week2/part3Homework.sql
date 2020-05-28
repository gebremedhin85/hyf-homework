-- Part 3: More queries

-- Get all the tasks assigned to users whose email ends in @spotify.com 
SELECT task.id,  task.title AS task_title FROM task
LEFT JOIN user_task ON user_task.task_id=task.id
WHERE user_task.user_id=2;
 
-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id,  task.title AS task_title, task.status_id AS task_status FROM task
LEFT JOIN user_task ON user_task.task_id=task.id
WHERE task.status_id=1
AND user_task.user_id=11;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.id,  task.title AS task_title FROM task
LEFT JOIN user_task ON user_task.task_id=task.id
WHERE user_task.user_id=6
AND MONTH(task.created)=09;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(month(task.created)) AS task_count FROM task
GROUP BY MONTH(task.created);

