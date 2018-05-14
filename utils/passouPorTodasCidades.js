
const passouPorTodasCidades = (rotaAtual, cidadesMapa) => {
  let cidadeContidas = Object.keys(rotaAtual).sort().toString();
  let cidadesTotais = cidadesMapa.sort().toString();
  
  if (cidadeContidas === cidadesTotais)
    return true;
  return false;
}

module.exports = passouPorTodasCidades;