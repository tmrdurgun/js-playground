
/* 
    Game rules:
    1. you need a ticket to start,
    2. you have more chance if you buy more tickets
    3. find the winner number between 0 - 100 
*/

const gameOptions = {
    size: 3,
    range: 3,
    tickets: 0
}

let winnerNumber;

function buyTicket() {
    gameOptions.tickets += 1;
}

function reduceTicket() {
    if(gameOptions.tickets > 0) {
        gameOptions.tickets -= 1;
    }
}

function resetGame() {
    gameOptions.tickets = 0;
}

function createGame() {
    const numbers = new Set();

    for (let index = 0; index < gameOptions.size; index++) {

        const randomNumber = Math.floor(Math.random() * gameOptions.range);

        numbers.add(randomNumber);
    }

    console.log('numbers: ', numbers);

    winnerNumber = Array.from(numbers)[Math.floor(Math.random() * gameOptions.size)];
}

function playBet(bet) {
    const result = notification(bet);

    console.log(result);

    reduceTicket();
}

function notification(bet) {
    if(!gameOptions.tickets) {
        return 'NO TICKETS!!';
    }

    if (bet === winnerNumber) {
        return `CONGRATULATIONS! YOU'VE FOUND THE WINNER ${winnerNumber}!!!`;
    }

    return `WINNER NUMBER WAS ${winnerNumber}! NEXT TIME LOSER!`;
}

createGame();

buyTicket();

playBet(2);