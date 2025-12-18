const express = require('express');
const Group = require('../models/group');

const router = express.Router();

const groups = [];

// Create group
router.post('/', (req, res) => {
  const { id, name, members } = req.body;
  const group = new Group(id, name, members);
  groups.push(group);
  res.json(group);
});

// Get all groups
router.get('/', (req, res) => {
  res.json(groups);
});

module.exports = router;
