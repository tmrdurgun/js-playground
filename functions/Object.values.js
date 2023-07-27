const db = require('./data.json');

const users = db.users;

function logUsers() {
    return Object.values(users).forEach((value) => {
        console.log(value);
    });
}

function logUserByIndex(index) {
    let result = '';

    Object.values(users[index]).forEach((value) => {
        result += `${value} - `;
    });

    console.log(result);
}

logUserByIndex(2);