const squares = document.querySelectorAll(".square");
let mole;
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const startButton = document.querySelector(".start");
let timeCounterInterval;
let moveMoleInterval;
let timeCounter = 5;
timeLeft.textContent = timeCounter;

startButton.addEventListener("click", start);

function start() {
  timeCounterInterval = setInterval(startCounting, 1000);
  moveMoleInterval = setInterval(randomSquare, 500);
  countScore();
  startCounting();
}

function resetEverything() {
  timeCounter = 5;
  timeLeft.textContent = timeCounter;
  scoreCount = 0;
  score.textContent = scoreCount;
  clearInterval(moveMoleInterval);
  clearInterval(timeCounterInterval);
}

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  mole = randomSquare;
}

function startCounting() {
  timeLeft.textContent = timeCounter--;
  if (timeLeft.textContent == -1) {
    alert(`Time's up! Your score is ${score.textContent}`);
    resetEverything();
  }
}

function countScore() {
  let scoreCount = 0;
  document.addEventListener("click", (event) => {
    if (event.target === mole) {
      score.textContent = scoreCount++;
      console.log("clicked");
    }
  });
}

// squares.forEach(square => {
//   square.addEventListener("mousedown", () => {
//     if (square.id == ) {

//     };
//   })
// })

// mole.addEventListener("click", () => {
//   score.textContent = scoreCount++;
//   console.log("clicked");
// });
