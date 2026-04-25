const textArea = document.querySelector("#textArea");
const wordCount = document.querySelector("#wordCount");
const characterCount = document.querySelector("#characterCount");

function updateTextStats() {
  const text = textArea.value.trim();
  const words = text === "" ? [] : text.split(/\s+/);
  // \s elimina espacios, saltos de linea y tabulaciones.
  const charactersWithoutSpaces = textArea.value.replace(/\s/g, "");

  wordCount.textContent = `Palabras: ${words.length}`;
  characterCount.textContent = `Caracteres sin espacios: ${charactersWithoutSpaces.length}`;
}

textArea.addEventListener("input", updateTextStats);
