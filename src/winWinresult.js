import { win } from "./modal.js";

let scorep1 = 0;
let scorep2 = 0;
const winPoints = (winner) => {
  const p1Score = document.getElementById("score-p1");
  const p2Score = document.getElementById("score-p2");
  if (winner === "player 1") {
    scorep1++;
    p1Score.textContent = scorep1;
    win("Player 1");
  } else {
    scorep2++;
    p2Score.textContent = scorep2;
    win("Player 2");
  }
};

export { winPoints };
