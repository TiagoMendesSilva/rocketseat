alert("Para saber se foi aprovado, siga as instruções abaixo:")

let nameStudent = prompt("What is your name?")
let firstTestGrade = prompt("Qual a nota da primeira prova?")
let secondTestGrade = prompt("Qual a nota da segunda prova?")
let thirdyTestGrade = prompt("Qual a nota da terceira prova?")

firstTestGrade = Number(firstTestGrade)
secondTestGrade = Number(secondTestGrade)
thirdyTestGrade = Number(thirdyTestGrade)


let average = (firstTestGrade + secondTestGrade + thirdyTestGrade) / 3;
average = average.toFixed(2)

if(average >= 6){
    alert(`Congratulations! ${nameStudent}, you were approved. The average was equal to the ${average}.`)
} else {
    alert(`Sorry ${nameStudent}, unfortunately you were not approved! The average was equal to the ${average}. But you will have an opportunity to pass the recovery test. Do not give up.`)
}

