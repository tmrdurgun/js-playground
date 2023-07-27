const db = require('./data.json');

const users = db.users;

function findUserBy(property, value) {

    return users.find(user => user[property] === value);
}

const admin = findUserBy('id', 3);

console.log('admin: ', admin);
