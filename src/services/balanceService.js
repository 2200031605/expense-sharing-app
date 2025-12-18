function calculateBalances(expenses) {
  const balanceMap = {};

  expenses.forEach(expense => {
    const payer = expense.paidBy;

    expense.splits.forEach(split => {
      const user = split.userId;
      const amount = split.amount;

      if (user === payer) return;

      balanceMap[user] = (balanceMap[user] || 0) - amount;
      balanceMap[payer] = (balanceMap[payer] || 0) + amount;
    });
  });

  return simplifyBalances(balanceMap);
}

function simplifyBalances(balanceMap) {
  const debtors = [];
  const creditors = [];
  const result = [];

  for (let user in balanceMap) {
    const amount = balanceMap[user];
    if (amount < 0) debtors.push({ user, amount: -amount });
    else if (amount > 0) creditors.push({ user, amount });
  }

  let i = 0, j = 0;

  while (i < debtors.length && j < creditors.length) {
    const pay = Math.min(debtors[i].amount, creditors[j].amount);

    result.push({
      from: debtors[i].user,
      to: creditors[j].user,
      amount: pay
    });

    debtors[i].amount -= pay;
    creditors[j].amount -= pay;

    if (debtors[i].amount === 0) i++;
    if (creditors[j].amount === 0) j++;
  }

  return result;
}

module.exports = { calculateBalances };
