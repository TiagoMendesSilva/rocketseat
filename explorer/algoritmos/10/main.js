/* Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima:

IMC = peso / (altura * altura)

- Pacientes X possui o IMC de: Y
- Crie uma função para fazer o cálculo de IMC

*/

const patients = [
    {
        name: "Tiago",
        age: 39,
        weight: 80,
        height: 180,
    },
    {
        name: "Caetano",
        age: 1,
        weight: 12,
        height: 85,
    },
    {
        name: "Itamara",
        age: 39,
        weight: 70,
        height: 170,
    },

]

function calculateIMC(weight, height){
    return (weight / (height/100) ** 2).toFixed(2);

}

function printMessage(patient){
    return `Paciente ${patient.name} possui o IMC de: ${calculateIMC(patient.weight, patient.height)}`
}

for(patient of patients){
    let message = printMessage(patient)
    alert(message)
}

