import { Gamelogic } from "./gamelogic.js";
import covertToHuman from "./coverToHuman.js";

let gameArr = Gamelogic();
const gameboardArr = document.querySelector(".game-canvas");

const gameRender = () => {
  for (let i = 0; i < gameArr.length; i++) {
    gameArr[i].forEach((char) => {
      const arr = document.createElement("span");
      arr.classList.add("cell");
      arr.innerHTML = char;
      gameboardArr.append(arr);
    });
  }

  const cells = document.querySelectorAll(".cell");
  covertToHuman(cells);

  return gameArr;
};

const changeValue = (newGameArr) => {
  const cells = document.querySelectorAll(".cell");
  let x = 0;
  cells.forEach((cell) => {
    if (x < 3) {
      cell.textContent = newGameArr[0][x];
    } else if (x < 6) {
      cell.textContent = newGameArr[1][x - 3];
    } else if (x < 9) {
      cell.textContent = newGameArr[2][x - 6];
    }
    x++;
  });
  covertToHuman(cells);
};

export { gameRender, changeValue };
