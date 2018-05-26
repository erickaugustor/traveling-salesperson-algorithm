// const Graph = require('./estruturas/Graph');
const GrafoMapa = require('./estruturas/GrafoMapa');
const inicializaCidades = require('./inicializaCidades');
// const menorRota = require('./menorRota');
const calculoRota = require('./calculoRota');

const inicializaPoucasCidades = require('./incializaPoucasCidades');

const estruturaMapa = new GrafoMapa();

//inicializaCidades(estruturaMapa);

inicializaPoucasCidades(estruturaMapa);

cidadeOrigem = 'Campinas';

console.log(calculoRota(estruturaMapa, cidadeOrigem))


// Para adicionar uma cidade graph.addEdge('a', 'm', 10);
// console.log(graph);