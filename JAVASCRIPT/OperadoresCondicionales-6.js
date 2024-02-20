//OPERADORERES CONDICIONALES: Estos nos permiten asignar diferentes respuestas a diferentes casos.
// if, else if, else.

function viajar(destino){
  if (destino === 'Brasil') {
    console.log('Gire a la IZQUIERDA');
  } else if (destino === 'Argentina') {
    console.log('Gire a LA DERECHA');
  } else {
    console.log(`No se puede viajar a ${destino}`);
  }
}

viajar('Brasil');
viajar('Argentina');
viajar('Colombia');


//Segundo Ej:

function puedeManerjar(edad) {
  if (edad >= 18) {
    console.log(true);
  }else {
    console.log(false);
  }
}