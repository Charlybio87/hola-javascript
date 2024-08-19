/* Operaciones Aritmeticas*/
// let a = 5
// let b = 10
// console.log(a + b);
// console.log(a ** b);
// console.log(a++);
// b--
// console.log(b);
// console.log(a % b);

/* Operadores de asignacion */

// let myVariable = 2
// console.log(myVariable)
// myVariable += 2 // Suma con asignación
// console.log(myVariable)
// myVariable -= 2 // Resta con asignación
// console.log(myVariable)
// myVariable *= 2 // Multiplicación con asignación
// console.log(myVariable)
// myVariable /= 2 // División con asignación
// console.log(myVariable)
// myVariable = 7
// myVariable %= 2 // Módulo con asignación
// console.log(myVariable)
// myVariable = 3
// myVariable **= 2 // Exponente con asignación
// console.log(myVariable);

a = 10
b = 6

/* operaciones comparacion */

// console.log(a > b)
// console.log(a < b)
// console.log(a <= b)
// console.log(a >= b)
// console.log(b == 6)
// console.log(b == "6") //igualdad por valor
// console.log(a == a)
// console.log(a === a)  //igualdad por identidad (por tipo y valor)
// console.log(b === 6)
// console.log(b === "6")
// console.log(b != 6)
// console.log(b !== "6")
// console.log(0 == false)
// console.log(1 == false)
// console.log(2 == false)
// console.log(0 == "");
// console.log(0 == " ")
// console.log(0 == '')
// console.log(0 == "Hola")
// console.log(0 === "")
// console.log(undefined == null)
// console.log(undefined === null)


/* Truthy y Falsy */

// and (&&)
// console.log( 5 > 10 && 15 > 20) // --> (false and false) = false
// console.log( 5 > 10 && 15 < 20) // --> (false and true) = false
// console.log( 5 < 10 && 15 > 20) // --> (true and false) = false
// console.log( 5 < 10 && 15 < 20) // --> (true and true) = true
// console.log( 5 < 10 && 15 > 20 && 30 > 40) // -->  ((true and false) and false) = false

// or
// console.log( 5 > 10 || 15 > 20) // --> (false or false) = false
// console.log( 5 > 10 || 15 < 20) // --> (false or true) = true
// console.log( 5 < 10 || 15 > 20) // --> (true or false) = true
// console.log( 5 < 10 || 15 < 20) // --> (true or true) = true
// console.log( 5 > 10 || 15 > 20 || 30 > 40) // --> ((false or false) or false) = false

// console.log( 5 < 10 && 15 > 20 || 30 < 40) // --> ((true and false) or true) = true
// // 

// not (!)

// console.log(!( 5 > 10 && 15 > 20))
// console.log(!( 5 < 10 || 15 < 20))

const isRaining = true
isRaining ? console.log("esta lloviendo") : console.log("no esta lloviendo");