// CALLBACK (llamada hacia tras): son funciones que reciben otras funciones por parametro.



//1er ejemplo:
/*
var devuelvoUsuario = function(){
  return 'camilo';
}
var devuelvoSaludo = function(){
  return 'Hola';
}
var saludar = function(cb1, cb2){
  return cb1() + ' ' + cb2();
}

var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);

*/


//2do. ejemplo:

var retornoFrase = function(comida){
  return 'Hoy quiero comer:' + comida;
}

var funcionHablar = function(comida, cb){
  return cb(comida);
}

var resultadoDeLlamada = funcionHablar(' pizaa', retornoFrase);
console.log(resultadoDeLlamada);