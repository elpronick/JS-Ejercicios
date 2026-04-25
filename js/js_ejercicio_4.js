const searchInput = document.querySelector("#searchInput");
const technologyList = document.querySelector("#technologyList");
const filterMessage = document.querySelector("#filterMessage");

const technologies = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "DOM",
  "Eventos",
  "localStorage",
  "Funciones",
  "Arrays",
  "Objetos"
];

function renderTechnologies(items) {
  technologyList.innerHTML = "";

  items.forEach((technology) => {
    const listItem = document.createElement("li");
    listItem.textContent = technology;
    technologyList.appendChild(listItem);
  });

  filterMessage.textContent = `${items.length} resultado(s) encontrado(s).`;
}

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase().trim();

  // Se compara todo en minusculas para que la busqueda no distinga mayusculas.
  const filteredTechnologies = technologies.filter((technology) =>
    technology.toLowerCase().includes(searchText)
  );

  renderTechnologies(filteredTechnologies);
});

renderTechnologies(technologies);
