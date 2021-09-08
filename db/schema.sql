-- DROP TABLE IF EXISTS employees;
-- DROP TABLE IF EXISTS role;
-- DROP TABLE IF EXISTS departments;



CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  departments VARCHAR(35) NOT NULL
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(35) NOT NULL,
  salary DECIMAL (8,2),
  departments_id INTEGER,
  CONSTRAINT fk_departments FOREIGN KEY (departments_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  department_id INTEGER,
  manager_id INTEGER,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
);