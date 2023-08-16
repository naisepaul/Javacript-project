
const colors = ["red", "blue", "green", "yellow", "teal", "cyan", "grey", "pink"];
const colorsPickList = [...colors, ...colors]; //make a copy of colors array
const shufColors = colorsPickList.sort(() => 0.5 - Math.random());  // for randomly select colors
const cardContainer = document.querySelector('.cards');
for (let i = 0; i < colorsPickList.length; i++) {
    let box = document.createElement('div');
    box.className = 'card';
    box.style.backgroundColor = shufColors[i];
    cardContainer.appendChild(box);
}
