class Expense {
  constructor(id, groupId, paidBy, amount, splitType, splits) {
    this.id = id;
    this.groupId = groupId;
    this.paidBy = paidBy;
    this.amount = amount;
    this.splitType = splitType; // EQUAL | EXACT | PERCENT
    this.splits = splits; // [{ userId, amount }]
  }
}

module.exports = Expense;
