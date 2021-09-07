require("dotenv").config();
const mysql = require("mysql2");


// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: process.env.DB_USER,
    // Your MySQL password
    password: process.env.DB_PASS,
    database: "tracker",
  },
  console.log("Connected to the Employee Tracker.")
);

module.exports = db;