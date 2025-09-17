let container = document.querySelector(".container");
let box = container.querySelector(".box");
let weapons = box.querySelectorAll(".weapon-box div");
let choice = container.querySelector(".choice");
let score = document.querySelector(".score");
let player = choice.querySelector(".player-choice img");
let computer = choice.querySelector(".computer-choice img");
let resultOutput = container.querySelector(".result-output");
let resultMessage = resultOutput.querySelector("h3");
let playAgainBtn = resultOutput.querySelector("button");
let wonValue = document.querySelector(".score-grade .won h3 span");
let lostValue = document.querySelector(".score-grade .lost h3 span");
let drawValue = document.querySelector(".score-grade .draw h3 span");

let won = 0,
  lost = 0,
  draw = 0;

let computerChoice = ["Rock", "Paper", "Scissors"];

let outcomes = {
  RockRock: "Draw",
  RockPaper: "Computer",
  RockScissors: "You",
  PaperRock: "You",
  PaperPaper: "Draw",
  PaperScissors: "Computer",
  ScissorsPaper: "You",
  ScissorsRock: "Computer",
  ScissorsScissors: "Draw",
};

//just added an event listener for the weapon-box
for (let i = 0; i < weapons.length; i++) {
  weapons[i].addEventListener("click", (e) => {
    player.src = `Images/rock.png`;
    computer.src = `Images/rock.png`;

    //hide the weapon box and show the choice
    box.style.display = "none";
    choice.style.display = "block";

    setTimeout(() => {
      choice.classList.add("active");
    }, 1000);

    setTimeout(() => {
      let playerchoice = choice.querySelectorAll("div");
      for (let i = 0; i < playerchoice.length; i++) {
        playerchoice[i].style.animationPlayState = "paused";
      }

      player.src = e.target.src;

      let randomChoice =
        computerChoice[Math.floor(Math.random() * computerChoice.length)];
      computer.src = `Images/${randomChoice}.png`;

      let userChoice = e.target.parentElement.className;
      let outcomeValue = outcomes[userChoice + randomChoice];

      showResult(outcomeValue);
    }, 3000);
  });
}

let showResult = (result) => {
  resultOutput.style.display = "flex";

  if (result === "You") {
    resultMessage = "Congrats, You Won! 😎";
    won++;
    wonValue.innerHTML = won;
  } else if (result === "Computer") {
    resultMessage.innerHTML = "You Loss ☠";
    lost++;
    lostValue.innerHTML = lost;
  } else {
    resultMessage.innerHTML = "Draw";
    draw++;
    drawValue.innerHTML = draw;
  }
};

playAgainBtn.addEventListener("click", () => {
  choice.classList.remove("active");
  resultOutput.style.display = "none";
  box.style.display = "block";
  choice.style.display = "none";

  let playerchoice = choice.querySelectorAll("div");
  for (let i = 0; i < playerchoice.length; i++) {
    playerchoice[i].style.animationPlayState = "running";
  }
});

let icon = document.querySelector(".icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-mode");

   if (document.body.classList.contains("dark-mode")) {
    icon.src = "Images/dark mode.png";
  } else {
    icon.src = "Images/light mode.png";
  }
};
