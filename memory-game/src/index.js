const score = document.querySelector(".score");
const cards = document.querySelectorAll(".card");

const imgArray = [
  "cheeseburger",
  "fries",
  "hotdog",
  "ice-cream",
  "milkshake",
  "pizza",
];

for (let i = 0; i < cards.length; i++) {
  const rndm0to5 = Math.floor(Math.random() * 6);

  cards[10].src = `/memory-game/assets/${imgArray[0]}.png`;
  cards[2].src = `/memory-game/assets/${imgArray[1]}.png`;
  cards[3].src = `/memory-game/assets/${imgArray[2]}.png`;
  cards[1].src = `/memory-game/assets/${imgArray[3]}.png`;
  cards[0].src = `/memory-game/assets/${imgArray[4]}.png`;
  cards[5].src = `/memory-game/assets/${imgArray[5]}.png`;
  cards[8].src = `/memory-game/assets/${imgArray[0]}.png`;
  cards[9].src = `/memory-game/assets/${imgArray[1]}.png`;
  cards[11].src = `/memory-game/assets/${imgArray[2]}.png`;
  cards[7].src = `/memory-game/assets/${imgArray[3]}.png`;
  cards[6].src = `/memory-game/assets/${imgArray[4]}.png`;
  cards[4].src = `/memory-game/assets/${imgArray[5]}.png`;
}
