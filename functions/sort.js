const db = require('./data.json');

const users = db.users;

function sortUsersBy(property, direction) {

    return users.sort((a, b) => {

        const valueA = a[property];
        const valueB = b[property];

        if (direction === 'asc' && valueA < valueB) {
            return -1;
        }

        if (direction === 'desc' && valueB < valueA) {
            return -1;
        }

        return 0;
    })
}

const sortedUsers = sortUsersBy('name', 'asc');

console.log('sortedUsers: ', sortedUsers);
