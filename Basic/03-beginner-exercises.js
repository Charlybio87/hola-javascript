// 1. Escribe un comentario en una línea

// Aprendiendo JavaScript 

// 2. Escribe un comentario en varias líneas

/*
Fundamentos con MoureDev 
Diplomatura de UTN
desarrollo web full stack
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let sinValor;
let isDev = true;
let edad = 37;
let myName = "Carlos Ribas";
let valorNulo = null;
let mySymbol = Symbol();
let myBigInt = 8172398342342345345n


// 4. Imprime por consola el valor de todas las variables
console.log(sinValor);
console.log(isDev);
console.log(edad);
console.log(myName);
console.log(valorNulo);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof sinValor);
console.log(typeof  isDev);
console.log(typeof  edad);
console.log(typeof  myName);
console.log(typeof  valorNulo);
console.log(typeof  mySymbol);
console.log(typeof  myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
isDev = false;
edad = 40;
myName = "Santino Ribas Ruiz";
mySymbol = Symbol("funny");
myBigInt = 77777777777777777777777n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
isDev = "Desarrollador";
edad = "Treinta y siete";
myName = 123;
mySymbol = Symbol("nuevo");
myBigInt = 7777n

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const unDefined = undefined; // Tipo undefined
const boleano = true; // Tipo boolean
const numero = 42; // Tipo number
const cadena = "Hola, mundo"; // Tipo string
const nulo = null; // Tipo null
const simbolo = Symbol("miSimbolo"); // Tipo symbol
const bigInt = 1234567890123456789012345678901234567890n; // Tipo BigInt

// 9. A continuación, modifica los valores de las constantes

// TypeError: Assignment to constant variable.
// unDefined = 42; // Error, no se puede reasignar una constante
// boleano = false; 
// numero = 50;
// cadena = "Hola, mundo 2";
// nulo = nul1;
// simbolo = Symbol("nuevoSimbolo");
// bigInt = 77777777777777777777777n;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser