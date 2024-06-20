alert("Iremos realizar as operações matemáticas com dois números")

let firstNumber = Number(prompt("Digite o primeiro número"))
let secondNumber = Number(prompt("Digite o segundo número"))

const soma = (firstNumber,secondNumber) => {
    return firstNumber + secondNumber
}
const subtracao = firstNumber - secondNumber
const multiplicacao = firstNumber * secondNumber
const divisao = firstNumber / secondNumber
const resto = firstNumber % secondNumber
const isPair = (numberOne, numberTwo) => {
    if((soma(numberOne,numberTwo) % 2) == 0){
        return "par"
    } else {
        return "Ímpar"
    }
}

const checkNumberEquals = (firstNumber,secondNumber) => {
    if(firstNumber == secondNumber){
        return "iguais"
    } else {
        return "diferentes"
    }
}


alert(`A soma dos números é igual à ${soma(firstNumber,secondNumber)}`)
alert(`A subtração dos números é igual à ${subtracao}`)
alert(`A multiplicação dos números é igual à ${multiplicacao}`)
alert(`A divisão dos números é igual à ${divisao}`)
alert(`O resto da divisão dos números é igual à ${resto}`)
alert(`A soma dos números é igual à ${soma(firstNumber,secondNumber)}, é um número ${isPair(firstNumber,secondNumber)}`)
alert(`Os números são ${checkNumberEquals(firstNumber,secondNumber)}`)