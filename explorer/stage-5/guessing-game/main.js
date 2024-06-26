
/* variáveis*/
let randomNumber = Math.round(Math.random()*10);

let xAttempts = 1;

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2")

//Eventos
const btnTry = document.querySelector('#btnTry');
const btnAgain = document.querySelector('#btnAgain');

btnTry.addEventListener('click', handleTryClick);
btnAgain.addEventListener('click', handleAgainClick);
document.addEventListener('keydown', handlekeyDown);

//função callback
function handleTryClick(e){
    e.preventDefault() //não faça o padrão, nesse caso não envie o formulário 
    const inputNumber = document.querySelector("#inputNumber")
    if(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10){

        if(randomNumber == Number(inputNumber.value)){
            toggleScreen()
    
            /*
            document
                .querySelector(".screen2 h2")
                .innerText = `Acertou em ${xAttempts} tentativa(s)!`
            */
    
            /*ou fazer a pesquisa buscando dentro do elemento */
            screen2.querySelector('h2')
                .innerText = `Acertou em ${xAttempts} tentativa(s)!`    
        }
        inputNumber.value = ""
        xAttempts++
    } else {
        alert("Digite um número entre 0 e 10")
    }
}

function handleAgainClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random()*10);
}


function toggleScreen (){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    
}

function handlekeyDown (event){
    if(event.key == 'Enter' && screen1.classList.contains('hide')){
        handleAgainClick()
    }
}