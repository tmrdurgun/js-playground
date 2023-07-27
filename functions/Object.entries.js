const db = require('./data.json');

const users = db.users;

const filtered = Object.entries(users).filter(([key, value]) => value.age <= 25);

console.log(filtered);
