// Function to get the bitcoin price on a outside json show it in the page.

// --- Parameters ---
// url: link to the json file ie: "https://blockchain.info/ticker",
// default: none, can't be empty
// target: div where the child will be append ie: ".btc-price",
// default: none, can't be empty

export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = `US$ ${bitcoin.USD.sell.toFixed(2)}`;
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
