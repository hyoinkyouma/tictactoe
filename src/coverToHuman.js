const covertToHuman = (arr) => {
  arr.forEach((ar) => {
    if (ar.textContent === "4") ar.textContent = "X";
    if (ar.textContent === "1") ar.textContent = "O";
  });
};

export default covertToHuman;
