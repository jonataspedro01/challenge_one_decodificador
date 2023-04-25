function criptografar(palavra) {
    const chave = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    let criptografado = "";
    for (let letra of palavra) {
      if (letra in chave) {
        criptografado += chave[letra];
      } else {
        criptografado += letra;
      }
    }
    return criptografado;
  }

function criptografarPalavra() {
    let palavra = document.getElementById("texto__campo").value.toLowerCase();
    let criptografado = criptografar(palavra);
    document.getElementById("resultado").innerHTML = criptografado;
  }

function descriptografar(criptografado) {
    const chave = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    let descriptografado = "";
    let index = 0;
    while (index < criptografado.length) {
      let sub = criptografado.substring(index, index+5);
      if (sub in chave) {
        descriptografado += chave[sub];
        index += 5;
      } else {
        descriptografado += criptografado.charAt(index);
        index += 1;
      }
    }
    return descriptografado;
  }

function descriptografarPalavra() {
    let criptografado = document.getElementById("texto__campo").value.toLowerCase();
    let descriptografado = descriptografar(criptografado);
    document.getElementById("resultado").innerHTML = descriptografado;
  }