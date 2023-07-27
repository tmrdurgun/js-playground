
/* 
    Game rules:
    1. you need a ticket to start,
    2. you have more chance if you buy more tickets
    3. find the winner number between 0 - 100 
*/

class WinnerNumberBet {
    constructor(gameOptions) {
        this.gameOptions = gameOptions;
        this.numbers = new Set();
        this.tickets = 0;
        this.winnerNumber;
        this.bet;
        this.gameWin = false;
    }

    createGame() {
        for (let index = 0; index < this.gameOptions.size; index++) {

            const randomNumber = Math.floor(Math.random() * this.gameOptions.range);

            this.numbers.add(randomNumber);
        }

        const randomIndex = Math.floor(Math.random() * this.numbers.size);

        this.winnerNumber = Array.from(this.numbers)[randomIndex];
    }

    buyTicket() {
        this.tickets += 1;
    }

    reduceTicket() {
        if (this.tickets > 0) {
            this.tickets -= 1;
        }
    }

    resetGame() {
        this.tickets = 0;
    }

    playBet(bet) {
        this.bet = bet;

        if(this.gameWin) {
            return false;
        }

        if (!this.tickets) {
            this.notification('NO TICKETS!!');

            return false;
        }

        if (this.bet === this.winnerNumber) {
            this.gameWin = true;
            this.notification(`CONGRATULATIONS! YOU'VE FOUND THE WINNER ${this.winnerNumber}!!!`);
            return false;
        }

        this.reduceTicket();

        this.notification(`WINNER NUMBER WAS ${this.winnerNumber}! NEXT TIME LOSER!`);

        return false;
    }

    notification(message) {
        console.log(message);
    }
}


const winnerNumberBet = new WinnerNumberBet({
    size: 3, // number of items in the game
    range: 3, // numbers generated from 0 to 3
});

winnerNumberBet.createGame();

winnerNumberBet.buyTicket();

winnerNumberBet.playBet(2);