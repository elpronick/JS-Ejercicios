const clickButton = document.querySelector("#clickButton");
const clickCounter = document.querySelector("#clickCounter");

let totalClicks = 0;

clickButton.addEventListener("click", () => {
  totalClicks++;
  clickCounter.textContent = `Clics: ${totalClicks}`;
});
