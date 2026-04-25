const timerDisplay = document.querySelector("#timerDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let elapsedSeconds = 0;
let timerId = null;

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // padStart mantiene siempre el formato 00:00:00.
  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(elapsedSeconds);
}

startButton.addEventListener("click", () => {
  if (timerId !== null) {
    return;
  }

  timerId = setInterval(() => {
    elapsedSeconds++;
    updateTimerDisplay();
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  elapsedSeconds = 0;
  updateTimerDisplay();
});
