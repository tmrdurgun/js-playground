const db = require('./data.json');

const users = db.users;

function logUsers() {
    return Object.keys(users).forEach((key) => {
        console.log(users[key]);
    });
}

function logUserByIndex(index) {
    let result = '';

    Object.keys(users[index]).forEach((key) => {
        result += `${users[index][key]} - `;
    });

    console.log(result);
}

logUserByIndex(2);