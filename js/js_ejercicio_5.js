const firstNumberInput = document.querySelector("#firstNumber");
const secondNumberInput = document.querySelector("#secondNumber");
const calculatorResult = document.querySelector("#calculatorResult");
const calculatorError = document.querySelector("#calculatorError");
const operationButtons = document.querySelectorAll("[data-operation]");

function getNumbers() {
  const firstValue = firstNumberInput.value.trim();
  const secondValue = secondNumberInput.value.trim();

  if (firstValue === "" || secondValue === "") {
    return { error: "Completa los dos campos numericos." };
  }

  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    return { error: "Introduce solo valores numericos validos." };
  }

  return {
    firstNumber,
    secondNumber
  };
}

function calculate(operation) {
  const data = getNumbers();

  calculatorError.textContent = "";

  if (data.error) {
    calculatorResult.textContent = "Resultado: -";
    calculatorError.textContent = data.error;
    return;
  }

  let result;

  if (operation === "add") {
    result = data.firstNumber + data.secondNumber;
  } else if (operation === "subtract") {
    result = data.firstNumber - data.secondNumber;
  } else if (operation === "multiply") {
    result = data.firstNumber * data.secondNumber;
  } else if (operation === "divide") {
    if (data.secondNumber === 0) {
      calculatorResult.textContent = "Resultado: -";
      calculatorError.textContent = "No se puede dividir entre cero.";
      return;
    }

    result = data.firstNumber / data.secondNumber;
  }

  calculatorResult.textContent = `Resultado: ${result}`;
}

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button.dataset.operation);
  });
});
