//define variables
let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultContainer_p = document.querySelector(".result-container > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//functions
function getCpuChoice() {
  const choices = ["r", "p", "s"];
  return choices[Math.floor(Math.random() * 3)];
}
function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  }
  if (letter === "p") {
    return "Paper";
  }
  return "Scissors";
}
function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  resultContainer_p.innerHTML =
    convertToWord(userChoice) +
    " beats " +
    convertToWord(cpuChoice) +
    " You win!";
  document.getElementById(userChoice).classList.add("green_glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green_glow");
  }, 1000);
}
function lose(userChoice, cpuChoice) {
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  resultContainer_p.innerHTML =
    convertToWord(userChoice) +
    " loses against " +
    convertToWord(cpuChoice) +
    " You lost!";
  document.getElementById(userChoice).classList.add("red_glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red_glow");
  }, 1000);
}
function draw(userChoice, cpuChoice) {
  resultContainer_p.innerHTML =
    convertToWord(userChoice) +
    " is equal to " +
    convertToWord(cpuChoice) +
    " It's a draw!";
  document.getElementById(userChoice).classList.add("grey_glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey_glow");
  }, 1000);
}

function game(userChoice) {
  const cpuChoice = getCpuChoice();
  console.log(cpuChoice);
  switch (userChoice + cpuChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, cpuChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, cpuChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, cpuChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
getCpuChoice();
main();
