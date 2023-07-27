const db = require('../data.json');

const users = db.users;

function filterUsersBy(propName, value) {
    return users.filter(user => user[propName] === value);
}

const result = filterUsersBy('name', 'John Doe');

console.log('result: ', result);