const checkIfStuck = (gameArr) => {
  let arr = gameArr;
  let isStuck = 0;
  gameArr.forEach((row) => {
    if (!row.includes(0)) {
      isStuck++;
    }
  });
  if (isStuck === 3) {
    arr = stepBro();
  }
  return arr;
};

const stepBro = () => {
  return [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
};

export { checkIfStuck, stepBro };
