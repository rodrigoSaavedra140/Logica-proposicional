const screen = document.querySelector(".screen");

function appendToScreen(input){
    screen.value += input; 
}

function clearScreen() {
    screen.value = "";
    hist.innerText = "";
    parenthesis = '';
}
// limpia solo el ultimo caracter del input
function delScreen (){
    screen.value = screen.value.slice(0,-1);
}