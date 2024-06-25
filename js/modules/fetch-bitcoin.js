export default function fetchBitcoin(url, preco) {
  async function fetchCoin() {
    try {
      const dados = await fetch(url);
      const dadosJSON = await dados.json();
      const btcPreco = document.querySelector(preco);
  
      btcPreco.innerText = (1000 / dadosJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchCoin();
}


