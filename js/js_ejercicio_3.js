const itemInput = document.querySelector("#itemInput");
const addItemButton = document.querySelector("#addItemButton");
const dynamicList = document.querySelector("#dynamicList");
const listMessage = document.querySelector("#listMessage");

function createListItem(text) {
  const listItem = document.createElement("li");
  const itemText = document.createElement("span");
  const deleteButton = document.createElement("button");

  itemText.textContent = text;
  deleteButton.textContent = "Eliminar";
  deleteButton.className = "button button--small button--danger";

  deleteButton.addEventListener("click", () => {
    listItem.remove();
    listMessage.textContent = "Elemento eliminado.";
  });

  listItem.append(itemText, deleteButton);
  return listItem;
}

function addItem() {
  // trim elimina espacios al principio y al final para evitar elementos vacios.
  const itemText = itemInput.value.trim();

  if (itemText === "") {
    listMessage.textContent = "Escribe un texto antes de agregar.";
    return;
  }

  dynamicList.appendChild(createListItem(itemText));
  itemInput.value = "";
  itemInput.focus();
  listMessage.textContent = "Elemento agregado.";
}

addItemButton.addEventListener("click", addItem);

itemInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
