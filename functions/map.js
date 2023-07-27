const db = require('./data.json');

const users = db.users;

function getUsersByProp(propName) {
    return users.map(user => user[propName]);
}

function addNewPropToUsers(propName, value) {
    return users.map((user) => {
        if (!user[propName]) {
            user[propName] = value;
        }

        return user;
    });
}

addNewPropToUsers('size', 'medium');

const userNames = getUsersByProp('name');
const userSizes = getUsersByProp('size');

console.log('userNames: ', userNames);
console.log('userSizes: ', userSizes);