const express = require('express');
const Expense = require('../models/expense');
const { calculateBalances } = require('../services/balanceService');

const router = express.Router();

const expenses = [];

// Add expense
router.post('/', (req, res) => {
  const { id, groupId, paidBy, amount, splitType, splits } = req.body;
  const expense = new Expense(id, groupId, paidBy, amount, splitType, splits);
  expenses.push(expense);
  res.json(expense);
});

// Get balances
router.get('/balances', (req, res) => {
  const balances = calculateBalances(expenses);
  res.json(balances);
});

module.exports = router;
