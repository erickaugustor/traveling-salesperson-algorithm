
const temCidadeRepetida = (rotaAtual, cidadeOrigem) => {
  let cidadeContidas = [];
  let tamanhoArray = rotaAtual.length; 

  cidadeContidas.push(cidadeOrigem);

//  if(tamanhoArray > 0) {
    let i;
    for(i = 0; i < tamanhoArray; i++) {
      // console.log(tamanhoArray)
      // console.log(cidadeContidas, "include", rotaAtual[i].vizinho)
      
      // console.log(cidadeContidas.includes(rotaAtual[i].vizinho))
      if(cidadeContidas.includes(rotaAtual[i].vizinho)){
        return true;
      } else {
        cidadeContidas.push(rotaAtual[i].vizinho)
      }
    };
//    return false;
//    }
  return false;
}

module.exports = temCidadeRepetida;
