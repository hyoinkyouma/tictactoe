import { tie } from "./modal.js";

const checkIfStuck = (gameArr) => {
  let arr = gameArr;
  let isStuck = 0;
  gameArr.forEach((row) => {
    if (!row.includes(0)) {
      isStuck++;
    }
  });
  if (isStuck === 3) {
    arr = unStuck();
    tie();
  }
  return arr;
};

const unStuck = () => {
  return [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
};

export { checkIfStuck, unStuck };
