
# Playwright Automation Project

## 1. Project Overview

This project contains automated UI test cases for the Demo Web Shop website using Playwright with JavaScript.

The project covers invalid login, user registration, adding products to the shopping cart, and the complete checkout process.

## 2. Technology Stack

- JavaScript
- Playwright
- Node.js
- Allure Report
- HTML Report
- Git and GitHub

## 3. Project Structure

```text
project_automation/
│
├── pages/
│   ├── LoginPage.js
│   ├── SignUpPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── SearchPage.js
│
├── tests/
│   ├── invalidLogin.spec.js
│   ├── registerAndCart.spec.js
│   ├── Checkout.spec.js
│   └── example.spec.js
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## 4. Setup Instructions

1. Install Node.js.
2. Clone the repository.
3. Open the project folder in VS Code.
4. Install dependencies:

```bash
npm install
```

5. Install Playwright browser:

```bash
npx playwright install chromium
```

## 5. Run Individual Test Scenarios

Run Q1 - Invalid Login:

```bash
npm run test:q1
```

Run Q2 - Registration and Add to Cart:

```bash
npm run test:q2
```

Run Q3 - End-to-End Checkout:

```bash
npm run test:q3
```

## 6. Run All Tests

```bash
npm run test:all
```

## 7. Generate HTML Report

```bash
npm run report:html
```

## 8. Generate Allure Report

```bash
npm run report:allure
```

Open Allure Report:

```bash
npm run open:allure
```

## 9. GitHub Repository

Repository: https://github.com/shuptitahsin/Project_automation
## Part C: API Automation

- Tool: Postman
- API: JSONPlaceholder
- Runner: Newman

### API Test Scenarios
1. GET all users and validate response.
2. Save a user ID dynamically.
3. PUT request using the saved ID.
4. Validate updated user information.

### Run API Tests
npm install
npm run api:test