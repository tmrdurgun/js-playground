const db = require('./data.json');

const users = db.users;

function isUsersBy(property, value) {

    return users.some(user => user[property] === value);
}

const isUserExist = isUsersBy('age', 22);

console.log('isUserExist: ', isUserExist);
