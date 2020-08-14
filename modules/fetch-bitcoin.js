export default function initFetchBitcoin() {}

fetch("https://blockchain.info/ticker")
  .then((response) => response.json())
  .then((bitcoin) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = `US$ ${bitcoin.USD.sell.toFixed(2)}`;
  })
  .catch((erro) => {
    console.log(Error(erro));
  });
