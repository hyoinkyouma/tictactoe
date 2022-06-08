const makeOverlay = () => {
  const body = document.querySelector("body");
  const overlay = document.createElement("div");
  overlay.style.backgroundColor = "#050a307b";
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.height = "100vh";
  overlay.style.width = "100vw";

  body.append(overlay);
  overlay.onclick = () => {
    closeModal(overlay);
    closeModal(document.querySelector(".modal"));
  };
  return overlay;
};

const createModal = () => {
  const overlay = makeOverlay();
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const span = document.createElement("span");
  span.innerHTML = "&times";
  modal.append(span);

  span.onclick = () => {
    closeModal(modal);
    closeModal(overlay);
  };
  return { modal, overlay };
};

const makeModalButton = (content = "Continue") => {
  const button = document.createElement("button");
  button.classList.add("modalBtn");
  button.textContent = content;

  return button;
};

const closeModal = (modal) => {
  modal.remove();
};

const tie = () => {
  const body = document.querySelector("body");
  const { modal, overlay } = createModal();
  const button = makeModalButton();
  const h1 = document.createElement("h1");
  h1.textContent = "It's a tie!";

  button.onclick = () => {
    closeModal(modal);
    closeModal(overlay);
  };

  modal.append(h1);
  modal.append(button);
  body.append(modal);
};

const win = (player) => {
  const body = document.querySelector("body");
  const { modal, overlay } = createModal();
  const button = makeModalButton();
  const h1 = document.createElement("h1");
  h1.textContent = `${player} Wins`;

  button.onclick = () => {
    closeModal(modal);
    closeModal(overlay);
  };
  modal.append(h1);
  modal.append(button);
  body.append(modal);
};

export { tie, win };
