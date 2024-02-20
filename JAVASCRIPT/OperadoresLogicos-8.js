//Operadores logicos:

//AND (&&) : Conjunción : Permite juntar operaciones para que se cumplan todas en simultaneo

function mayorYMenor(num) {
  if (num > 5 && num < 10 )console.log(true + " AND");
  else console.log(false + " AND");
}
mayorYMenor(7);
mayorYMenor(2);


function mayorYMenorYPar (num){
  if (num > 5 && num < 10 && num % 2 === 0 )console.log(true + " AND");
  else console.log(false + " AND");
}
mayorYMenorYPar(7);
mayorYMenorYPar(8);


// OR  (||) : disyunción : solo acepta que se cumplan una de las condiciones propuestas.

function operadorOr(str){
  if (str === "Juan" || str.length < 2) console.log(true + " OR");
  else console.log(false + " OR");
}

operadorOr("Juan");
operadorOr("Javascript");
operadorOr("j");



// NOT (!): negación : Transforma un valor en su opuesto.

function negación(permiso){
  //if (permiso) console.log("Tiene permiso");
  //if (!permiso) console.log("Tiene permiso");
  if (permiso !== true) console.log("Tiene permiso " + "OR");
};

negación(true);
negación(false);



//condición compleja:

function condicionCompleja(num){
  if (num > 9 && num % 2 === 0 || num === 3) console.log(true + " NOT");
  else console.log(false);
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);