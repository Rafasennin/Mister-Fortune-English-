
var mainMensage = document.querySelector(".main__mensage");
var switchCommand = "próximo";
var switchText = "";
var commandsInEnglish = ["Now multiply by 2...", "Add more " +  secretNumber, "Now divide by 2...", "Minus the first number you thought on...", "Say: 'result'"];
const p2 = document.querySelector(".p2");


function switchLanguageEnglish(){
    mainMensage.innerText = "In this game, it will guess the number you are thinking...";
    textCommad.textContent = "First step: think about a number...";
    p2.textContent = "Whenever you are ready, say: 'next'";
    switchCommand = "next";
    switchText = "Sorry, can you repeat please...";    
}

switchLanguageEnglish()


function switchLanguagePortuguese(){
    mainMensage.innerText = "Neste jogo, adivinharei o número que você está pensado...";
    textCommad.textContent = "Primeiro passo: pense em um número...";
    p2.textContent = "Quando estiver pronto diga : 'próximo'";
    switchText = "Desculpe, pode repetir por favor...";
}


function finalResultEnglish(){
    document.body.innerHTML = `<div class="result__box"><h3 class="h3__result">The final result is:</h3>  <h3 class="h3__result number__result">${result}
    </h3></div> <p class="p2">If you want to play again, say: <h3>"restart"</h3></p>`;
    }




