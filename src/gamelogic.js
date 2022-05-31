const Gamelogic = () => {
  let o = 0;

  let gameArr = [
    [o, o, o],
    [o, o, o],
    [o, o, o],
  ];

  return gameArr;
};

const checkWin = (gameArr) => {
  let whoWin = "";
  const rowsum = [];
  const colsum = [];
  const diagsum = [];
  gameArr.forEach((row) => {
    const sum = row.reduce((sum, a) => sum + a);
    rowsum.push(sum);
  });
  for (let i = 0; i < 3; i++) {
    const char = gameArr[0][i] + gameArr[1][i] + gameArr[2][i];
    colsum.push(char);
  }
  const chardiagx = gameArr[0][0] + gameArr[1][1] + gameArr[2][2];
  diagsum.push(chardiagx);
  const chardiagy = gameArr[0][2] + gameArr[1][1] + gameArr[2][0];
  diagsum.push(chardiagy);

  rowsum.forEach((sum) => {
    if (sum === 3) whoWin = "player 1";
    if (sum === 12) whoWin = "player 2";
    else return;
  });

  colsum.forEach((sum) => {
    if (sum === 3) whoWin = "player 1";
    if (sum === 12) whoWin = "player 2";
    else return;
  });

  diagsum.forEach((sum) => {
    if (sum === 3) whoWin = "player 1";
    if (sum === 12) whoWin = "player 2";
    else return;
  });
  return whoWin;
};

export { Gamelogic, checkWin };
