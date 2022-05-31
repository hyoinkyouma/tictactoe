import Gamelogic from "./gamelogic.js";
const gameRender = () => {
  const { gameArr, winner } = Gamelogic();
  const gameboardArr = document.querySelector(".game-canvas");

  for (let i = 0; i < gameArr.length; i++) {
    gameArr[i].forEach((char) => {
      const arr = document.createElement("span");
      arr.innerHTML = char;
      gameboardArr.append(arr);
    });
  }
  if (winner != "") {
    console.log(winner);
  }
};

export default gameRender;
