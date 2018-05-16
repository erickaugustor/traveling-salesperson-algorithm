const calcularDistancia = (rotaAtual) => {
  let retorno = rotaAtual.reduce((acc, valor) => {
    acc = acc + Object.values(valor);
  });

  return retorno
}

module.exports = calcularDistancia;