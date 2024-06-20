let students = [
    {
        name: "Tiago",
        testOne: 5,
        testTwo: 8
    },
    {
        name: "Itamara",
        testOne: 5,
        testTwo: 9
    },
    {
        name: "Caetano",
        testOne: 7,
        testTwo: 9
    },
    {
        name: "Leonardo",
        testOne: 5,
        testTwo: 10
    }
]

function calculateAverage(student){
    return ((student.testOne + student.testTwo) / 2).toFixed(2)
}

function printMessage(student){
    let avg = calculateAverage(student)

    let approvedOrNotApproved = avg >= 7
    ? `Congratulations! ${student.name}, you were approved.` 
    : `Sorry ${student.name}, unfortunately you were not approved!`

    alert(`The average student ${student.name} is: ${avg} \n ${approvedOrNotApproved}`)

}

for(student of students){
    printMessage(student)
}
