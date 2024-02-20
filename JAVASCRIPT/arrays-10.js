//ARREGLOS (ARRAYS): Son objetos globales en javascript. Nos permiten almacernar y gestionar información.
// Los arrelglos pueden almacenar todo tipo de datos y a su vez tambien pueden contener arreglos internos.

//CONCEPTOS IMPORTANTES:
//ELEMENTOS: Son aquellos datos que guardamos dentro del array.
//INDICE (index): Representa la posición en la que se guarda el elemento. Siempre comenzamos desde la posición 0.

/*

//1. ARRAY :contenedor con datos que podemos modificar.

// var array1 = [3524, 3545, 35, [13, 34, 45, 5, 67], 435];
// INDICES    =   0     1    2           3             4
// los indices comienzan en cero.




// FORMAS DE RECORRESR UN ARRAY.-------------------------------------------------------------------------------------------------


// ARRAY POR INDICE:------

// console.log(var nombre [indice]);
// muestra el contenido del indice.


// RECORRER ARRAY CON FOR:--------

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]); // se imprimir por consola. Mostrando la informacin completa de un array.
} 


// CAMBIAR INFO DE ARRAY.----------

var arrayP = [3,2,3,,67,89,8,6]
var arrayp[3] = [nuava infomacion]
console.log(arrayp)//muestra info vuevo.



// BUSCAR STRING MAS LARGO---------------

var contenido = ['hla', 'juan', 'como estas', 'trabajo'];

var masLarga = contenido[0];

for( var i=0;i < contenido.length;i++){
  if(masLarga.length <= contenido[i].length){
    masLarga = contenido[i]
  }
  return masLarga;
}


// BUSCANDO NUMERO SIMETRICO----------
var array = [1435,78345,3673,11611,45754];// son aquellos que son iguales a su reverso.

var comvertidor = Array.toString();
var longitud = comvertidor.length;

for (var i = 0; i < Math.floor(longitud / 2); i++) {
  if (comvertidor[i] === comvertidor[longitud -1 -i]) {
    return false;
    
  }
  return true;
}

 
//VER ARRAY INTERNOS:-------

//for, if, metodo isArray() y for interno.
// recordar array es un objeto dentro de javascript.

for (var i = 0; i < array1.length; i++) {
  //en este caso usamos un if para encontrar un array dentro de del mismo.
  if( Array.isArray(array1[i]) ){
    //otro for con otra (var) que muestre todo el contenido interno.
    for(var j = 0; j< array1[i].length; j++){
      console.log(array1[i][j]);// se imprimir por consola. Mostrando la informacion de arrray primcipal y internos.
    }
  }
}


// encontrar datos repetidos.--------------

var array = [1,2,3,4,5,4,7,98,6]

 for(var i = 0; i < array.length; i++){
  for( let j = i + 1; j < array.length; j++){
    if (array[i] === array[j])return array[i]; 
  }
 }




//MULTIPLICAR ARRAY:-------

var array2 = [1, 2, 3, false, undefined, "texto", true];
for(var i=0; i<array2.length; i++){
  console.log(array2[i] + 2);//en false y booleano= remplaza, string = concatena y undefined = NaN, 
}


// ARRAY AL REVES:-------

var array4 = [24,5,76,68,7,8,9,546,90,]

for(var i = array4.length -1; i >= 0 ; i--){
  console.log(array4[i]);
}






// METODOS EN ARRAY: ---------------------------------------------------------------------------------------

var array3 = [23,54,22,69,66];


// METODOS DE INSERTAR Y ELIMINAR DATOS:---------------------------------------------


// unshift() : agrega info al comienzo.-----------------

console.log('antes del unshift',array3);
array3.unshift(2222222);
console.log('despues del unshift',array3);



// Metodo shift() : Elimina info al comienzo.------------------

console.log('antes del shift()',array3);
array3.shift(127);
console.log('despues del shift()',array3);



// push() : agrega info al final,---------------------

console.log('antes del push()',array3);
array3.push(2222222);//agrega contenido nuevo y muestra todo el array actualizado.
console.log('despues del push()',array3);


console.log('antes del push()',array3);
array3.push();//push sin contenido muestra la cantidad de indice(tamaño del array)
console.log('despues del push()',array3);



//Metodo pop() : Elimina info al final. y muestra lo eliminado.----------------

console.log('antes del pop()',array3);
array3.pop();// no se nesecita argumentos.
console.log('despues del pop()',array3);


//RESUMEN:-----
1.El método push () añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.

2.El método pop ()  elimina y devuelve el último elemento de un arreglo.

3.El método unshift () agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

4.El método shift ()  elimina y devuelve el primer elemento de un arreglo.






// METODOS DE RECORRIDO:--------------------------------------------------------------------------------


//CALLBACK: (llamada hacia tras) --------------------------------


// funcion de sumar.----

function llamada( a, b ){
  return a + b;
}


// funcion de llamada .----

function mofdificadora(cb){
  var resultado = cb(5, 1);
  return resultado;
}

// mostrar resultado.----

var resultadoOperacion = mofdificadora(llamada);
console.log(resultadoOperacion);


//Metodo forEach(funcion) : Imprime los elementos por separado.-----------------

var numeros = [1,2,3,4,5,6,7,8,9];

//Imprimimos por consola cada uno de los elementos por separado.
numeros.forEach((num) => {
  console.log(num)
});

//Imprimir elelmento cumplan la condicion. 
numeros.forEach((num)=>{
  if(num === 3){
    console.log(num)
  }
});



// Metodo map() : modifica elemento, reemplaza dato por undefined y regresa un nuevo arreglo. ---------------------------

var sumarUno =  numeros.map((num) => {
  return  num + 1;
});
console.log(sumarUno);



// Metrodo filter() : elimina elemento ----------------------- 
var arregloFilter = [1,2,3,4,5,6,7];

// funcion de condicion.
function filtrar(elemento){
  if(elemento !== 5 )return elemento;
}

// variable contenedor de condicion.
var resultado = arregloFilter.filter(filtrar);

// imprimimos por consola
console.log(arregloFilter);
console.log(resultado);



// Metodo sort() : ordena los elementos de un array.--------------------------

var palabra = [1,2,3,53,56,6,787,5];
var j = palabra.sort();
console.log(j);


// Metodo includes() : Verifica elelmento. regresando true o false.---------------

var verificarElemento = array3.includes(564);
console.log('resutado verdadero', verificarElemento);

var verificarElemento = array3.includes(5643546);
console.log('resutado falso', verificarElemento);



// Metodo every() : verifica cumplimiento de condicion.-----------

var metodoEvery = array3.every((num) =>{
  return num >10;  //Preguntamos si todos los elementos son mayores a 10.
});
console.log(metodoEvery);




//Metodo split(0) : Comvierte un string en array:----------------------------------------

var palabra = 'Juas';// variable a modificar.


var comvertirAString =  palabra.split(''); //usamos comillas para separar las letras.

console.log('Comvertida a array',comvertirAString);

comvertirAString.pop();  // pop() eliminar ultimo elemento.

comvertirAString.push('n'); // push() inserta elemento correspondiente.

console.log(' palabra Arreglada',comvertirAString); //Lo imprimimos.




//Metodo join() : comvertir array a string.------------------------

var comvertirAString = comvertirAString.join('');
console.log('palabra Comvertida a strin',comvertirAString);



//Metodo indexOf() : Muestra ubicacion o (indice) de un elemento-------------------------

var elementos = [1,2,3,4,5,6,7,8];

//verificamos en que indice esta el numero 5.
var encontrar = numeros.indexOf(5);//resultado =4
console.log(encontrar);



 Metodo splice() : Elimina elemento mediante la posicion pasandole dos parametros--------------
el primero es la posicion o (indice) y el segundo es el numero de elementos que queremos eliminar

var frutas = ['Manzana', 'Fresa', 'Banana']
console.log('antes de splice', frutas);
var elelmentoEliminado = frutas.splice(1, 1); // eliminado [Fresa].
console.log('Elemento eliminado',elelmentoEliminado);
console.log('despues del splice', frutas);



//Metodo slice() : Copia los elementos de un array -----------------------------
var frutas = ['Manzana', 'Fresa', 'Banana']
var copiaArray = frutas.slice()
console.log(copiaArray);




//BUCLE

//recorriendo un arrray.

//Declaramos una variable que contenga un arreglo.

/* 1.Inicializamos un bucle for y dentro de los parentecis.
2.Creamos la variable iterador. 
3.Definimos el periodo de ejecucion del bucle.
4.declaramos que sucedera con la variable iterador

var arr = [1,2,3,4,5,6];
for(var i=0; i < arr.length; i++){
  console.log(arr[i]);
}


//Creando una funcion que contenga un string como parametro.

function encontrarLetraP(String){
  var letras = String.split('');

  for (let i = 0; i < letras.length; i++) {
    if(letras[i] === 'p'){
      console.log('si contiene a p');
    }
    
  }
}
encontrarLetraP('Javascript');
encontrarLetraP('hola mundo');


// agregando contenido a un array con while.

var arr = [];
while(arr.length < 5){
  arr.push('BOOM');
}
console.log(arr);
*/