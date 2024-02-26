const inputRef = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(inputRef.value);

  if (amount <= 0 || amount > 100 || !Number.isInteger(amount)) {
    return alert("Please enter a valid number from 1 to 100");
  }

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    destroyBoxes();
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
    size += 10;
  }

  boxesRef.append(...boxes);
  inputRef.value = "";
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
