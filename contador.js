//const button = document.getElementById('Cliquebutao');
//const clickCountDisplay = document.getElementById('Contagem-de-cliques');

// Incia a contagem

//let clickCount = 0;

// add um evento de clique
//button.addEventListener('click', () => {
    //clickCount++;

    //clickCountDisplay.textContent = clickCount;
//});

//Add um evneto de clique para o resetar
//resetButton.addEventListener('click', () => {
    
    //clickCount = 0;

    //updateDisplay();
//});

var contador = 0;
let resultado = document.querySelector('section#resultado');

function cliquebutao(){
    contador ++;
    resultado.innerHTML = `<p>O contador está com <mark>${contador}</mark></p>`
}

function resetarbotao(){
    contador = 0;
    resultado.innerHTML = `<p>O contador está com <mark>${contador}</mark></p>`
}
