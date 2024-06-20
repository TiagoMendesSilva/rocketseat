/**
 * Jogo da adivinhação
    Apresenta a mensagem ao usuário:
    "Adivinhe o número que estou pensando? Entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e 
    verificar se o número digitado é o mesmo que número gerado pelo sistema.

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente!"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt("Adivinhe o número que estou pensando? Entre 0 e 10");

let randomNumber = Math.round(Math.round() * 10);

let xAttempts = 1;

while(Number(result) != randomNumber){
    result = prompt("Erro, tente novamente:")
    xAttempts++
}

if(xAttempts == 1){
    alert(`Parabéns! O número que eu pensei foi ${result} e você adivinhou o número em ${xAttempts}tentativa.`)
} else {
    alert(`Parabéns! O número que eu pensei foi ${result} e você adivinhou o número em ${xAttempts}tentativas.`)

}
