const temCidadeRepetida = require('./utils/temCidadeRepetida');
const passouPorTodasCidades = require('./utils/passouPorTodasCidades');
const calcularDistancia = require('./utils/calcularDistancia');


const menorRota = (graph, cidadeOrigem) => {

  let menorDistancia = Infinity;
  let rotaFoiEncontrada = false;

  let pilhaRotas = [];
  let rotaFinal = null;
  
  let cidadesMapa = graph.vertices;

  let rotasCidadeOrigem = graph.adjList.get(cidadeOrigem);
  rotasCidadeOrigem.forEach(arrayRota => pilhaRotas.push([arrayRota]));

  let i = 0;

  do {
    let rotasAtuais = [];
    let rotaAtual = pilhaRotas.pop();
    
    rotasAtuais.push(rotaAtual);
    
    rotasAtuais = rotasAtuais[0]
  
    let tamanhoArray = rotasAtuais.length-1
    let objCidadeAtual = rotasAtuais[tamanhoArray];
    let cidadeAtual = Object.keys(objCidadeAtual);

    // console.log(cidadeAtual)    
    console.log('*********')
    // console.log(rotasAtuais)
    // console.log(rotasAtuais[0])    
    // console.log(rotasAtuais[tamanhoArray])    
    // console.log(Object.keys(rotasAtuais[0][tamanhoArray])[0])    
    console.log('*********')
    console.log('*********')
    console.log('*********')
    console.log('*********')
   
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


      console.log(rotasCidadeAtual)
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
      if(i === 2)
      break;
    }
    // console.log(pilhaRotas)
    // console.log(rotaFoiEncontrada)
    // console.log((pilhaRotas === undefined || pilhaRotas.length == 0))
  } while (!rotaFoiEncontrada && !(pilhaRotas === undefined || pilhaRotas.length == 0));
};

module.exports = menorRota;
