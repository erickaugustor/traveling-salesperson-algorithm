const Graph = require('./estruturas/Graph');
const inicializaCidades = require('./inicializaCidades');
const menorRota = require('./menorRota');

const graph = new Graph();
inicializaCidades(graph);

cidadeOrigem = 'Nova York';

menorRota(graph, cidadeOrigem);

// Para adicionar uma cidade graph.addEdge('a', 'm', 10);
// console.log(graph);