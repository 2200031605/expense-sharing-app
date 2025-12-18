# Expense Sharing Application (Backend)

## Overview
This project is a backend design for an expense sharing application similar to Splitwise.

## Features
- Create groups
- Add shared expenses
- Split expenses (Equal, Exact, Percentage)
- Track who owes whom
- Simplified balances

## Assumptions
- Users already exist
- Single currency
- No authentication
- No payment gateway

## Balance Simplification
Balances are simplified using a net flow algorithm to minimize transactions.

## APIs
- POST /groups
- POST /expenses
- GET /expenses/balances

## How to Run
1. npm install
2. npm start
3. Use Postman to test APIs
