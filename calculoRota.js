const pilhaRotas = require('./estruturas/PilhaRota');

const temCidadeRepetida = require('./utils/temCidadeRepetida');
const passouPorTodasCidades = require('./utils/passouPorTodasCidades');
// const calcularDistancia = require('./utils/calcularDistancia');

const calculoRota = (estruturaMapa, cidadeOrigem) => {

  const totalDeCidades = estruturaMapa.vertices.length;

  let menorDistancia = Infinity;
  let rotaFoiEncontrada = true;

  let pilhaDeRotas = new pilhaRotas();

  let rotaFinal = null;

  let cidadesDoMapa = estruturaMapa.vertices;

  // Array de viznhos da cidade de origem
  let rotasVizihasCidadeOrigem = estruturaMapa.adjList.get(cidadeOrigem);

   // Ordenando pela distancia
   rotasVizihasCidadeOrigem.sort(
    (a, b) => (a.distancia < b.distancia) ? 1 : 0
  );

  let distanciaTotal = 0;

  rotasVizihasCidadeOrigem.forEach(objCidadeVizinha => {
    pilhaDeRotas.pushRotas([objCidadeVizinha]);
    pilhaDeRotas.pushDistania(objCidadeVizinha.distancia);
  });

  while (rotaFoiEncontrada && pilhaDeRotas.isEmpty) {
    let rotaAtual = pilhaDeRotas.popRotas();
    let distanciaAtual = pilhaDeRotas.popDistancia();
    let posicaoUltimaRota = rotaAtual.length - 1;

    let ultimaRota = rotaAtual[posicaoUltimaRota];

    let cidadeAtual = ultimaRota['vizinho'];

    // Verifica se destino final é a cidade de Origem
    let igualDestino = cidadeAtual == cidadeOrigem;

    if (igualDestino && ((posicaoUltimaRota + 1) == totalDeCidades) && passouPorTodasCidades(rotaAtual, cidadesDoMapa)) {
      
      if (distanciaAtual < menorDistancia) {
        menorDistancia = distanciaAtual;
        rotaFinal = rotaAtual;
        rotaFoiEncontrada = true;
      }
      return rotaFinal;

    } else {
      let proximasRotasVizinhas = estruturaMapa.adjList.get(cidadeAtual);
 
      // Tem mais que um vizinho?
      if (proximasRotasVizinhas.length > 1) {

        // Ordenando vizinhos pela distancia
        /*proximasRotasVizinhas.sort(
          (a, b) => (a.distancia < b.distancia) ? 1 : 0
        );*/

        // Para cada vizinho
        if (!temCidadeRepetida(rotaAtual, cidadeOrigem)) {
          proximasRotasVizinhas.forEach(rota => {
            // Soma a distância de tudo + distancia da cidade
            let distanciaFinal = distanciaAtual + rota.distancia;

            let cidadeEhAntiga = (rotaAtual.length > 1) ?
              rota.vizinho == rotaAtual[rotaAtual.length - 2].vizinho :
              rota.vizinho == cidadeAtual;
            // let cidadeEhOrigem = rota.vizinho == cidadeOrigem;
            // let cidadeEhAntiga = rota.vizinho == rotaAtual[rotaAtual.length-2].vizinho;     

            if ((distanciaFinal < menorDistancia) && !cidadeEhAntiga) {
              // Se é menor e a cidade não é a de origem
              let rotasFinal = [];
              rotasFinal.push(...rotaAtual, rota);

              // Colocar na pilha as rotas e a distância
              pilhaDeRotas.pushRotas(rotasFinal);
              pilhaDeRotas.pushDistania(distanciaFinal);
            }

            // Se é maior, descartar
          });
        }
      } else {
        // Só tem um vizinho?
        let distanciaFinal = proximasRotasVizinhas[0].distancia + distanciaAtual;
        let rotasFinal = [];
        rotasFinal.push(...rotaAtual, proximasRotasVizinhas[0].vizinho);

        // Colocar na pilha as rotas e a distância
        pilhaDeRotas.pushRotas(rotasFinal);
        pilhaDeRotas.pushDistania(distanciaFinal);

      }
    }
  }

  return rotaFinal;
};

module.exports = calculoRota;
