document.addEventListener('DOMContentLoaded', function () {

    const colors = ["red", "blue", "green", "yellow", "teal", "cyan", "grey", "pink"];
    const colorsPickList = [...colors, ...colors]; //double the array
    let flippedCards = [];
    // shuffling Colors
    const shufColors = colorsPickList.sort(() => 0.5 - Math.random());  // for randomly select colors
    const cardContainer = document.querySelector('.cards');

    //creating gameboard
    function gameBoard() {
        for (let i = 0; i < colorsPickList.length; i++) {
            let box = document.createElement('div');
            box.className = 'card';
            box.style.backgroundColor = shufColors[i];
            box.setAttribute('data-color', shufColors[i]);
            cardContainer.appendChild(box);
            box.addEventListener('click', flipCard);

        }
    }

    function flipCard() {
        if (flippedCards.length < 2) {
            this.classList.add('backcard');
            let cardColor = this.getAttribute('data-color');
            flippedCards.push(cardColor);
            // this.classList.remove('backcard');

            console.log(this);
            console.log(flippedCards);
        }
    }
    gameBoard();
    // box.addEventListener('click', () => {
    //     box.classList.toggle('flip');
    //     if (flippedCards.length < 2) {
    //         flippedCards.push(box.style.backgroundColor);
    //         // console.log(flippedCards);
    //         // console.log(flippedCards[1]);
    //         if ((flippedCards.length === 2) && (flippedCards[0] === flippedCards[1])) {

    //             console.log(flippedCards);

    //         } else {

    //             console.log(flippedCards[0]);
    //             console.log(flippedCards[1]);
    //         }
    //     }


});


