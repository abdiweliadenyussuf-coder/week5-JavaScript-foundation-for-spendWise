let budget = 0;
let expense1 = 0;
let expense2 = 0;
let totalExpenses = 0;
let remainingBalance = 0;

budget = Number(prompt("Enter your monthly budget:"));

expense1 = Number(prompt("Enter your first expense:"));

expense2 = Number(prompt("Enter your second expense:"));

// 1. Functions to calculate total expenses and remaining balance
function calculateTotalExpenses(exp1, exp2) {
  totalExpenses = exp1 + exp2;
  return totalExpenses;
}

function calculateRemainingBalance(totalBudget, totalExpenses) {
  remainingBalance = totalBudget - totalExpenses;
  return remainingBalance;
}

// 2. Perform calculations
totalExpenses = calculateTotalExpenses(expense1, expense2);
remainingBalance = calculateRemainingBalance(budget, totalExpenses);

console.log("SpendWise Budget Summary");
console.log("Monthly Budget: KSh " + budget);
console.log("First Expense: KSh " + expense1);
console.log("Second Expense: KSh " + expense2);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);
