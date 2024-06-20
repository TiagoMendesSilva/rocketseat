/*
    Crie uma lista de pacientes 

    Cada paciente dentro da lista, deverá conter:
        - nome;
        - idade;
        - peso;
        - altura;

    Escreva a lista contendo o nome dos pacientes
*/

const patients = [
    {
        name: "Tiago",
        idade: 39,
        peso: 80,
        altura: 180,
    },
    {
        name: "Caetano",
        idade: 1,
        peso: 12,
        altura: 85,
    },
    {
        name: "Itamara",
        idade: 39,
        peso: 70,
        altura: 170,
    },

]

let namePatients = []
for(patient of patients){
    namePatients.push(patient.name)
}

alert(namePatients)

/*
Outra forma
*/

let names = []
for(index = 0; index < patients.length; index++){
    names[index] = names.push(patients[index].name)
}
console.log(names)