/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(num1,num2){
    return (num1 +num2)
}
const sum = function (a,b){
    return a+b
}
const suma1 = (a, b) => a + b;


console.log(`Resultado de la suma de 10 + 20 = ${suma(10,20)}`)

console.log(`La suma de 5 + 7 = ${sum(5,7)}`)

console.log(`La suma de 5 + 9 = ${suma1(5,9)}`);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function maxArray(numArray) {
    let aux = 0
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > aux ) {
            aux = numArray[i]
        }
    }
    return aux
}

const numArray = [1,5,8,7,4,35,6,1,9,8,10]

console.log(`El mayor numero del arreglo es: ${maxArray(numArray)}`);

let aux = 0
numArray.forEach( numMayor => {
    if (numMayor>aux) {
        aux = numMayor
    }
})
console.log(`El numero mayor del arreglo es: ${aux}`);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numVocales(vocaArray) {
    let contador = 0
    for (let i = 0; i < vocaArray.length; i++){
        if (vocaArray[i] === 'a' || vocaArray[i] === 'e' || vocaArray[i] === 'i' || vocaArray[i] === 'o' || vocaArray[i] === 'u') {
            contador++
        }
    }
    return contador
}

const vocaArray = 'Crea una función que reciba un string y devuelva el número de vocales que contiene'

console.log(`El string contiene ${numVocales(vocaArray)} vocales`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const stringMayuscula = function mayusculas(arrayMayusc) {
    let nuevoArray = []
    for (let i = 0; i < arrayMayusc.length; i++) {
        nuevoArray.push(arrayMayusc[i].toUpperCase())
        }
        return nuevoArray
}
const arrayString = ['c', 'h', 'a', 'r', 'l', 'y', ' ', 'R', 'i', 'b', 'a', 's', '!']
console.log(stringMayuscula(arrayString))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado