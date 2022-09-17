# RESTfulAPI Challenge

## Overview
This is a simple Cypress project that has the necessary components to execute tests for the  **http://automationpractice.com/**.


# Dependencies

There are not too much dependencies installed on the **Cypress** repositories, most of them are used for data creation and accessibility for some of the test.

- @faker-js/faker@7.5npm i moment-business-days.0
- cypress@9.6.1
- moment-business-days@1.2.0

## Folder Structure

**Cypress** gives us the advantage of add multiple test using the ***Integration*** folder, all the test saved in it will be executed once we enter the headless execution command. The ***PagesAndActions*** folder has two main subfolders (***actions*** and ***pages***), the ***actions*** file has all the actions or flows made on a specific sections from the application and this file imports all the selectors, actions and validations from a specific file that is stored on the ***pages*** folder.

## Headless Execution

The standard execution for Cypress is made headless and only shows the results and execution times through a terminal. This can be done using the following commands:

## UI Execution

Cypress can execute and guide us through all the visual process of the test; this also help us to debug any test that we are currently developing. To open the Cypress you can open it from your **project root** one of the following ways:


**Using npx**

```
npx cypress open
```
