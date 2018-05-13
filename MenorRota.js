const inicializaCidades = require('./inicializaCidades');

const menorRota = (graph, cidadeOrigem) => {
  let menorDistancia = Infinity;

  let pilhaRotas = [];

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
    let rotaAtual = [];
    rotaAtual.push(pilhaRotas.pop());

    // console.log("Primeira cidade tirada da fila ", rotaAtual);
    // console.log("Como ficou a fila ", pilhaRotas);
    // console.log('************');

    console.log("Cidade retirada ",Object.keys(rotaAtual[0])[0]);
    console.log('************');

    let rotaCidadeAtual = graph.adjList.get(Object.keys(rotaAtual[0])[0]);
    console.log("Rotas da cidade atual ", rotaCidadeAtual);

    let control = false;

    if(control) {

    } else {

    }

    control = true;

    break;
  } while(!(pilhaRotas === undefined || pilhaRotas.length == 0));
  
};

module.exports = menorRota;
