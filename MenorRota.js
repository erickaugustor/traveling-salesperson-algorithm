// const temCidadeRepetida = require('./utils/temCidadeRepetida');
const passouPorTodasCidades = require('./utils/passouPorTodasCidades');
const calcularDistancia = require('./utils/calcularDistancia');


const menorRota = (graph, cidadeOrigem) => {

  /*
  console.log("Grafo", graph)
  console.log("****************************")

  console.log("cidadeOrigem", cidadeOrigem)
  console.log("****************************")
  */

  let cidadesMapa = graph.vertices;
  
  /*
  console.log("cidadesMapa", cidadesMapa)
  console.log("****************************")
  */

  let menorDistancia = Infinity;
  let rotaFoiEncontrada = false;

  let pilhaRotas = [];
  let rotaFinal = null;

  let rotasCidadeOrigem = graph.adjList.get(cidadeOrigem);
  rotasCidadeOrigem.forEach(arrayRota => pilhaRotas.push([arrayRota]));

  /*
  console.log("rotasCidadeOrigem", rotasCidadeOrigem)
  console.log("****************************")
  
  console.log("pilhaRotas", pilhaRotas)
  console.log("****************************")
  */

  do {
    let rotasAtuais = [];
    let rotaAtual = pilhaRotas.pop();

    /*
    console.log("rotaAtual", rotaAtual)
    console.log("****************************")

    console.log("pilhaRotas", pilhaRotas)
    console.log("****************************")
    */
    
    rotasAtuais.push(rotaAtual);

    /*
    console.log("rotasAtuais", rotasAtuais)
    console.log("****************************")
    */

    let cidadeAtual = Object.keys(rotasAtuais[0][0])[0];

    /*
    console.log("cidadeAtual", cidadeAtual)
    console.log("****************************")
    */

    let control = false;
    let ultimaRotaAtual = Object.keys(rotaAtual[rotaAtual.length - 1]);

    /*
    console.log("ultimaRotaAtual", ultimaRotaAtual)
    console.log("****************************")
    */

    let igualDestino = ultimaRotaAtual == cidadeOrigem;

    /*
    console.log("igualDestino", igualDestino)
    console.log("****************************")
    */

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
      /*
      console.log("rotasCidadeAtual", rotasCidadeAtual)
      console.log("****************************")
      */

      rotasCidadeAtual.forEach(rota => {
        if (true) {
          let rotasFinal = [];
          rotasFinal.push(...rotaAtual, rota);
          /*
          console.log("rotasFinal", rotasFinal)
          console.log("**************************")
          */
          pilhaRotas.push(rotasFinal);
        }
      });
      /*
      console.log("pilhaRotas", pilhaRotas)
      console.log("****************************")
      */

      /* console.log(pilhaRotas.pop()) */
    }
  } while (!(pilhaRotas === undefined || pilhaRotas.length == 0) && !rotaFoiEncontrada);
};

module.exports = menorRota;
