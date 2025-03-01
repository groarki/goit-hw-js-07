const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameIn.addEventListener("input", (event) => {
  const wthtSpaces = event.currentTarget.value.trim();

  if (wthtSpaces.length != 0) nameOut.textContent = wthtSpaces + "!";
  else nameOut.textContent = "Anonymous";
});
