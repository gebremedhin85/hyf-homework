use hyf_lesson2;

-- Part 3: More queries

-- Get all the tasks assigned to users whose email ends in @spotify.com 
SELECT task.title, user.email
FROM user
    INNER JOIN user_task ON user.id=user_task.user_id
    INNER JOIN task ON user_task.task_id=task.id
WHERE user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id, task.title AS task_title, user.name
FROM user
    INNER JOIN user_task ON user.id = user_task.user_id
    INNER JOIN task ON user_task.task_id = task.id
WHERE user.name = 'Donald Duck'
    AND task.status_id=1;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.id, task.title AS task_title, month(task.created) AS month_created,
    user.name AS created_by
FROM user
    INNER JOIN user_task ON user.id = user_task.user_id
    INNER JOIN task ON user_task.task_id = task.id
WHERE user.name = 'Maryrose Meadows'
    AND MONTH(task.created)=09;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT month(task.created) AS month_created,
    COUNT(month(task.created)) AS task_count
FROM task
GROUP BY MONTH(task.created);

