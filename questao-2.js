function fibonacci(valor) {
  if (valor <= 0) return 'Número inválido. Insira um valor maior ou igual a 1.'

  let sequenciaFibonacci = [0, 1]
  let primeiroNumero = 0
  let segundoNumero = 1

  for (let index = 2; index < valor; index++) {
    let proximoNumero = primeiroNumero + segundoNumero
    sequenciaFibonacci.push(proximoNumero)
    primeiroNumero = segundoNumero
    segundoNumero = proximoNumero
  }

  const pertenceASequencia = sequenciaFibonacci.includes(valor)

  if (pertenceASequencia) {
    console.log(`O número ${valor} pertence a sequência Fibonacci.`)
  } else {
    console.log(`O número ${valor} NÃO pertence a sequência Fibonacci.`)
  }

  return sequenciaFibonacci
}

console.log(fibonacci(13))
