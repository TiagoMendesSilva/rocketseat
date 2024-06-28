/*Variáveis*/
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const imgCookieClick = document.querySelector("#imgCookieClick")
const imgCookieOpenedClick = document.querySelector("#imgCookieOpenedClick")

imgCookieClick.addEventListener('click', handleImgCookieClick)
imgCookieOpenedClick.addEventListener('click', handleImgCookieOpenedClick)


function handleImgCookieClick(){
    toggleScreen()
}

function handleImgCookieOpenedClick(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    
}


