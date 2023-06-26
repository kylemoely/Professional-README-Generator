
  # Employee Database Manager     
         
  ## Description    
  This is a sample employee database manager that runs in the terminal. The database tracks employees' roles, departments, salaries, and the manager the employee reports to. Using this database manager allows the user to do a list of tasks involved in tracking employee info in the database:    
      
  ## Installation    
  The user must have access to Node.js and MySQL in order to use this application. To get started, clone this GitHub repo into the desired location on your computer. Change the name of the '.env.EXAMPLE' file to '.env'. In this file, insert your credentials for  MySQL. Keep the database name as employees_db. Finally enter the MySQL terminal from the root folder of the repo and run the command 'SOURCE db/schema.sql'. This will initialize the databse with the proper tables. If you would like to seed some test data in to operate the database manager, run the command 'SOURCE db/seeds.sql'. The database is now initialized and you may return to the root folder in the terminal and run the command 'node index.js' to utilize the database manager.    
      
  ## Usage    
  The database manager offers the following tasks to perform on your database of employees: \n View All Employees \n View All Departments \n View All Roles \n View Budget By Department \n View Employees By Department \n View Employees By Role \n View Employees By Manager \n The manager also offers the following Create, Delete, and Update queries: \n Add Employee \n Add Role \n Add Department \n Update Employee \n Delete Employee \n Delete Department \n Delete Role \n After running the command 'node index.js' in the root folder, the user will be asked what task they would like to perform. Some follow up questions will be asked for tasks that need them.   
      
  ## Credits   
  I used a lot of info from my boot camp course content as well as articles from W3 schools online to assist in the development of this project.    
           
  ## License    
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   
  Licensed under the [MIT](https://opensource.org/licenses/MIT) license.    
     
  ## Questions   
  For any questions, comments, or concerns, please contact me through:   
  [GitHub](http://www.github.com/kylemoely)  
  [Email](mailto:kylemoely@gmail.com)
