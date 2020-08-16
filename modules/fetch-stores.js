// Function to get a json file and show it in the page.

// --- Parameters ---
// url: link to the json file ie: "./storesapi.json",
// default: none, can't be empty
// target: div where the child will be append ie: ".numbers",
// default: none, can't be empty

import AnimaNumbers from "./anima-numbers.js";

export default function fetchStores(url, target) {
  // create div that contains the total of assembled stores
  function createStore(store) {
    const div = document.createElement("div");
    div.classList.add("number-store");
    div.classList.add("json-api");
    div.innerHTML = `<h3>${store.specie}</h3><span data-number>${store.total}</span>`;

    return div;
  }

  // gatther the data from an JSON file and create with createStore.
  async function createStores() {
    try {
      const storesRespose = await fetch(url);
      const storesJSON = await storesRespose.json();
      const numbersGrid = document.querySelector(target);

      storesJSON.forEach((element) => {
        const divStore = createStore(element);
        numbersGrid.appendChild(divStore);
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

  return createStores();
}
