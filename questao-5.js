function inverterTexto(texto) {
  let textoInvertido = ''

  for (let index = texto.length - 1; index >= 0; index--) {
    textoInvertido += texto[index]
  }

  return textoInvertido
}

console.log(inverterTexto('bruno meneses'))
