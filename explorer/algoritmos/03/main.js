let listNumbers = [1, 2, 3, 4, "2", "Olá", true]

for(let item of listNumbers){

    console.log(`Item: ${item} é do tipo ${typeof item}`)
    if(typeof item == "number"){
        console.log(`Item: ${item} é do tipo Number`)
    } else if (typeof item == "string"){
        console.log(`Item: ${item} é do tipo String`)
    } else {
        console.log(`Item: ${item} é do tipo Boolean`)
    }
}   

