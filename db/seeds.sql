INSERT INTO departments (departments)
VALUES
  ('Engineering'),
  ('Legal'),
  ('Janitorial Engineering'),
  ('Finance'),
  ('HR'),
  ('Sales');
  
INSERT INTO role (title, salary, departments_id)
VALUES
  ('Lead Engineer', 150000, 1),
  ('Junior Engineer', 90000, 1),
  ('Legal Team Lead', 150000, 2),
  ('Lawyer', 120000, 2),
  ('Custodian', 35000, 3),
  ('Accountant', 75000, 4),
  ('Human Resources Business Partner', 85000, 5),
  ('Salesperson', 80000, 6);
  
  
INSERT INTO employees (first_name, last_name, department_id, role_id)
VALUES
  ('Rick', 'Sanchez', 1, 1),
  ('Summer', 'Smith', 2, 3),
  ('Tammy', 'Guetermann', 5, 7);
  
INSERT INTO employees (first_name, last_name, department_id, role_id, manager_id)
VALUES
  ('Morty', 'Smith', 1, 2, 1),
  ('Beth', 'Smith', 2, 4, 2),
  ('Jerry', 'Smith', 3, 5, 3),
  ('Bird', 'Person', 4, 6, 3),
  ('Squanchy', 'McSquancherton', 6, 8, 3);
  
  