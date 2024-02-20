 // EJEMPLOS :
/*
var deportes = {
  conBalon : ['Futbol', 'Rugby', 'Bashetball'],
  sinBalon : ['boxeo', 'surf', 'trekking']
};

var persona = {
  nombre: 'lucas',
  edad: 25,
  Estudios: {esProgramador: true } 
};

// Dot notation ( Notación por punto (.) ):
console.log(persona.nombre);


// Asignar valor nuevo:
persona.nombre = 'Jose';
persona.edad = 55

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);




// Crear propiedad y su valor:
persona.Genero = 'Masculino';
console.log(persona.Genero);



// eliminar proiedades:
delete persona.edad;
console.log(persona);



//funciones dentro de objetos:
var misFunciones = {
  saludar: function(){
    console.log('Hola');
  }
}
misFunciones.saludar();




// Bracket notation ( notación pro corchetes ([]) ):

var ascesorios = {
  paraManos: [
    'Guantes',
    'Anillos',
    'Pulcera'
  ],
  ParaPies: [
    'Zapatos',
    'Medias',
    'Sandalias'
  ]
};
ascesorios['paraCabeza'] = ['Gorra', 'Sombrero']
console.log(ascesorios);



var comida={};
var diferentesNotaciones = function(propUno, propDos){
  // Notacion por punto (.)
  comida[propUno] = ['Hamburguesa', 'Papas fritas'];
  // Notacion por [].
  comida[propDos] = ['Frutas', 'Vegetales'];
}
diferentesNotaciones('noSaludables', 'Saludable');
console.log(comida);


// bucle FOR : Sirve para recorrer unicamente array. elementos por elementos.
// bucle FOR IN : Sirve unicamente para objetos. propiedada por propiedad.



// Objetos avanzados:------------------------------------------------------------


// METODO hasOwnProperty()=>(Tiene su propiedad):El método hasOwnProperty () nos permitirá especificar un nombre y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá verdadero o falso.


var libro = {autor:'Gabriel garcia', Genero: 'Literatura', Edicion: 'libro'}; //variable con la info.
var verificarPrppiedad = libro.hasOwnProperty('nombre');//pregunta si existe la prop(nombre) existe y la guardamos en una varible.
console.log('METODO HASOWNPROPERTY', verificarPrppiedad);//mostrar por consola.




// Metodo Keys()=> : El método Object.keys () devuelve todas las propiedades de un objeto guardado en orden dentro de un arreglo.

var libro = {autor:'Gabriel garcia', Genero: 'Literatura', Edicion: 'libro'};//variable con la info.
var mostrarTodaPropiedad = Object.keys(libro);//keys=muestra el contenido de la variable libro
console.log('METODO KEYS',mostrarTodaPropiedad);//mostrar por consola.



// FOR IN:--------------------------
var mundo = { continentes: 7, paises: 435, oceanos:7 };
for(var prop in mundo){
  console.log('propiedad: ' + prop);// mostramos propiedad.
  console.log('valor: ' + mundo[prop]);//Mostramos valor con bracket notation 
}




*/
// Metodo THIS : verifica el contexto

var mascota = {
  animal: 'Perro',
  raza: 'Overjero Aleman',
  amistoso: true,
  dueña: 'Maria Lopez',
  info: function(){
    console.log('Mi perro es un ' + this.raza);
  }
}

mascota.info();
