
const passouPorTodasCidades = (rotaAtual, cidadesDoMapa) => {
  //coloca em ordem e coloca numa string
  let cidadesTotais = cidadesDoMapa.sort().toString();

  // Pega os nomes das cidades
  let cidadesDaRota = [];
  rotaAtual.forEach(cidade => cidadesDaRota.push(cidade.vizinho));

  // Coloca em ordem e coloca numa string
  cidadeContidas = cidadesDaRota.sort().toString();

  if (cidadeContidas === cidadesTotais)
    return true;
  return false;
}

module.exports = passouPorTodasCidades;


      // console.log(pilhaDeRotas.rotas)

      /*rotasCidadeOrigem.forEach(arrayCidades => {
        let distanciaTotal = 0;
        arrayCidades.forEach(objCidade => {
          console.log(objCidade)
          distanciaTotal += objCidade.distancia;      
        });
        pilhaDeRotas.pushRotas(arrayCidades);
        pilhaDeRotas.pushDistania(distanciaTotal);
      });*/


      /*if (distanciaCaulada < menorDistancia) {
        let rotasFinal = [];
        rotasFinal.push(...rotaAtual, rota);
        pilhaRotas.push(rotasFinal);
      }*/