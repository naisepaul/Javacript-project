const cardContainer = document.getElementsByClassName('cards');
const colors = ["red", "blue", "green", "yellow", "aquamarine", "gold", "teal", "violet"];
const colorsPickList = [...colors, ...colors]; //make a copy of colors array
const cardCount = colorsPickList.length;
console.log(cardCount);
