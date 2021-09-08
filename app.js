const inquire = require('inquirer');
require("dotenv").config();
const mysql = require("mysql2");
const cTable = require('console.table');
const PORT = process.env.PORT;

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: process.env.DB_USER,
    // Your MySQL password
    password: process.env.DB_PASS,
    database: "tracker",
  }
);




// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log("Connected to the Employee Tracker.");
  //start the app here
});