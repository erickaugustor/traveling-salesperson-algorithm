// const temCidadeRepetida = require('./utils/temCidadeRepetida');
const passouPorTodasCidades = require('./utils/passouPorTodasCidades');
const calcularDistancia = require('./utils/calcularDistancia');


const menorRota = (graph, cidadeOrigem) => {
  let cidadesMapa = graph.vertices;

  let menorDistancia = Infinity;
  let rotaFoiEncontrada = false;

  let pilhaRotas = [];
  let rotaFinal = null;

  let rotasCidadeOrigem = graph.adjList.get(cidadeOrigem);
  rotasCidadeOrigem.forEach(arrayRota => pilhaRotas.push([arrayRota]));

  // console.log(rotasCidadeOrigem)
  // console.log('****') 
  // pilhaRotas.forEach(each => console.log(each))
  // console.log('****')  
  // pilhaRotas.pop();
  // pilhaRotas.forEach(each => console.log(each))

  // console.log("cidadeOrigem ", cidadeOrigem);


  // console.log(graph.adjList)
  // console.log("*********")
  // console.log(graph.adjList.get('Nova York'));

  // console.log("Pilha Atual ", pilhaRotas);  

  do {
    let rotasAtuais = [];
    let rotaAtual = pilhaRotas.pop();

    rotasAtuais.push(rotaAtual);

    let cidadeAtual = Object.keys(rotasAtuais[0][0])[0];

    //console.log("Primeira cidade tirada da fila ", rotasAtuais);
    //console.log("Como ficou a fila ", pilhaRotas);
    //console.log('************');

    //console.log("Cidade retirada ", Object.keys(rotasAtuais[0])[0]);
    //console.log('************');

    // let rotaCidadeAtual = graph.adjList.get(Object.keys(rotasAtuais[0])[0]);
    //console.log("Rotas da cidade atual ", rotaCidadeAtual);

    let control = false;
    let ultimaRotaAtual = Object.keys(rotaAtual[rotaAtual.length - 1]);
    let igualDestino = ultimaRotaAtual == cidadeOrigem;


    if (igualDestino) {
      if (passouPorTodasCidades(rotaAtual, cidadesMapa)) {
        let distanciaCaulada = calcularDistancia(rotaAtual)[0]
        if (menorDistancia < distanciaCaulada) {
          menorDistancia = distanciaCaulada;
          rotaFinal = rotaAtual;
          rotaFoiEncontrada = true;
        }
      }
    } else {
      let proximasRotas = [];
      let rotasCidadeAtual = graph.adjList.get(cidadeAtual);
      console.log(rotasCidadeAtual)
      rotasCidadeAtual.forEach(rota => {
        if (true) {
          let rotasFinal = [];
          rotasFinal.push(rotaAtual, rota);
          pilhaRotas.push(rotasFinal);
        }
      });
    }
  } while (!(pilhaRotas === undefined || pilhaRotas.length == 0) && rotaFoiEncontrada);
};

module.exports = menorRota;
