
const express = require('express');
const groupRoutes = require('./routes/groupRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(express.json());

app.use('/groups', groupRoutes);
app.use('/expenses', expenseRoutes);

module.exports = app;
