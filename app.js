const Graph = require('./estruturas/Graph');
const inicializaCidades = require('./inicializaCidades');

const graph = new Graph();
inicializaCidades(graph);

//Para adicionar uma cidade graph.addEdge('a', 'm', 10);
console.log(graph);