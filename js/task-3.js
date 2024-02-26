const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const toSpan = () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
};

nameInput.addEventListener("input", toSpan);
