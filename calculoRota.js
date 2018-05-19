const pilhaRotas = require('./estruturas/PilhaRota');

const temCidadeRepetida = require('./utils/temCidadeRepetida');
const passouPorTodasCidades = require('./utils/passouPorTodasCidades');
const calcularDistancia = require('./utils/calcularDistancia');


const calculoRota = (estruturaMapa, cidadeOrigem) => {

  const totalDeCidades = estruturaMapa.vertices.length;

  let menorDistancia = Infinity;
  let rotaFoiEncontrada = true;

  let pilhaDeRotas = new pilhaRotas();

  let rotaFinal = null;

  let cidadesDoMapa = estruturaMapa.vertices;
  
  let rotasCidadeOrigem = estruturaMapa.adjList.get(cidadeOrigem);
  // Array de viznhos da cidade de origem

  rotasCidadeOrigem.sort(
    (a, b) => (a.distancia < b.distancia) ? 1 : 0
  );
  // Ordenando pela distancia

  let distanciaTotal = 0;

  // console.log(rotasCidadeOrigem)

  rotasCidadeOrigem.forEach(objCidade => {
    pilhaDeRotas.pushRotas([objCidade]);
    pilhaDeRotas.pushDistania(objCidade.distancia);
  });

  let i = 0;

  while(rotaFoiEncontrada && pilhaDeRotas.isEmpty) {
    let rotaAtual = pilhaDeRotas.popRotas();
    let distanciaAtual = pilhaDeRotas.popDistancia();
    let posicaoUltimaRota = rotaAtual.length - 1;

    let ultimaRota = rotaAtual[posicaoUltimaRota];
    let cidadeAtual = ultimaRota['vizinho'];

    let igualDestino = cidadeAtual == cidadeOrigem;
    // Verifica se destino final é a cidade de Origem

    if (igualDestino && (posicaoUltimaRota+1) == totalDeCidades && passouPorTodasCidades(rotaAtual, cidadesDoMapa)) {
      if (distanciaAtual < menorDistancia) {
        menorDistancia = distanciaAtual;
        rotaFinal = rotaAtual;
        rotaFoiEncontrada = true;
      }
    } else {
      let proximasRotas = estruturaMapa.adjList.get(cidadeAtual);

      if (proximasRotas.length > 1) {
        // Tem mais que um vizinho?
      
        // Ordenando vizinhos pela distancia
        proximasRotas.sort(
          (a, b) => (a.distancia < b.distancia) ? 1 : 0
        );
        
        // Para cada vizinho
        proximasRotas.forEach(rota => {
          // Verificar se a diatancia de tudo + distancia da cidade
          let distanciaFinal = distanciaAtual + rota.distancia;
          let cidadeEhVizinho = rota.vizinho == cidadeOrigem;

          if (distanciaFinal < menorDistancia && !cidadeEhVizinho) {
            // Se é menor e a cidade não é a de origem
            let rotasFinal = [];
            rotasFinal.push(...rotaAtual, rota);

            // Colocar na pilha as rotas e a distância
            pilhaDeRotas.pushRotas(rotasFinal);
            pilhaDeRotas.pushDistania(distanciaFinal);            

          }
          // Se é maior, descartar
        });      

      } else {
        // Só tem um vizinho?
        
        let distanciaFinal = proximasRotas[0].distancia + distanciaAtual;
        let rotasFinal = [];
        rotasFinal.push(...rotaAtual, proximasRotas[0].vizinho);

        // Colocar na pilha as rotas e a distância
        pilhaDeRotas.pushRotas(rotasFinal);
        pilhaDeRotas.pushDistania(distanciaFinal);

      }
      console.log('****')
      console.log(pilhaDeRotas.rotas)
      
    }

    i++
    if(i === 3)    break;
  }

  return rotaFinal;
};

/*
let menorDistancia = Infinity;
let rotaFoiEncontrada = false;

let pilhaRotas = [];
let rotaFinal = null;
 
let cidadesMapa = graph.vertices;

let rotasCidadeOrigem = graph.adjList.get(cidadeOrigem);
rotasCidadeOrigem.forEach(arrayRota => pilhaRotas.push([arrayRota]));

let i = 0;

do {
  console.log(pilhaRotas)
  
  let rotasAtuais = [];
  let rotaAtual = pilhaRotas.pop();
  
  rotasAtuais.push(rotaAtual);
  
  rotasAtuais = rotasAtuais[0]
 
  let tamanhoArray = rotasAtuais.length-1
  let objCidadeAtual = rotasAtuais[tamanhoArray];
  let cidadeAtual = Object.keys(objCidadeAtual);


  //CONTAR O NUMERO DE VIZINHOS, SE FOR UM, PERMITE COLOCAR NA PILHA UMA VOLTA
  //CASO NÃO SEJA, COLOCAR TODOS MENOS A VOLTA
 
  let control = false;
  let ultimaRotaAtual = Object.keys(rotaAtual[rotaAtual.length - 1]);

  let igualDestino = (ultimaRotaAtual == cidadeOrigem);

  if (igualDestino && passouPorTodasCidades(rotaAtual, cidadesMapa)) {
      let distanciaCaulada = calcularDistancia(rotaAtual)[0]
      if (menorDistancia > distanciaCaulada) {
        menorDistancia = distanciaCaulada;
        rotaFinal = rotaAtual;
        rotaFoiEncontrada = true;
      }
      console.log("Achou uma " + menorDistancia);
      console.log("\n" + rotaFinal);
  } else {

    // let proximasRotas = [];
    let rotasCidadeAtual = graph.adjList.get(...cidadeAtual);
    // console.log(graph.adjList.get(...cidadeAtual))


    // console.log(rotasCidadeAtual)
    rotasCidadeAtual.forEach(rota => {
      let distanciaCaulada = calcularDistancia(rotaAtual);
      
      // console.log(menorDistancia)
      // console.log(rotaAtual)
      // console.log(distanciaCaulada)
      // console.log(distanciaCaulada[0])

      if ((menorDistancia > distanciaCaulada)) {
        let rotasFinal = [];
        rotasFinal.push(...rotaAtual, rota);
        pilhaRotas.push(rotasFinal);
      }


      console.log('*****')
      console.log('*****')
    });
    i++
    if(i === 3)
    break;
  }
  // console.log(pilhaRotas)
  // console.log(rotaFoiEncontrada)
  // console.log((pilhaRotas === undefined || pilhaRotas.length == 0))
} while (!rotaFoiEncontrada && !(pilhaRotas === undefined || pilhaRotas.length == 0));
*/

module.exports = calculoRota;
