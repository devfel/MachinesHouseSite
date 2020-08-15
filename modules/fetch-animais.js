import AnimaNumbers from "./anima-numbers.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.classList.add("json-api");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisRespose = await fetch(url);
      const animaisJSON = await animaisRespose.json();
      const numbersGrid = document.querySelector(".numbers-grid");

      animaisJSON.forEach((element) => {
        const divAnimal = createAnimal(element);
        numbersGrid.appendChild(divAnimal);
      });
      const animaNumbers = new AnimaNumbers(
        `[data-number]`,
        `.numbers`,
        `ativo`
      );
      animaNumbers.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais("./animaisapi.json");
}
