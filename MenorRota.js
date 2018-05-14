const inicializaCidades = require('./utils/inicializaCidades');
const passouPorTodasCidades = require('./utils/passouPorTodasCidades');

const menorRota = (graph, cidadeOrigem) => {
  let cidadesMapa = graph.vertices;

  let menorDistancia = Infinity;
  let rotaFoiEncontrada = false;

  let pilhaRotas = [];
  let menorRota = null;

  let rotasCidadeOrigem = graph.adjList.get(cidadeOrigem);
  rotasCidadeOrigem.forEach(arrayRota => pilhaRotas.push(arrayRota));

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

    let cidadeAtual = Object.keys(rotasAtuais[0])[0];

    //console.log("Primeira cidade tirada da fila ", rotasAtuais);
    //console.log("Como ficou a fila ", pilhaRotas);
    //console.log('************');

    //console.log("Cidade retirada ", Object.keys(rotasAtuais[0])[0]);
    //console.log('************');

    // let rotaCidadeAtual = graph.adjList.get(Object.keys(rotasAtuais[0])[0]);
    //console.log("Rotas da cidade atual ", rotaCidadeAtual);

    let control = false;

    if (control) {

    } else {
      let proximasRotas = [];
      let rotasCidadeAtual = graph.adjList.get(cidadeAtual);
      // console.log(rotasCidadeAtual)
      rotasCidadeAtual.forEach(rota => {
        if (true) {
          let rotasFinal = [];
          rotasFinal.push(rotaAtual, rota);
          pilhaRotas.push(rotasFinal);
        }
      });
      // console.log(pilhaRotas);
    }
    break;
  } while (!(pilhaRotas === undefined || pilhaRotas.length == 0) && rotaFoiEncontrada);

};

module.exports = menorRota;
