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
  
  let rotasCidadeOrigem = estruturaMapa.adjList.get(cidadeOrigem);
  // Array de viznhos da cidade de origem

  rotasCidadeOrigem.sort(
    (a, b) => (a.distancia < b.distancia) ? 1 : 0
  );
  // Ordenando pela distancia

  let distanciaTotal = 0;

  rotasCidadeOrigem.forEach(objCidade => {
    pilhaDeRotas.pushRotas([objCidade]);
    pilhaDeRotas.pushDistania(objCidade.distancia);
  });

  while(rotaFoiEncontrada && pilhaDeRotas.isEmpty) {
    console.log('*****')
    console.log('\npilhaDeRota', pilhaDeRotas.rotas)

    
    let rotaAtual = pilhaDeRotas.popRotas();
    let distanciaAtual = pilhaDeRotas.popDistancia();
    let posicaoUltimaRota = rotaAtual.length - 1;

    let ultimaRota = rotaAtual[posicaoUltimaRota];

    let cidadeAtual = ultimaRota['vizinho'];

    let igualDestino = cidadeAtual == cidadeOrigem;
    // Verifica se destino final é a cidade de Origem

    if (igualDestino && (posicaoUltimaRota+1) == totalDeCidades && passouPorTodasCidades(rotaAtual, cidadesDoMapa)) {
      
      if (distanciaAtual < menorDistancia) {
        menorDistancia = distanciaAtual;
        rotaFinal = rotaAtual;
        rotaFoiEncontrada = true;
      }

    } else {
      let proximasRotas = estruturaMapa.adjList.get(cidadeAtual);

      if (proximasRotas.length > 1) {
        // Tem mais que um vizinho?
      
        // Ordenando vizinhos pela distancia
        proximasRotas.sort(
          (a, b) => (a.distancia < b.distancia) ? 1 : 0
        );

        console.log('\nRotaAtual', rotaAtual, '\n')

        console.log('ultimaRota', ultimaRota)

        // Para cada vizinho
        proximasRotas.forEach(rota => {
          // Verificar se a diatancia de tudo + distancia da cidade
          let distanciaFinal = distanciaAtual + rota.distancia;

          let cidadeEhAntiga = (rotaAtual.length > 1) ? rota.vizinho == rotaAtual[rotaAtual.length-2].vizinho : rota.vizinho == cidadeAtual;
          // let cidadeEhOrigem = rota.vizinho == cidadeOrigem;
          // let cidadeEhAntiga = rota.vizinho == rotaAtual[rotaAtual.length-2].vizinho;     
          
          // console.log((distanciaFinal < menorDistancia), !cidadeEhVizinho , !cidadeEhOrigem )
        
          // console.log('cidadeAntiga' , (rotaAtual.length > 1) ? rotaAtual[rotaAtual.length-2].vizinho :  cidadeAtual)


          if ((distanciaFinal < menorDistancia) && !cidadeEhAntiga && !temCidadeRepetida(rotaAtual, cidadeOrigem)) {
            console.log('entrou if')

            // Se é menor e a cidade não é a de origem
            let rotasFinal = [];
            rotasFinal.push(...rotaAtual, rota);

            // Colocar na pilha as rotas e a distância
            pilhaDeRotas.pushRotas(rotasFinal);
            pilhaDeRotas.pushDistania(distanciaFinal);            

          } else {
            console.log('entrou else ')
          }
          //console.log('saiu')
          // Se é maior, descartar
        });      

      } else {
        // Só tem um vizinho?
        let distanciaFinal = proximasRotas[0].distancia + distanciaAtual;
        let rotasFinal = [];
        rotasFinal.push(...rotaAtual, proximasRotas[0].vizinho);

        // Colocar na pilha as rotas e a distância
        pilhaDeRotas.pushRotas(rotasFinal);
        pilhaDeRotas.pushDistania(distanciaFinal);

      } 
    }
  }

  return rotaFinal;
};

module.exports = calculoRota;
