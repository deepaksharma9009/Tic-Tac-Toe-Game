let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-game");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".win-message-container");
let quit = document.querySelector("#quit-game");
let playerO = document.querySelector("#player-O");
let playerX = document.querySelector("#player-X");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turn0) {
      box.classList.add("box-color-O");
      box.classList.remove("box-color-X");
      playerO.classList.add("player-O-selected");
      playerX.classList.remove("player-X-selected");
      
      box.innerText = "O";
      turn0 = false;
      
    } else {
      if(!turn0) {
        box.classList.remove("box-color-O");
        box.classList.add("box-color-X");
        box.innerText = "X";
        playerX.classList.add("player-X-selected");
        playerO.classList.remove("player-O-selected");
        turn0 = true;
      }
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for(pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != "") {
      if(pos1 == pos2 && pos2 == pos3 && pos3 == pos1 ) {
        showWinner(pos1); 
        disableBtns();
      }
    }
  }
};
const disableBtns = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
}
const enableBtns = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}
const showWinner = (winner) => {
  msgContainer.innerText = `Congralutations, Winner is ${winner}!`;
  msgContainer.classList.remove("hide");
  reset.classList.add("hide");
  newGame.classList.remove("hide");
};

const resetGanme = () => {
  turn0 = true;
  enableBtns();
  msgContainer.classList.add("hide");
  playerO.classList.remove("player-O-selected");
  playerX.classList.remove("player-X-selected");
}

const new_game = () => {
  turn0 = true;
  enableBtns();
  msgContainer.classList.add("hide");
  newGame.classList.add("hide");
  reset.classList.remove("hide");
  playerO.classList.remove("player-O-selected");
  playerX.classList.remove("player-X-selected");
}
const quitGame = () => {
  window.close();
}

reset.addEventListener("click", resetGanme);
newGame.addEventListener("click",new_game);
quit.addEventListener("click",quitGame);
playerO.disabled = true;
playerX.disabled = true;
