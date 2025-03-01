function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
button.addEventListener("click", btnFn);

function btnFn() {
  const widget = document.querySelector(".widget");
  let pickedColor = document.querySelector(".color");

  widget.style.backgroundColor = getRandomHexColor();
  pickedColor.textContent = widget.style.backgroundColor;
}
