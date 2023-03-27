# selenium-project

This is an UI automation framework using Selenium and JavaScript for application https://snatchbot.me/. The framework
is built using the Selenium WebDriver API, which provides a robust and reliable way to interact with web browsers.
The framework consists of several components, including a set of reusable functions and methods for interacting
with web pages, a set of test cases that describe various user interactions with the platform and generates HTML reports on their results.

## Pre-requisites to execute the test:

1. Install node
2. Install any code editor(Eg: Visual Studio Code)

## Commands to install and run

```
1. npm i - installs the dependencies of the project
2. npm test - runs the tests in headless mode and generated HTML test reports
```

## Folder structure

- `libs`: It has all collections of util methods from mocha, chai and selenium
- `page-objects`: It has all the methods and locators for respective web pages.
- `bugs-and-recommendations`: It has collections of all reported `bugs with screenshots` and `recommendations` for further automation of Chatbot
  conversation testing
- `reports`: It generated HTML reports of all the executed tests
- `test-cases`: It has collection of all `automated` and `manual` test cases for functional and non-functional testing
- `test-data`: It has test data files for respective web pages
- `utils`: It consists of utility files of wrapper functions for mocha,chai, driver and waits
- `constants`: It contains all the global constant variable like web URL, browser

## CI/CD

- Integration with a CircleCI and configuration can be found in `.circleci/config.yml` file.
- Reporting is also integrated with CI and generated reported can be accessed under artifacts.
