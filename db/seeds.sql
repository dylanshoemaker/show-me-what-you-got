INSERT INTO employees (first_name, last_name, title, department, salary, manager)
VALUES
  ('Rick', 'Sanchez', "Lead Engineer", "Engineering", 150000, NULL),
  ('Morty', 'Smith', "Junior Engineer", "Engineering", 90000, "Rick Sanchez"),
  ('Summer', 'Smith', "Legal Team Lead", "Legal", 150000, NULL),
  ('Beth', 'Smith', "Lawyer", "Legal", 120000, "Summer Smith"),
  ('Jerry', 'Smith', "Custodian", "Janitorial Engineering", 35000, "Tammy Guetermann"),
  ('Bird', 'Person', "Accountant", "Finance", 75000, NULL),
  ('Tammy', 'Guetermann', "Human Resources Business Partner", "HR", 85000, NULL),
  ('Squanchy', 'McSquancherton', "Salesperson", "Sales", 80000, "Tammy Guetermann");
