#  apex_cypress_oracle - Cypress testing for Oracle Apex application

## Project Overview

The **apex_cypress_oracle** is a project to demonstrate Cypress automation framework running in a APEX training application.


## Getting Started

These instructions will help you set up and run the project locally for testing a purposes.

### Prerequisites and Dependencies

- **Node.js** and **npm** (if you need to install dependencies or build the project).
https://nodejs.org/en/download/package-manager
Node.js 20.x, 22.x and above (You may find some issues if you try an older version)

- **Cypress**
https://docs.cypress.io/app/get-started/why-cypress
You can use the latest version of Cypress;

- **Allure Report** (if you want to generate test reports)
https://allurereport.org/docs/cypress/

- **Dotenv** (to use environment variables)
https://www.npmjs.com/package/dotenv

- **APEX Qa Application** (core application with Apex classes, pages, and components)
https://apex.oracle.com/pls/apex/r/apex/sign-up/request-workspace

### Installation

1. **Clone the Repository**: 

   ```bash
   git clone https://github.com/pauloportes/apex_cypress_oracle.git
   ```

2. **Install dependencies**: 

   - NPM
   ```bash
   npm install
   ```
   - Cypress
   ```bash
   npm install cypress --save-dev
   ```
   - Dotenv
   ```bash
   npm install dotenv --save
   ```
   - Allure Report (Optional. To run Allure reports you need Java installed on your machine, at least Java 8.)
   
   ```bash
   npm i -D @shelex/cypress-allure-plugin
   ```

   ```bash
   npm i -g allure-commandline --save-dev
   ```
  
   ```bash
   npm install --save-dev allure-cypress
   ```

3. **APEX project configuration**:  

   - Download SQL project file and create an APEX workspace and import the APEX Qa application. APEX app is attached in the project root directory.
   
   Steps:
   1. Request access to a public workspace on https://apex.oracle.com/pls/apex/r/apex/sign-up/request-workspace
   2. Access your workspace, click the "Import" button and select the file attached.
   3. Select "Run and Build Application" as Build Status and "Auto Assign New Application ID" as Install as Application. Click the "Install Application" button.
   4. Click the "Install Supporting Objects" button.
   5. Configure APEX project to allow Cypress to access pages and components (Change security parameters of the Page section).
   
4. **Create a `.env` file** in the root of your project directory with the following content:

   ```bash
   USERNAME_TEST="your.user@email.com"
   PASSWORD="yourPassword"
   LOGIN_URL="apexLoginUlr"
   HOME_URL="apexHomeUlr"
   ```
5. **Run the automation**: 
    
   - Build APEX Qa application

   - Run all tests using ui interface:
    ```bash
    npx cypress open
    ```
   - Run all tests using headless mode:
    ```bash
    npx cypress run
    ```
   - Run tests by spec file:
   ```bash
    npm run login
    npm run changeOrderQuantity
    npm run changeOrderLocation
    npm run saveValuesInChart
   ```
   - Run tests with Allure reports:
    ```bash
    npm run test
    ```
    - Generate Allure reports:
    ```bash
    allure serve allure-results
    ```
   - Clean Allure reports results folder:
    ```bash
    npm run allure:clea
    ```