
const inicializaPoucasCidades = (graph) => {
  graph.addEdge('Campinas', 'SaoPaulo', 10);
  
  graph.addEdge('Campinas', 'Valinhos', 5);
  graph.addEdge('Campinas', 'Paulinia', 7);

  graph.addEdge('Valinhos', 'Campinas', 5);
  graph.addEdge('Valinhos', 'Paulinia', 3);

  graph.addEdge('Paulinia', 'Campinas', 7);
  graph.addEdge('Paulinia', 'Valinhos', 3);
  graph.addEdge('Paulinia', 'SaoPaulo', 20);
  graph.addEdge('Paulinia', 'Jundiai', 5);

  graph.addEdge('SaoPaulo', 'Campinas', 10);
  graph.addEdge('SaoPaulo', 'Paulinia', 20);
  graph.addEdge('SaoPaulo', 'Jundiai', 10);

  graph.addEdge('Jundiai', 'Paulinia', 5);
  graph.addEdge('Jundiai', 'SaoPaulo', 10);
}

module.exports = inicializaPoucasCidades;
