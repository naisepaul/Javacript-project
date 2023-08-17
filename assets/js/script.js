
// shuffling Colors
const colors = ["red", "blue", "green", "yellow", "teal", "cyan", "grey", "pink"];
const colorsPickList = [...colors, ...colors]; //make a copy of colors array
const shufColors = colorsPickList.sort(() => 0.5 - Math.random());  // for randomly select colors
const cardContainer = document.querySelector('.cards');
let flippedCard = [];
for (let i = 0; i < colorsPickList.length; i++) {
    let box = document.createElement('div');
    box.className = 'card';
    box.style.backgroundColor = shufColors[i];
    cardContainer.appendChild(box);
    box.addEventListener('click', flipcard);
    function flipcard() {
        this.classList.toggle('flip');
        // flippedCard.append(this.backgroundColor);
        console.log(this.style.backgroundColor);
    }

}