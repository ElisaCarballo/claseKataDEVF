// function sumatoria(num1, num2){
//     var total = num1 + num2;
//     console.log('La suma total es: ' + total);
// }
// sumatoria(7,41);

// -------------- Resta

// function resta(a,b,c){
//     var resultado= a-b-c;
//     console.log(resultado)
// }
// resta(10,23,56);

//-------- Multiplicar

// console.log('2x0=', 2+0);
// console.log('2x1=', 2+0);
// console.log('2x2=', 2+0);
// console.log('2x3=', 2+0);
// console.log('2x4=', 2+0);
// console.log('2x5=', 2+0);
// console.log('2x6=', 2+0);
// console.log('2x7=', 2+0);
// console.log('2x8=', 2+0);

//--- Function Multiplicar

// function tablaDelDos(){
//     for(i=0; i<11; i++){
//         console.log('2 x', i, '=', 2* i);
//     }
// }
// tablaDelDos();


//------- function return

// function suma(num1, num2, num3){
//     var total = num1 + num2 + num3;
    
//     return 'El resultado Elisa es:' + total
// }
// var valorsuma = suma (9,8,6);
// alert (valorsuma);

//------------ Funtion saludar

// function saludar(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;
//     console.log('Hola mi nombre es: ' + this.nombre + ' y tengo:' + this.edad + ' años')
// }

// saludar('Elisa', 42);

// function MayordeEdad(edad){
//     if(edad>18){
//         console.log('El usuarios es mayor de Edad');
//     }
//     else{
//         console.log('El usuario es menor de edad');
//     }
//     if (edad>100){
//         console.log('El usuario es mayor de edad y un fregon');
//     }
// }
// MayordeEdad (15);

//------------ Numeros Naturales

// var numerosNaturales = (numero) =>{
//     for(var i=1; i<numero; i++){
//         console.log(i)
//     }
// }
// numerosNaturales(20);

//---------------


// TAREAS

// 1. Escribe una funcion llamada evaluate que reciba como parametro un número retorno lo siguiente:
//"POSITIVO" si el numero es positivo.
//"NEGATIVO" si el numero es negativo.
//"CERO" si el numero es cero.

// 2. Escribe una funcion de ingresar:
//cualquier letra del alfabeto y verifique.
//si es una vocal o consonante.

// 3. Realizar un juego de piedra, papel, tijera, en el que cual el usuario ingrese:
//su nombre y la opcion que quiera.

// 4. realizar una funcion con la cual determinen si una cadena de texto es palindromo o no.


//1------------------------------------------------------------------------------------------------------------------------------------
// function evaluate(number){
//     estado=""
//     if (number>0) {
//         estado="positivo"
//     } else if(number<0) {
//         estado="negativo"
//     }else if(number==0){
//         estado="cero"
//     }
//     return estado
// }
// console.log(evaluate(9))


//2------------------------------------------------------------------------------------------------------------------------------------
// const comienzaConVocal = (cadena) => {
//     if (!cadena || cadena.length <= 0) return false;

//     // Convertir a minúscula porque las vocales con las que la compararemos están
//     // en minúscula
//     let cadenaEnMinuscula = cadena.toLowerCase();
//     let primerCaracter = cadenaEnMinuscula.charAt(0);

//     // Vamos a buscar si el carácter está en este arreglo
//     const vocales = ["a", "e", "i", "o", "u"];
//     const consonante = ["b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

//     // indexOf devuelve -1 si no encuentra el carácter en el arreglo
//     // y si lo encuentra, devuelve el índice o posición, pero eso no nos importa ahora
//     if (vocales.indexOf(primerCaracter) === -1) {
//         return false;
//     } else {
//         return true;
//     }
// }


// // Esto es para probar
// const palabras = [
//     "d","o","j","h","a","e","f"
// ];

// palabras.forEach(palabra => {
//     console.log("¿%s es vocal? %s", palabra, comienzaConVocal(palabra));
// });


// ---------------------

//2. Function Ingresar

// function Ingresar(Vocal, Consonante){
//     var vocal = a,e,i,o,u;
//     Var consonante = b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z;

//     this.vocal = vocal;
//     this.consonante = this.consonante;
//     console.log('Hola esa letra es: ' + this.vocal )
//     }
    
//     Ingresar(a);

// 3-------------------------------------------------------------------------------------------------------------------------------------
//   console.log(palindromeChecker("Ali tomo tila"));
//   console.log(palindromeChecker("Amad a la dama"));
//   console.log(palindromeChecker("otra cosa"));

// function checker(input){
//     var choices = ["rock", "paper", "scissor"];
//     var num = Math.floor(Math.random()*3);

//     let computerChoice = choices[num];
//         let result

//     switch(choicesObject[input][computerChoice]){
//         case 'win':
//         result = "YOU WIN";
//         break;
//       case 'lose':
//         result = "YOU LOSE";
//         break;
//       default:
//         result = "DRAW";
//         break;
//     }
//         console.log(result);
//         document.getElementById('result').textContent = result;
// }
// let choicesObject = {
//     'rock' : {
//       'rock' : 'draw',
//       'scissor' : 'win',
//       'paper' : 'lose'
//     },
//     'scissor' : {
//       'rock' : 'lose',
//       'scissor' : 'draw',
//       'paper' : 'win'
//     },
//     'paper' : {
//       'rock' : 'win',
//       'scissor' : 'lose',
//       'paper' : 'draw'
//     }
//   }

// function playRound(playerSelection, computerSelection){ 
    
// //If player win

// if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")){
//     return `The player won! ${playerSelection} beats ${computerSelection}`;  

// }  //If computer win
// else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")){
//     return `The computer won!  ${computerSelection} beats ${playerSelection}`;  
// }   // If its a tie
// else {
//     return "It´s a tie!";
// }
// }

// function choice (){

// playerSelection = prompt("Que opcion elegis? Rock, Paper or Scissors?");
// playerSelection = playerSelection.toLowerCase();
// computerSelection = computerPlay();
// console.log(`The computer chose: ${computerSelection}`);
// console.log(`You chose: ${playerSelection}`);

// } 

// function computerPlay() {
// const options = ["scissors" , "rock" , "paper"];
//     return options[Math.floor(Math.random()* options.length)];
// }


// let playerSelection;
// let computerSelection;

// for (let i = 0 ; i < 5; i++){
// choice();   
// console.log(playRound(playerSelection, computerSelection));
// }


//------------------------

// 4. Escribiendo la función palindrome checker en javascript .

// function palindromeChecker(str) {
//     const strReversed = str.split("").reverse().join("");

//     return strReversed === str ? "es palindromo" : "no es palindromo";
// }
// console.log(palindromeChecker("oso"));
// console.log(palindromeChecker("hola"));
// console.log(palindromeChecker("rotor"));

// //   Añadir expresión regular para eliminar espacios en blanco del string
// function palindromeChecker(str) {
//     const newStr = str.replace(/[\W_]/g, "").toLowerCase();
//     const strReversed = newStr.split("").reverse().join("");

//     return newStr === strReversed ? "es palindromo" : "no es palindromo";
// }

//4. 

var texto = prompt ('Ingresa una cadena de texto: ');

// lectura de la cadena de texto que inicia de izquierda a derecha

function palindromo (texto){

    var textosinespacios = [];
    var indice = 0;
    var textofinal;

    for(var i=0; i<texto.length; i++){
        if(texto [i] == ' '){

        }
        else{
            textosinespacios[indice] = texto [i];
            indice ++;
        }
    }
//Lectura de texto de derecha a izquierda
    var indiceAlreves = (textosinespacios.length - 1);

    for (var i=0; i<textosinespacios.length; i++){
        if(textosinespacios [i] != textosinespacios[indiceAlreves]){
            textofinal = 'La oración no es un palindromoo';
            
        }else
        {
        textofinal = 'La oración es un palindromo'
    }
    }
    return textofinal;
}

var texto = prompt ('Ingresa una cadena de texto: ');
alert (palindromo(texto));