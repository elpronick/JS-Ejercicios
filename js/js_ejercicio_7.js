const passwordLengthInput = document.querySelector("#passwordLength");
const generatePasswordButton = document.querySelector("#generatePasswordButton");
const passwordResult = document.querySelector("#passwordResult");
const passwordError = document.querySelector("#passwordError");

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?";

function generatePassword(length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomPosition = Math.floor(Math.random() * characters.length);
    password += characters[randomPosition];
  }

  return password;
}

generatePasswordButton.addEventListener("click", () => {
  const selectedLength = Math.floor(Number(passwordLengthInput.value));

  passwordError.textContent = "";

  if (Number.isNaN(selectedLength) || selectedLength < 4) {
    passwordResult.textContent = "Contrasena: -";
    passwordError.textContent = "La longitud debe ser mayor o igual que 4.";
    return;
  }

  passwordResult.textContent = `Contrasena: ${generatePassword(selectedLength)}`;
});
