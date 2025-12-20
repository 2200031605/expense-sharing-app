# Expense Sharing Application (Backend)

## Overview
This project is a backend design for a simplified expense sharing application similar to Splitwise.
The main focus is on backend system design, expense split logic, and balance simplification.
## Features
- Create groups with multiple users
- Add shared expenses to a group
- Supported split types:
  - Equal split
  - Exact amount split
  - Percentage split (logical support)
- Track who owes whom
- Simplified balances to minimize transactions

## Assumptions
- Users already exist in the system
- Single currency is used
- No authentication or authorization
- No payment gateway integration
- Data is stored in memory for simplicity

## Balance Simplification
Balances are simplified using a net flow algorithm to minimize transactions.

## Backend Architecture

The backend follows a layered architecture with clear separation of concerns.

Client (Postman / API Consumer)
|
v
Express Routes (API Layer)
|
v
Service Layer (Business Logic)
|
v
In-Memory Data Models

## APIs
- POST /groups
- POST /expenses
- GET /expenses/balances

## How to Run
1. npm install
2. npm  run start
3. Use Postman to test APIs
