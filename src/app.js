import { gameRender } from "./gameRender.js";
import Listeners from "./listeners.js";

const app = () => {
  const gameArr = gameRender();
  Listeners(gameArr);
};

app();
