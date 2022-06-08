import { gameRender } from "./gameRender.js";
import Listeners from "./listeners.js";
import { displayHistory } from "./history.js";

const app = () => {
  const gameArr = gameRender();
  Listeners(gameArr);
  displayHistory();
};

app();
