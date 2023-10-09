// Declare cardArray with objects of every memory pair

const cardArray = [
  {
    name: "fries",
    img: "/memory-game-tutorial/assets/fries.png",
  },
  {
    name: "cheeseburger",
    img: "/memory-game-tutorial/assets/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "/memory-game-tutorial/assets/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "/memory-game-tutorial/assets/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "/memory-game-tutorial/assets/milkshake.png",
  },
  {
    name: "pizza",
    img: "/memory-game-tutorial/assets/pizza.png",
  },
  {
    name: "fries",
    img: "/memory-game-tutorial/assets/fries.png",
  },
  {
    name: "cheeseburger",
    img: "/memory-game-tutorial/assets/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "/memory-game-tutorial/assets/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "/memory-game-tutorial/assets/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "/memory-game-tutorial/assets/milkshake.png",
  },
  {
    name: "pizza",
    img: "/memory-game-tutorial/assets/pizza.png",
  },
];

// Random shuffle the array with this trick
cardArray.sort(() => 0.5 - Math.random());

// declare gridDisplay
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

// create a function with a nested loop to create 12 single image cards in javascript, with set attributes and append them all to the gridDisplay html div container
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "/memory-game-tutorial/assets/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
    console.log(card);
    // flip card on click
    card.addEventListener("click", flipCard);
  }
}

createBoard();

// check for matches
function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  console.log(cards);
  console.log("check for match!");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute(
      "src",
      "/memory-game-tutorial/assets/blank.png"
    );
    cards[optionTwoId].setAttribute(
      "src",
      "/memory-game-tutorial/assets/blank.png"
    );
    alert("You have clicked the same image!");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[optionOneId].setAttribute(
      "src",
      "/memory-game-tutorial/assets/white.png"
    );
    cards[optionTwoId].setAttribute(
      "src",
      "/memory-game-tutorial/assets/white.png"
    );
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute(
      "src",
      "/memory-game-tutorial/assets/blank.png"
    );
    cards[optionTwoId].setAttribute(
      "src",
      "/memory-game-tutorial/assets/blank.png"
    );
    alert("Sorry, try again!");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenId = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you found them all!";
  }
}

function flipCard() {
  // this is linked to the element that was clicked on, that means card
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  console.log("clicked", cardId);
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 400);
  }
}

// const card = `<img src="/memory-game-tutorial/assets/blank.png" data-id="${i}" />`;
// gridDisplay.innerHTML += card;
