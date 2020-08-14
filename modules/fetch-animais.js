import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.classList.add("json-api");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisRespose = await fetch(url);
      const animaisJSON = await animaisRespose.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJSON.forEach((element) => {
        const divAnimal = createAnimal(element);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais("./animaisapi.json");
}
