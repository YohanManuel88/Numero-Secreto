let numeroSecreto = 0;
let numIntentos = 0;
let listaNumerosJugados = [];
let intentosMax = 5;

function asignarTextoElemento(elemento,texto){
    tituloElemento = document.querySelector(elemento);
    tituloElemento.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*intentosMax)+1;  
    console.log(numeroGenerado);
    console.log(listaNumerosJugados);
    if (listaNumerosJugados.length == intentosMax) {
        asignarTextoElemento('p', 'Ya se alcanzo el limite de intentos');
    } else{    
        if (listaNumerosJugados.includes(numeroGenerado)) {
            return generarNumeroSecreto();        
        } else{
            listaNumerosJugados.push(numeroGenerado);
            return numeroGenerado;
        }     
    }    
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.querySelector('input').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('h1','¡Bien!')
        asignarTextoElemento('p',`Acertaste en ${numIntentos} ${(numIntentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');                
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        numIntentos++;
        clearBox();
    }        
    return;
}

function clearBox(){
    document.querySelector('#valorUsuario').value = '';
}

function defaultSet(){
    asignarTextoElemento('h1','Juego del número secreto')
    asignarTextoElemento('p',`Indica un número del 1 al ${intentosMax}.`)
    numeroSecreto = generarNumeroSecreto();
    numIntentos = 1;
    
}

function newGame(){
    clearBox();
    defaultSet();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
defaultSet();
console.log(numeroSecreto); 

