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
  console.log("this works")
}