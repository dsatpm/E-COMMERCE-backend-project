# E-Commerce Back End Project

This project showcases the utilization of [Express.js](https://expressjs.com/) to manage [mySQL](https://www.mysql.com/) databases via a server. The databases can be seamlessly edited, added to, and deleted using various routes, with [Insomnia](https://insomnia.rest/) serving as a handy testing tool.

## Installation

To set up and run the E-Commerce Back End Project, follow these detailed steps:

### 1. Node.js Installation
Ensure you have Node.js installed on your machine. If not, download and install it from
### 2. Express.js Installation
Once Node.js is installed, navigate to your project folder using the terminal and run the following command to initialize a package.json file:
``` bash
npm init -y
```
Next, install Express.js by running:
``` bash
npm install express
```
### 3. mySQL Installation
Install mySQL on your machine. You can download it from [mySQL Official Website](https://www.mysql.com/)
### 4. Insomnia Installation
Download and install Insomnia from the [Official Website](https://insomnia.rest/)

### 5. Project Setup
Clone this repository to your local machine or download and extract the ZIP file.

Navigate to the project directory using the terminal and run:
``` bash
npm install
```
This command will install the necessary dependencies listed in the package.json file.

### 6. Database Setup
Run the provided SQL files (schema.sql and seeds.sql) in your mySQL database to set up the required schema and seed data.

### 7. Environment Variables
Create a .env file in the root of your project and add the following:
``` javascript
DB_NAME=ecommerce_db;
DB_USER=root;
DB_PASSWORD=your-mySQL-password
```
Replace `your_mySQL_password` with your actual mySQL password.

### 8. Start the Server
Run the following command to start the Express.js server:
``` bash
npm start
```
Your E-Commerce Back End Project should now be running locally.

## Demo

Check out the [Live Demo](https://drive.google.com/file/d/1GJcqHnqvjoOlteuK-z9bF3-picC00xXM/view) to see the project in action.


## Tests

Insomnia was used to run tests, ensuring that the routes functioned correctly.

## Contributing

Contributions are always welcome! Feel free to enhance the project or report any issues.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/).


## Acknowledgements

A big shoutout to [Rounderr21](https://github.com/Rounderr21) for invaluable assistance, helping overcome initial challenges and ensuring the server was properly seeded and running smoothly.


## Sources

### The following sources were invaluable for this project

-   [Stack Overflow](https://stackoverflow.com/) An abundant resource for information on Express, Insomnia, and RESTful APIs.
-   [Git Hub](https://github.com/) A treasure trove of information on all the technologies used
-   [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) Thanks to this channel for its Express.js tutorials and other helpful YouTube videos. Highly recommended!
