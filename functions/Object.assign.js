const db = require('./data.json');

const users = db.users;

const address = {
    id: 1,
    name: 'Home',
    street: 'Pioenstraat',
    houseNumber: 26,
    city: 'Leiden',
    countryId: 12
};

const updatedUser = Object.assign({}, users[2], address); // without first parameter immutability lost

address.countryId = 3;

console.log('original user: ', users[2]);

console.log('updatedUser: ', updatedUser);
