// const Graph = require('./estruturas/Graph');
const GrafoMapa = require('./estruturas/GrafoMapa');
const inicializaCidades = require('./inicializaCidades');
const menorRota = require('./menorRota');
const calculoRota = require('./calculoRota');

// const graph = new Graph();

const estruturaMapa = new GrafoMapa();

inicializaCidades(estruturaMapa);

// console.log(estruturaMapa.adjList);
// Testando Lista de cidades vizinhas


cidadeOrigem = 'Boston';

console.log(calculoRota(estruturaMapa, cidadeOrigem))

// menorRota(graph, cidadeOrigem);

// Para adicionar uma cidade graph.addEdge('a', 'm', 10);
// console.log(graph);