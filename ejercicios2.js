/* 
LOOP DE PARES
Debés crear una función llamada loopDePares que reciba como parámetro un número 

y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 

En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
*/

function loopDePares(number) {
  for (let i = 0; i <= 100; i++) {

    //operadores ternarios : () ? if : else

    (number + i) % 2
      ? console.log(i)
      : console.log("El numero " + (number + i) + "es par");
  }
}

loopDePares(1);

/* LOOP DE IMPARES CON PALABRA
Debés crear una función llamada loopDeImpares 

que reciba como parámetro un número y una palabra 

y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 

Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
 */

/* function loopDeImpares(number, string) {
  for (let i = 0; i <= 100; i++) {
    if ((number + i) % 2 != 0) {
      console.log(string);
    } else {
      console.log(i);
    }
  }
} */

function loopDeImpares(number, string) {
  for (let i = 0; i <= 100; i++) {
    (number + i) % 2 !== 0 ? console.log(string) : console.log(i);
  }
}

loopDeImpares(3, "plataforma5");

/* 

CARACTER DEL MEDIO

Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro 
y devuelva sus caracteres del medio.

Ejemplo: 

middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter(“hola”) debe retornar “ol”
middleCharacter(“cosas”) debe retornar “s”

*/

// metodo .slice(): devolver una copia de una parte de mi array dentro de un nuevo array empezando por el inico hasta el fin.

 function middleCharacter(string) {
  if (string.length % 2 != 0) {
    return string.slice(string.length / 2, string.length / 2 + 1);
  } else {
    return string.slice(string.length / 2 - 1, string.length / 2 + 1);
  }
} 

/* function middleCharacter(string) {

    //metodo .charAt(): El método charAt() de String devuelve en un nuevo String el carácter

  if (string.length % 2 != 0) {
    return string.charAt(string.length / 2);
  } else {
    return (
      string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2)
    );
  }
} */

/* function middleCharacter(str) {

  if (str.length % 2 != 0) {
    return str[str.length / 2 - 0.5];
  } else {
    return str[str.length / 2 - 1] + str[str.length / 2];
  }
}

middleCharacter("plataforma5"); */

/* 
MINIMA SUMA
Debés crear una función llamada `minSum` 
que reciba un arreglo de números desordenados  
y devuelva la suma entre los dos números más chicos.

Ejemplo: 
minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
minSum([1, 10, 43, 900, 20, 8]) debe retornar 9
 */

//metodo .sort(): ordenar los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
//function minSum (){}

/* let minSum = function (array){

array = array.sort((a,b) => a - b )
return array[0] + array[1]

} */

let minSum = function (array) {
  //seteamos valores iniciales

  let min = array[0];
  let min2 = array[1];

  if (array[0] > array[1]) {
    min = array[1];
    min2 = array[0];
  }

  //iterar y comprobar si hay numeros menores dentro de nuestro arreglo

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i + 1] < min2) {
      if (array[i + 1] < min) {
        min2 = min;
        min = array[i + 1];
      } else {
        min2 = array[i + 1];
      }
    }
  }


  // retornando la suma entre los dos numeros menores

  return min + min2
};

minSum([1, 10, 43, 900, 20, 8]);
