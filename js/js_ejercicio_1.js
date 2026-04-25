const changeColorButton = document.querySelector("#changeColorButton");
const colorValue = document.querySelector("#colorValue");

function generateRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  // Un color hexadecimal tiene 6 caracteres despues del simbolo #.
  for (let i = 0; i < 6; i++) {
    const randomPosition = Math.floor(Math.random() * letters.length);
    color += letters[randomPosition];
  }

  return color;
}

changeColorButton.addEventListener("click", () => {
  const newColor = generateRandomHexColor();

  document.body.style.backgroundColor = newColor;
  colorValue.textContent = `Color actual: ${newColor}`;
});
