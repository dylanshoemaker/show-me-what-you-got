const inquire = require("inquirer");
require("dotenv").config();
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your MySQL username,
  user: process.env.DB_USER,
  // Your MySQL password
  password: process.env.DB_PASS,
  database: "tracker",
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the Employee Tracker.");
  startPrompt(); //start the prompt
});

function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "initialPrompt",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update An Employee Role",
        ],
      },
    ])
    .then(function (val) {
      // this is to turn these choices into functions
      switch (val.initialPrompt) {
        case "View All Departments":
          viewAllDeps();
          break;

        case "View All Roles":
          viewAllRoles();
          break;
        case "View All Employees":
          viewAllEmps();
          break;

        case "Add A Department":
          addDeps();
          break;

        case "Add A Role":
          addRole();
          break;

        case "Add An Employee":
          addEmp();
          break;

        case "Update An Employee Role":
          updateEmpRole();
          break;
      }
    });
}

function viewAllDeps(){
  db.query("SELECT * FROM departments;", 
  function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
  })
}

function viewAllRoles(){
  db.query(`SELECT role.id, role.title, role.salary, departments.name
  AS department_name 
  FROM role 
  LEFT JOIN departments 
  ON role.departments_id = departments.id;`, 
  function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
  })
}

function viewAllEmps(){
  db.query(`SELECT employees.id, employees.first_name, employees.last_name, 
  role.title AS Title, departments.name AS Department, role.salary AS Salary, 
  CONCAT(e.first_name, ' ' ,e.last_name) AS Manager
  FROM employees 
  LEFT JOIN role ON employees.role_id = role.id
  LEFT JOIN departments ON role.departments_id = departments.id
  LEFT JOIN employees e ON employees.manager_id = e.id;`, 
  // db.query(`SELECT employees.id FROM employees;`,
  function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
  })
}

function addDeps(){
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the new department?",
      },
    ]).then(function(res) {
      db.query(
        `INSERT INTO departments (name)
        VALUES
        ("${res.name}")`,
      function(err, res) {
        if (err) throw err
        console.table(res)
        startPrompt()
      })
    })
}

function addRole(){
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of the new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for the new role?",
      },
      {
        type: "input",
        name: "departments_id",
        message: "What is the department id for the new role?",
      },
    ]).then(function(res) {
      db.query(
        `INSERT INTO role (title, salary, departments_id)
        VALUE
        ("${res.title}",
        "${res.salary}",
        "${res.departments_id}")
        `, function(err, res) {
        if (err) throw err
        console.table(res)
        startPrompt()
      })
    })
}

function addEmp(){
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of this new employee?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name of this new employee?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the role id for the role of this new employee?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is the manager id for the manager of this new employee?",
      },
    ]).then(function(res) {
      db.query(
        `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUE
        ("${res.first_name}",
        "${res.last_name}",
        "${res.role_id}",
        "${res.manager_id}")
        `, function(err, res) {
        if (err) throw err
        console.table(res)
        startPrompt()
      })
    })
}

function updateEmpRole(){
  console.log("this works")
}
