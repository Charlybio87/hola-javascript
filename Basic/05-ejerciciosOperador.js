/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética?
// let a = 10;
// let b = 15;
// let c = 20;
// console.log(a+b);
// console.log(a-c);
// console.log(c*b);
// console.log(c/a);
// console.log(b%a);
// console.log(b**c);
// a++
// console.log(a);
// b--
// console.log(b);

// let suma = 5 + 3;
// let resta = 10 - 4;
// let multiplicacion = 7 * 2;
// let division = 12 / 3;
// let modulo = 17 % 5;
// let potencia = 2 **3;
// let incremento = 5;
// incremento++;
// let decremento = 11;
// decremento--;
// Imprimir los resultados
// console.log("Suma: ", suma);
// console.log("Resta: ", resta);
// console.log("Multiplicación: ", multiplicacion);
// console.log("División: ", division);
// console.log("Módulo: ", modulo);
// console.log("Potencia: ", potencia);
// console.log("Incremento: ", incremento);
// console.log("Decremento: ", decremento);

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas?
// let a = 10;
// let b = 15;
// let c = 2;

// a += 5;
// console.log("Suma c/ asignacion: ", a);
// b -= 3;
// console.log("Resta c/ asignacion: ", b);
// c *= 2;
// console.log("Multiplicacion c/ asignacion: ", c);
// a /= 4; // (a = 15)
// console.log("Division c/ asignacion: ", a);
// b %= 7; // (b = 12)
// console.log("Modulo c/ asignacion: ", b);
// c **= 2; // (c = 4)
// console.log("Exponente asignación:", c);

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
// a = 10;
// console.log(10 > 5);
// console.log(10 >= `5`);
// console.log("11"==11);
// console.log('Casa'!="casa");
// console.log(a === 10);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
// b = 5;
// console.log(10 < 5);
// console.log('5' > 5);
// console.log('5' != 5);
// console.log(b === "5");
// console.log(`A`==`a`);

// 5. Utiliza el operador lógico and
/* Tabla: and (&&)
    0 | 0 --> 0
    0 | 1 --> 0
    1 | 0 --> 0
    1 | 1 --> 1
 */
// let a = 10;
// console.log(a === '10' && a > '' );
// console.log(a**2 < a && a >= a);
// console.log(true && false );
// console.log(a > 5 && a == '10');

// 6. Utiliza el operador lógico or
/* Tabla: or (||)
    0 | 0 --> 0
    0 | 1 --> 1
    1 | 0 --> 1
    1 | 1 --> 1
 */
// let a = 10;
// let b = 6;

// console.log(NaN || false);
// console.log("" || b < a);
// console.log( b != a  || 0n);
// console.log('pepe'==="pepe" || "juan"==`juan`);

// 7. Combina ambos operadores lógicos
// Orden de precedencia

// let a = 10;
// let b = 6;

// console.log(0n && a < b || a === 10 && true);
// console.log(false && (a < b || a === 10) && true);

// 8. Añade alguna negación
// let a = 10
// console.log(!a);
// console.log(!(true&&false));
// console.log(!(a < 15 || a === 10 && true));

// 9. Utiliza el operador ternario

// let edad = prompt("Ingrese su edad: ")
// alert("Ud es: "
//     + (edad >= 18 ? "mayor de edad" : "menor de edad")
// )

const dolorCuello = true
dolorCuello ? console.log("No vamos a entrenar") : console.log("vamos a entrenar");

console.log(true ? 1 : 2);
console.log(false ? 1 : 2);


// 10. Imprimir combinando operadores aritméticos, de comparáción y lógicas?
let num1 = 10;
let num2 = 5;

console.log("¿Es " + num1 + " mayor que " + num2 + "? " + (num1 > num2));
console.log("La suma de " + num1 + " y " + num2 + " es " + (num1 + num2));
console.log("La resta de " + num1 + " y " + num2 + " es " + (num1 - num2));

let edad = 25;
let nacionalidad = "Argentino";

console.log("¿Es mayor de edad y mexicano? " + (edad >= 18 && nacionalidad === "Mexicana"));
console.log("¿Es menor de edad o extranjero? " + (edad < 18 || nacionalidad !== "Mexicana"));

num1 = 10;
num2 = 5;

console.log("¿La suma de " + num1 + " y " + num2 + " es mayor que 15? " + ((num1 + num2) > 15));
console.log("¿La resta de " + num1 + " y " + num2 + " es menor que 5? " + ((num1 - num2) < 5));

num1 = 10;
num2 = 5;
let num3 = 15;

console.log("¿La suma de " + num1 + " y " + num2 + " es mayor que " + num3 + " y " + num1 + " es mayor que " + num2 + "? " + (((num1 + num2) > num3) && (num1 > num2)));
console.log("¿La resta de " + num1 + " y " + num2 + " es menor que " + num3 + " o " + num1 + " es menor que " + num2 + "? " + (((num1 - num2) < num3) || (num1 < num2)));