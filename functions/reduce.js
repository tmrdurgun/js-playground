const arr = [1,2,32,4];

const db = require('./data.json');

const users = db.users;

function sumItems(arr) {
    return arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
}

function findMax(arr) {
    return arr.reduce((max, cur) => {
        if(cur > max) {
            max = cur;
        }

        return max;
    }, 0)
}

function groupByAge() {
    return users.reduce((group, user) => {
        if(!group[user.age]) {
            group[user.age] = [];
        }

        group[user.age].push(user);

        return group;

    }, {})
}

const sumResult = sumItems(arr);
const max = findMax(arr);
const usersByAge = groupByAge();

// console.log('sumResult: ',sumResult);

// console.log('max: ', max);

console.log('usersByAge: ', usersByAge);