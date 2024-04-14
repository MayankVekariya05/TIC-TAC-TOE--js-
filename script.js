let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let new_btn = document.querySelector("#new");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let drawCondition = document.querySelector(".draw");

let turnO = true;
let count = 0 ;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "rgb(185, 61, 61)";
      turnO = true;
    }
    box.disabled = true;
    count++
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        return;
      }
    }
  }
  if (count == 9){
    showDraw();
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledbox();
};

const showDraw = () => {
  msg.innerText = "Game was Draw"
  msgContainer.classList.remove("hide");

}

const disabledbox = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enablebox = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetbox = () => {
  turnO = true;
  count = 0;
  enablebox();
  msgContainer.classList.add("hide");
};

new_btn.addEventListener("click", resetbox);
reset_btn.addEventListener("click", resetbox);
