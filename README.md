INSTRCUCTIONS ON HOW TO RUN INVENTORY-TRACKING
-------------------------------------------------
Prerequisite Software to run:
1. Latest MS VSCode
2. Spring Tool Suite
3. MySQL WorkBench
----------
**Please Have your MySQL WorkBench set up.

- connect to your MySQL database and open it

- run this command in MySQL
CREATE DATABASE inventory_db;
CREATE TABLE IF NOT EXISTS `users` (
 `id` int NOT NULL AUTO_INCREMENT,
 `name` varchar(50) NOT NULL,
 `price` double NOT NULL,
 `description` varchar(200) NOT NULL,
 PRIMARY KEY (`id`)
);

- Download front-end and back-end files

- open STS and import 'existing maven project'

- select 'inventory-tracking' folder such that you see 'pom.xml' file in checkbox after the selection

- right-click on project name ('inventory tracking') and run as Spring Boot App

- Open VSCode and select Open Folder to open the 'shopify-frontend' folder

- after you see the files in the VSCode, press Ctrl + Shift + ~

- type ng serve

- go to your browser of choice and type http://localhost:4200
