/*Variáveis*/
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

/*eventos*/
const imgCookieClick = document.querySelector("#imgCookieClick")
const imgCookieOpenedClick = document.querySelector("#imgCookieOpenedClick")

const fortune = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  ]


imgCookieClick.addEventListener('click', handleImgCookieClick)
imgCookieOpenedClick.addEventListener('click', handleImgCookieOpenedClick)
document.addEventListener('keydown', handlekeyDown);



function handleImgCookieClick(){
    toggleScreen()
    pickFortune()
}

function handleImgCookieOpenedClick(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    
}

function pickFortune(){
    let allFortunes = fortune.length
    let randomNumberMessage = Math.floor(Math.random()*allFortunes);
    screen2.querySelector("p").innerText = `${fortune[randomNumberMessage]}`
}

function handlekeyDown(event){
    if(event.key == 'Enter' && screen1.classList.contains('hide')){
        handleImgCookieOpenedClick()
    } else if( event.key == 'Enter' && screen2.classList.contains('hide')){
        handleImgCookieClick()
    }
}

