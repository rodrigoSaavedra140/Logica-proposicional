
const screen = document.querySelector(".screen");

const regex = /(¬\(([^()]|\([^()]*\))*\)|¬[^()]|\(([^()¬]|\([^()]*\))*\)|[^()¬]+)/g;
var parenthesis = '';

function appendToScreen(input){
    //condicion para agregar los parentesis o otro signo, dependiendo si ya se abrio o cerro anteriormente
    if(input === 's'){
        if (parenthesis === '(' ){
            screen.value += ')';
            parenthesis = ')';
        }else {
            if(!isNaN(screen.value[screen.value.length -1])){
                screen.value += '*';
            }
            screen.value += '('
            parenthesis = '(';
        }
    }else{
        screen.value += input; 
    } 
}

function clearScreen() {
    screen.value = "";
    
    parenthesis = '';
}
// limpia solo el ultimo caracter del input
function delScreen (){
    screen.value = screen.value.slice(0,-1);
}

function equal (){
    divideProposition(screen.value);
}

function divideProposition (input){
    const a = input.match(regex);
    console.log(a);
    // hacer una funcion que separe la proposicion en proposiciones reducidas en un array
}
