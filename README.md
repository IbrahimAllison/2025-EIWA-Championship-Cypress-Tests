# 2025-EIWA-Championship-Cypress-Tests

A validation and functional test of 2025 EIWA Championship page.

## Table of Contents

- [Description](#description)
- [Motivation for the Project](#motivation-for-the-project)
- [Link to the Deployed Application](#link-to-deployed-application)
- [Installation and Usage](#installation-and-usage)
- [Tested Features](#tested-features)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Description

The objective of this assignment is to automate User Interface validation and functionality tests for the 2025 EIWA Championship page on Flowresting: https://www.flowrestling.org/events/12932757-2025-eiwa-championship. The repo contains end-to-end Cypress tests for filters, search, and navigation functionality for the EIWA Wrestling Championship platform.


## Motivation for the Project

I was motivated to work on the assignment having completed similar task on another automation tool (Playwright) for my company. I plan to integrate CI/CD for this project by adding GitHub Actions configuration (.github-workflows-cypress.yml) and add code snippets for HTML mockup with data-testid attributes(public-index.html).


## Installation and Usage

Below is an high level overview on how to execute this application.

Steps:
- mkdir cypress-flo-eiwa-championship
- cd cypress-eiwa-championship
- npm init -y
- Json file automatically created
- npm install cypress --save-dev. Cypress package successfully installed
- npx serve . for creating a local website using a simple server
- node server.js
- npm install --save-dev start-server-and-test
- Run test using npx cypress open. 

Notes

Tests are written and structured correctly, but the /filters route failed due to dev server not running at time of test. Please ensure local server is running on the specified port or update baseUrl in cypress.config.js to match.

## Tested Features
- Team, Weight, and Round filters
- Search functionality with result validation
- Navigation to Results, Videos, News, and Schedule tabs
- Videos highlights
   
## Technologies Used
The following technologies were used for the application:
- JavaScript
- VS Code
- Npm
- Zsh Bash
- Express.js
- Html


## Credits 
- FloSports 

  
## License

![License](https://img.shields.io/badge/License-MIT-9cf.svg)


