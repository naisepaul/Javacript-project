// document.addEventListener('DOMContentLoaded', function () {

const colors = ["red", "blue", "green", "yellow", "teal", "cyan", "grey", "pink"];
const colorsPickList = [...colors, ...colors]; //double the array
let flippedCards = [];
let matchedCards = [];
let lockboard = false;
// shuffling Colors

// function shuffle() {
const shufColors = colorsPickList.sort(() => 0.5 - Math.random());  // for randomly select colors
const cardContainer = document.querySelector('.cards');
for (let i = 0; i < colorsPickList.length; i++) {
    let box = document.createElement('div');
    box.className = 'card';
    box.style.backgroundColor = shufColors[i];
    box.setAttribute('data-color', shufColors[i]);
    cardContainer.appendChild(box);
    // flipping cards

    let counter = 0;

    let firstFlipped = '';
    let secondFlipped = '';
    let matchedCards = 0;
    let card1, card2 = [];

    box.addEventListener('click', () => {
        box.classList.toggle('flip');
        if (flippedCards.length < 2) {
            flippedCards.push(box.style.backgroundColor);
            // console.log(flippedCards);
            // console.log(flippedCards[1]);
            if ((flippedCards.length === 2) && (flippedCards[0] === flippedCards[1])) {

                console.log(flippedCards);

            } else {

                console.log(flippedCards[0]);
                console.log(flippedCards[1]);
            }
        }


    });

}
