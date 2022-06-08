import { checkWin } from "./gamelogic.js";
import { changeValue } from "./gameRender.js";
import { winPoints } from "./winWinresult.js";
import { checkIfStuck, unStuck } from "./ifStuck.js";
import covertToHuman from "./coverToHuman.js";

const Listeners = (gameArr, currentPlayer = "p1") => {
  let newGameArr = gameArr;
  const history = [];
  let historyOpen = false;

  const pushToHistory = (gameArr) => {
    const topush = gameArr.map((arr) => {
      return arr.slice();
    });
    history.push(topush);
  };

  const refreshHistory = () => {
    document.querySelector(".history").remove();

    const body = document.querySelector("body");
    const modal = document.createElement("div");
    modal.classList.add("history");

    modal.style =
      "position:absolute; top:0; right:0; height:100vh; width: 20vw; padding-top:5%; overflow-y:scroll";
    for (let i = 0; i < history.length; i++) {
      const div = document.createElement("div");
      div.classList.add("history-board");
      history[i].forEach((char) => {
        const arr = document.createElement("div");
        arr.classList.add("row");
        char.forEach((value) => {
          const cell = document.createElement("span");
          cell.classList.add("history-cell");
          cell.textContent = value;
          arr.append(cell);
        });
        div.append(arr);
        modal.append(div);
      });
    }

    body.append(modal);
    const cells = document.querySelectorAll(".history-cell");
    covertToHuman(cells);
    console.log("history", history);
    historyOpen = true;

    getHistory();
  };

  const displayHistory = () => {
    const trigramBtn = document.querySelector(".hamburger");

    trigramBtn.onclick = () => {
      if (!historyOpen) {
        const body = document.querySelector("body");
        const modal = document.createElement("div");
        modal.classList.add("history");

        modal.style =
          "position:absolute; top:0; right:0; height:100vh; width: 20vw; padding-top:5%; overflow-y:scroll";
        for (let i = 0; i < history.length; i++) {
          const div = document.createElement("div");
          div.classList.add("history-board");
          history[i].forEach((char) => {
            const arr = document.createElement("div");
            arr.classList.add("row");
            char.forEach((value) => {
              const cell = document.createElement("span");
              cell.classList.add("history-cell");
              cell.textContent = value;
              arr.append(cell);
            });
            div.append(arr);
            modal.append(div);
          });
        }

        body.append(modal);
        const cells = document.querySelectorAll(".history-cell");
        covertToHuman(cells);
        console.log("history", history);
        historyOpen = true;
      } else {
        const modal = document.querySelector(".history");
        modal.remove();
        historyOpen = false;
      }
      getHistory();
    };
  };

  const getHistory = () => {
    const historyBoard = document.querySelectorAll(".history-board");
    for (let i = 0; i < history.length; i++) {
      historyBoard[i].onclick = () => {
        changeValue(history[i]);
        newGameArr = history[i];
      };
    }
  };

  currentPlayer = currentPlayer === "p1" ? 1 : 4;

  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (cells[i].textContent !== "") return;
      if (i <= 2) {
        newGameArr[0][i] = currentPlayer;
      }
      if (i <= 5) {
        newGameArr[1][i - 3] = currentPlayer;
      }
      if (i <= 8) {
        newGameArr[2][i - 6] = currentPlayer;
      }
      if (historyOpen === true) {
        refreshHistory();
      }
      pushToHistory(newGameArr);
      currentPlayer = currentPlayer === 1 ? 4 : 1;
      newGameArr = checkIfStuck(newGameArr);
      changeValue(newGameArr);
      const winner = checkWin(newGameArr);
      if (winner != "") {
        winPoints(winner);
        newGameArr = unStuck(newGameArr);
        changeValue(newGameArr);
      }
    });
  }
  displayHistory();
};

export default Listeners;
