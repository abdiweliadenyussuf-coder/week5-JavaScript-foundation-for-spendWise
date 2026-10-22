# SpendWise Budget Tracker

## About the Project

SpendWise is a simple budget management project built using HTML, CSS, and JavaScript. It helps users enter their monthly budget and expenses, calculate their total spending, and find out how much money remains.

## JavaScript Concepts Implemented

This project uses basic JavaScript concepts, including:

- Variables
- Data types
- User input
- Mathematical calculations
- Functions
- Console output

## How Variables Are Used

Variables store the budget information and expense amounts entered by the user.

For example:

- `budget` stores the monthly budget.
- `expense1` stores the first expense.
- `expense2` stores the second expense.
- `totalExpenses` stores the total expenses.
- `remainingBalance` stores the money remaining after expenses.

## How User Input Is Collected

The JavaScript `prompt()` function asks users to enter their monthly budget and two expense amounts.

The `Number()` function converts the entered values into numbers so that JavaScript can perform calculations.

## How Calculations Are Performed

SpendWise performs two main calculations:

**Total Expenses**

Total Expenses = First Expense + Second Expense

**Remaining Balance**

Remaining Balance = Monthly Budget − Total Expenses

For example, if the monthly budget is KSh 10,000 and the total expenses are KSh 3,500, the remaining balance will be KSh 6,500.

## How Functions Organize the Code

Functions help organize the code into reusable tasks.

- `calculateTotalExpenses()` adds the expense amounts and returns the total.
- `calculateRemainingBalance()` subtracts total expenses from the monthly budget and returns the remaining balance.

Using functions makes the code easier to understand, organize, and maintain.

## Displaying Results

The `console.log()` method displays clearly labeled results in the browser console, including the monthly budget, individual expenses, total expenses, and remaining balance.

To view the results, open the webpage, enter the requested amounts, press **F12**, and select the Console tab.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project Files

- `index.html` — provides the webpage structure.
- `style.css` — controls the appearance and layout.
- `script.js` — collects input and performs budget calculations.
- `README.md` — explains the project and its JavaScript concepts.

## Project Goal

The goal of SpendWise is to practice JavaScript fundamentals by collecting user input, storing data, performing calculations, and organizing code using functions.
