document.addEventListener('DOMContentLoaded', function () {

    const colors = ["red", "blue", "green", "yellow", "teal", "cyan", "grey", "pink"];
    const colorsPickList = [...colors, ...colors]; //double the array
    let flippedCards = [];
    let matchedColors = 0;

    // shuffling Colors

    const shufColors = colorsPickList.sort(() => 0.5 - Math.random());  // for randomly select colors
    const cardContainer = document.querySelector('.cards');

    //creating gameboard

    function gameBoard() {
        for (let i = 0; i < colorsPickList.length; i++) {
            //creating 16 div to the page
            let box = document.createElement('div');
            // giving colors to the div            
            box.style.backgroundColor = shufColors[i];
            box.setAttribute('data-color', shufColors[i]);
            // adding a class backcard
            box.classList.add('backcard');
            cardContainer.append(box);
            box.addEventListener('click', flipCard);

        }
    }

    //fliping cards (clicking cards to show the color)
    function flipCard() {
        // checking the number of clicked cards are less than 2
        if (flippedCards.length < 2) {
            this.getAttribute('data-color');
            // adding the clicked cards to flippedCards array
            flippedCards.push(this);
            this.classList.remove('backcard');
            this.style.backgroundColor = colors['data-color'];
            // checking the number of clicked cards are equal to 2 and making a break of 3 seconds to view
            if (flippedCards.length == 2) {
                setTimeout(checkMatch, 300);
            }
        }
    }
    // checking matching colors

    function checkMatch() {
        //taking the attribute of data-color to two variables
        const firstColor = flippedCards[0].getAttribute('data-color');
        const secondColor = flippedCards[1].getAttribute('data-color');
        // check first color and second color are same
        // and checking the same card clicks twice
        if ((firstColor === secondColor) && (flippedCards[0] != flippedCards[1])) {
            //remove the click events for the same color card

            flippedCards[0].removeEventListener('click', flipCard);
            flippedCards[1].removeEventListener('click', flipCard);
            matchedColors++;
            checkGameOver();
        } else {
            // both cards going back to the class backcard
            flippedCards[0].classList.add('backcard');
            flippedCards[1].classList.add('backcard');
        }
        //empty the flippedCards array
        flippedCards = [];
    }

    // checking game is over
    function checkGameOver() {
        //checking the numbers of matchedColors and colors array length 
        if (matchedColors == colors.length) {
            cardContainer.innerHTML = 'you won';
            //removing the container class and adding new class won
            cardContainer.classList.remove('container');
            cardContainer.classList.add('won');
        }
    }
    gameBoard();

});


