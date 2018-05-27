const pilhaRotas = require('./estruturas/PilhaRota');

const temCidadeRepetida = require('./utils/temCidadeRepetida');
const passouPorTodasCidades = require('./utils/passouPorTodasCidades');
// const calcularDistancia = require('./utils/calcularDistancia');

const calculoRota = (estruturaMapa, cidadeOrigem) => {
  const totalDeCidades = estruturaMapa.vertices.length;
  const cidadesMapa = estruturaMapa.vertices;
  const cidadesDoMapaOrdenada = cidadesMapa.sort().toString();

  let menorDistancia = Infinity;
  let rotaFinal = null;
  let rotaFoiEncontrada = true;

  let pilhaDeRotas = new pilhaRotas();

  // Array de viznhos da cidade de origem
  let rotasVizihasCidadeOrigem = estruturaMapa.adjList.get(cidadeOrigem);

   // Ordenando pela distancia
  rotasVizihasCidadeOrigem.sort(
    (a, b) => (a.distancia < b.distancia) ? 1 : 0
  );

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

    if (igualDestino && ((posicaoUltimaRota + 1) == totalDeCidades) && passouPorTodasCidades(rotaAtual, cidadesDoMapaOrdenada)) {
      
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
          proximasRotasVizinhas.forEach(rotaVizinha => {
            // Soma a distância de tudo + distancia da cidade
            let distanciaFinal = distanciaAtual + rotaVizinha.distancia;

            let cidadeEhAntiga = (rotaAtual.length > 1) ?
              rotaVizinha.vizinho == rotaAtual[rotaAtual.length - 2].vizinho :
              rotaVizinha.vizinho == cidadeAtual;
            // let cidadeEhOrigem = rotaVizinha.vizinho == cidadeOrigem;
            // let cidadeEhAntiga = rotaVizinha.vizinho == rotaAtual[rotaAtual.length-2].vizinho;     

            if ((distanciaFinal < menorDistancia) && !cidadeEhAntiga) {
              // Se é menor e a cidade não é a de origem
              let rotasFinal = [];
              rotasFinal.push(...rotaAtual, rotaVizinha);

              // Colocar na pilha as rotas e a distância
              pilhaDeRotas.pushRotas(rotasFinal);
              pilhaDeRotas.pushDistania(distanciaFinal);
            }
            // Se é maior, descartar
          });
          console.log(pilhaDeRotas.peekRota())
          console.log('***')
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
