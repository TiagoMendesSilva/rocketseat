alert("Iremos realizar as operações matemáticas com dois números")

let firstNumber = Number(prompt("Digite o primeiro número"))
let secondNumber = Number(prompt("Digite o segundo número"))

const soma = firstNumber + secondNumber
const subtracao = firstNumber - secondNumber
const multiplicacao = firstNumber * secondNumber
const divisao = firstNumber / secondNumber
const resto = firstNumber % secondNumber

alert(`A soma dos números é igual à ${soma}`)
alert(`A subtração dos números é igual à ${subtracao}`)
alert(`A multiplicação dos números é igual à ${multiplicacao}`)
alert(`A divisão dos números é igual à ${divisao}`)
alert(`O resto da divisão dos números é igual à ${resto}`)
