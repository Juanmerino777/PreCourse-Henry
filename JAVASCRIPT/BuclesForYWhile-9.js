/*
// Bucles o (ciclos de iteración) : Permiten realizar acciones que son de carácter repetitivo de manera
// sencilla.


// BUCLE FOR: Por un lado, el Bucle For es utilizado cuando sabemos con antelación la cantidad máxima
// exacta de pasos que queremos ejecutar. Esta cantidad máxima de pasos se sitúa como segundo
// parámetro entre los paréntesis.

// var suma = 0;

// for (var i=0 ; i<10 ; i++){
//  suma = suma+1;
//  console.log(suma);
// }

// for (var i=0 ; i<5 ; i++){
//  suma = suma+i;
//  console.log("variable de iteración:" , i);
// }
// console.log('variable suma:' , suma);



// BUCLE WHILE: es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar
// hasta finalizar la ejecución. Por ejemplo, podríamos pensar en una función que siga 
//agregando +1 hasta llegar a un número determinado.    

// while (suma < 3){
//  suma = suma +1;
//  console.log(suma);
// }

//EXPRESIÓN SWICH:  La expresión Switch evalúa una condición. Compara su valor con una instancia de caso
// y ejecuta declaraciones asociadas a ese caso, así como las declaraciones en los casos que siguen.

switch ("Papayas") {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

console.log("¿Hay algo más que te quisiera consultar?");



//BUCLE DO WHILE : (hacer mientras) ejecuta una sentencia especificada, hasta que la condición de
// comprobación se evalúe como falsa. La condición se evalúa después de ejecutar la sentencia
// dando como resultado que la sentencia especificada se ejecuta al menos una vez.

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

*/