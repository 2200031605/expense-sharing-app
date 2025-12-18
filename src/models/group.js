class Group {
  constructor(id, name, members) {
    this.id = id;
    this.name = name;
    this.members = members; 
    this.expenses = [];
  }
}

module.exports = Group;
