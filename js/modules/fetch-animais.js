import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Crie a div contendo informações
  // com o toral de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  // Anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", "ativo", ".numeros");
    animaNumeros.init();
  }
  // Puxa os animais através de um arquivo .json
  // e cria cada animal utilizando "createAnimal()"
  async function criarAnimais() {
    try {
      // Fetch e espera resposta
      const animaisResponse = await fetch(url);
      // Transforma a resposta em .json
      const animaisJSON = await animaisResponse.json();
      // Após a transformação do .json, ativa as funções
      // para preencher e animar os numeros
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (error) {
      console.log(Error(error));
    }
  }
  return criarAnimais();
}
