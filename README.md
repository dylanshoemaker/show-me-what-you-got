# Show Me What You Got

      
![GitHub license](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&style=for-the-badge)

# Description
This application uses the Command Line Interface (CLI) to make CRUD operations with mySQL database.

# Installation 
- Clone the repo to your local machine.
- Navigate to the root folder and run "npm install" to install the necisary packages
- Use [MySQL Workbench](https://www.mysql.com/products/workbench/), or whatever you prefer as your sql workbench, to create a database 
- Create a .env file in the root folder to store your username and password for mysql Example: DB_USER=root  DB_PASS=Password
- Start the application by typing node app.js in the command line, make sure you are in the root folder of the directory

# Usage

![walkthrough](./images/show-me-what-you-got-walkthrough.gif) 

When you start the application, then you will be presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
When you choose to view all departments, then you will be presented with a formatted table showing department names and department ids
When you choose to view all roles, then you will be presented with the job title, role id, the department that role belongs to, and the salary for that role
When you choose to view all employees, then you will be presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
When you choose to add a department, then you will be prompted to enter the name of the department and that department is added to the database
When you choose to add a role, then you will be prompted to enter the name, salary, and department for the role and that role is added to the database
When you choose to add an employee, then you will be prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
When you choose to update an employee role, then you are prompted to select an employee to update and their new role and this information is updated in the database 

# License

> This project is using the MIT license.

# Contributing

If you would like to contribute to this project, please feel free to fork this repository and clone your forked repository into your local machine, making sure to set the upstream as this repository and the origin as your forked repository, then use git pull upstream main to sync your local repo with the project repo. Make a new feature branch which will house all your edits. Once finished push commits to your forked repository and then create a pull request! Contributions are highly encouraged!


# Questions
Please contact me through the following methods!

> [My Github account](https://github.com/dylanshoemaker)

> <a href="mailto:me@dylanshoemaker.com">My Email</a> 
