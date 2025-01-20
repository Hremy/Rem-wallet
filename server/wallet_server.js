const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let transactions = [
  {
    _id: "615c1d8f1c9d44000038d82c",
    accountType: "Bank",
    accountId: "615c1d8f1c9d44000038d82d",
    amount: 150.0, 
    category: "Food",
    subcategory: "Groceries",
    date: "2025-01-15T10:00:00Z",
    description: "Bought groceries and more", 
  },
  {
    _id: "615c1d8f1c9d44000038d82c",
    accountType: "Mobile Money",
    accountId: "615c1d8f1c9d44000038d82e",
    amount: 75.0, 
    category: "Transport",
    subcategory: "Taxi",
    date: "2025-01-16T12:00:00Z",
    description: "Taxi fare and parking", 
  },
];

let accounts = [
  {
    _id: "615c1d8f1c9d44000038d82d",
    accountName: "Bank",
    accountType: "Savings",
    balance: 1700.0, 
    createdAt: "2025-01-01T10:00:00Z",
  },
  {
    _id: "615c1d8f1c9d44000038d82e",
    accountName: "Mobile Money",
    accountType: "Current",
    balance: 900.0, 
    createdAt: "2025-01-01T11:00:00Z",
  },
];

let categories = [
  {
    _id: "615c1d8f1c9d44000038d82g",
    categoryName: "Food",
    subcategories: ["Groceries", "Restaurants", "Dining out"], 
  },
  {
    _id: "615c1d8f1c9d44000038d82h",
    categoryName: "Transport",
    subcategories: ["Taxi", "Public Transport", "Train"], 
  },
];

let budgets = [
  {
    _id: "615c1d8f1c9d44000038d82i",
    category: "Food",
    amount: 600.0, 
    currentSpending: 500.0, 
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-01-31T23:59:59Z",
  },
  {
    _id: "615c1d8f1c9d44000038d82j",
    category: "Transport",
    amount: 250.0, 
    currentSpending: 100.0, 
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-01-31T23:59:59Z",
  },
];

app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.post('/api/transactions', (req, res) => {
  const newTransaction = req.body;
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});

app.get('/api/accounts', (req, res) => {
  res.json(accounts);
});

app.post('/api/accounts', (req, res) => {
  const newAccount = req.body;
  accounts.push(newAccount);
  res.status(201).json(newAccount);
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.post('/api/categories', (req, res) => {
  const newCategory = req.body;
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

app.get('/api/budgets', (req, res) => {
  res.json(budgets);
});

app.post('/api/budgets', (req, res) => {
  const newBudget = req.body;
  budgets.push(newBudget);
  res.status(201).json(newBudget);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
