const calcularDistancia = (rotaAtual) => {
  let somaDistancia;
  let arrayDistancia = [];

  rotaAtual.forEach((distancia) => arrayDistancia.push(Object.values(distancia)));

  return arrayDistancia.reduce((acc, valor) => {
    acc = acc + valor;
  });

}

module.exports = calcularDistancia;