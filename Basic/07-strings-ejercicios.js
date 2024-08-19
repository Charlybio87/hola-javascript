// 1. Concatena dos cadenas de texto

let text1 = `Hola, Buen Dia!`
let text2 = `Que tenemos para hoy!?`
console.log(`${text1} ${text2}`)

// 2. Muestra la longitud de una cadena de texto
console.log(text2.length);
console.log(text1.length);

// 3. Muestra el primer y último carácter de un string
console.log(text1[0]);
console.log(text1[14]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(text1.toUpperCase());
console.log(text2.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let text3 = `Tenemos que escribir
un texto
en varias
lineas...`
console.log(text3);

// 6. Interpola el valor de una variable en un string
let nombre = `Charly`
let edad = 37

console.log(`Hola ${nombre}! 
tu edades de ${edad} años?`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones?
console.log(text2.replaceAll(' ','-'));
console.log(text2.replace(/\s+/g,'-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(text2.indexOf('para'));

// 9. Comprueba si dos strings son iguales?
(text2 == text1) ? console.log("Son iguales ambos string") : console.log("Son distinto ambos string");

// 10. Comprueba si dos strings tienen la misma longitud
(text1.length === text2.length) ? console.log('Longitud de string es IGUAL') : console.log('Longitud de string es DISTINTA')

