import { checkWin } from "./gamelogic.js";
import { changeValue } from "./gameRender.js";
import { winPoints } from "./winWinresult.js";
import { checkIfStuck, stepBro } from "./checkIfStepsisIsStuck.js";

const Listeners = (gameArr, currentPlayer = "p1") => {
  currentPlayer = currentPlayer === "p1" ? 1 : 4;
  let newGameArr = gameArr;
  console.log(newGameArr);
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (cells[i].textContent !== "0") return;
      if (i <= 2) {
        newGameArr[0][i] = currentPlayer;
      }
      if (i <= 5) {
        newGameArr[1][i - 3] = currentPlayer;
      }
      if (i <= 8) {
        newGameArr[2][i - 6] = currentPlayer;
      }
      currentPlayer = currentPlayer === 1 ? 4 : 1;
      newGameArr = checkIfStuck(newGameArr);
      changeValue(newGameArr);
      const winner = checkWin(newGameArr);
      if (winner != "") {
        winPoints(winner);
        newGameArr = stepBro(newGameArr);
        changeValue(newGameArr);
      }
    });
  }
  return newGameArr;
};

export default Listeners;
