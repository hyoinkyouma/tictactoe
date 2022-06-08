import covertToHuman from "./coverToHuman.js";
import { changeValue } from "./gameRender.js";
const history = [];
let historyOpen = false;

const pushToHistory = (gameArr) => {
  const topush = gameArr.map((arr) => {
    return arr.slice();
  });
  history.push(topush);
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
      return history[i];
    };
  }
};

export default pushToHistory;
export { displayHistory, getHistory };
