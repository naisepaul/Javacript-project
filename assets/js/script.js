

document.addEventListener('DOMContentLoaded', function () {

    // shuffling Colors

    const colors = ["red", "blue", "green", "yellow", "teal", "cyan", "grey", "pink"];
    const colorsPickList = [...colors, ...colors]; //make a copy of colors array
    const shufColors = colorsPickList.sort(() => 0.5 - Math.random());  // for randomly select colors
    const cardContainer = document.querySelector('.cards');

    // making 4*4 grid

    for (let i = 0; i < colorsPickList.length; i++) {
        let box = document.createElement('div');
        box.className = 'card';
        box.style.backgroundColor = shufColors[i];
        cardContainer.appendChild(box);

        // flipping cards

        let cardColor = box.style.backgroundColor;
        box.addEventListener('click', () => {
            box.classList.toggle('flip');

            // checking matching colors

            let flipped = 0;
            let firstflipped = '';
            let secondflipped = '';
            let matchedCards = 0;

            if (flipped === 0) {
                firstflipped = cardColor;
                flipped++;
            } else {
                secondflipped = cardColor;
                flipped = 0;
                if (firstflipped === secondflipped) {
                    matchedCards++;
                    const correctCards = ' ';
                    
                }

            }



        });

    }
});