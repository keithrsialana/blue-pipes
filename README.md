# BluePipes
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents
- [Description](#description)
- [Purpose](#purpose)
- [Installation Instructions](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [License](#license)
- [Credits](#credits)

## Description
BluePipes is a web application designed to streamline the process of managing and tracking pipelines. It integrates Continuous Integration (CI) and Continuous Deployment (CD) practices to ensure code quality and consistency.

## Purpose
The purpose of this project is to implement a CI/CD pipeline using GitHub Actions. This setup allows for automated testing of component tests via Cypress when a Pull Request is made to the `develop` branch, and facilitates deployment when code is merged from `develop` to the `main` branch.

## Installation Instructions
1. Clone the repository using `git clone https://github.com/keithrsialana/bluepipes.git`
2. Navigate to the project directory using `cd bluepipes`
3. Install dependencies using `npm install`
4. Set up `.env` environment variable `MONGODB_URI` with your MongoDB connection string (I used MongoDB Atlas)

## Usage Instructions
1. Start the application:
- Run `npm start` to start the server
2. Access the application:
- Open a web browser and navigate to `http://localhost:3001`

## Technologies Used
- Programming Language: JavaScript (Node.js), Typescript
- Frameworks: Express.js, Mongoose, Cypress, React
- Database: MongoDB
- Deployment: Render

## Features
- 10 question trivia game
- Score tracking

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits
Developed by Keith Sialana.