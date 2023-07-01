let cards = []; // array
let sum = 0;
let hasBlackjack = false;
let isAlive = false;

let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let messageEl = document.getElementById("message-el");

let player = { //object
    name: "per",
    chip: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.chip;

let message = "";

function getrandomCard() {
    //Math.random() * 13 -> 0 - 12 number
    let randomCard = Math.floor(Math.random() * 13) + 1; // 1-13
    if (randomCard > 10) {
        return 10;
    }
    else if (randomCard === 1) {
        return 11;
    }
    else {
        return randomCard;
    }
}

function renderGame() {
    cardEl.textContent = "Card: ";
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want a new draw?";
    }
    else if (sum === 21) {
        message = "whoo! you have got a blackjack";
        hasBlackjack = true;
    }
    else {
        message = "you are out of the game";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;
    let firstcard = getrandomCard();
    let secondcard = getrandomCard();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    renderGame();
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {

        let card = getrandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}



