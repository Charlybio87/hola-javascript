// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// let i = 0;

// for (i = 1; i <= 20; i++) {
//     console.log(`${i}. ${i}`);
// }

// while (i <= 19) {
//     i++;
//     console.log(`${i}. ${i}`);
// }

// do {
//     i++;
//     console.log(`${i}. ${i}`);
// } while (i  <= 19);

// const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (const numero of numeros) {
//     console.log(`${numero}. ${numero}`);
// }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// let resultado = 0
// for (let aux = 0; aux < 101 ; aux++ ){
//     resultado += aux;
//     if(aux === 100){
//     console.log(`El resultado es: ${resultado}
// `);
//     }
// }
// let aux1 = 0
// let resultado1 = 0
// while (aux1 < 100) {
//     aux1++
//     resultado1 += aux1
//     if(aux1 === 100){
//         console.log(`El resultado es: ${resultado1}`)
//     }
// }

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// let aux2 = 0
// let resultado2 = 0

// do {
//     aux2++
//     if (aux2 % 2 === 0) {
//         console.log(`# par: ${aux2}`);
        
//     }
// } while (aux2 < 50);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// let names = ["John","Alice","Bob","Eve","Charlie","David","Frank","George","Helen","Ivan"];

// let i = 1 
// names.forEach(nombres => {
//     console.log(`${i++}. ${nombres}`);
// });

// for (let i = 0; i < names.length; i++) {
//     console.log(`${i+1}. ${names[i]}`)
// }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
// let cadenaTexto = 'Escribe un bucle que cuente el númerö de vocales en una cadena de cadenaTexto'

// let contador = 0
// let aux = cadenaTexto.toLowerCase()
// aux = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
// console.log(aux);// elimina elemento especiales de las vocales

// for (let i = 0; i < aux.length; i++) {
//     if (aux[i]==='a'||aux[i]==='e'||aux[i]==='i'||aux[i]==='o'||aux[i]==='u') {
//         contador++
//     }
// }
// console.log(`El número de vocales en la cadena es: ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// const arrayNumeros = [1, 2, 3, 4, 0, 6, 7, 8, 9, 10]
// let producto = 1
// let aux = 0 
// for (let i = 0; i < arrayNumeros.length; i++) {
//     if (arrayNumeros[i] != 0) {
//         aux = arrayNumeros[i]
//         producto = producto * aux
//     }
//     console.log(producto);
    
// }

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// let numero = 0
// let resultado = 0
// do {
//     resultado = numero * 5;
//     console.log(`${numero} x 5 = ${resultado}`)
//     numero++
// } while (numero <= 10)

// 8. Usa un bucle para invertir una cadena de texto

// let texto = '8. Usa un bucle para invertir una cadena de texto'
// let textoInvertido = ''
// for (let i = texto.length - 1; i >= 0; i--) {
//     textoInvertido += texto[i]
// }
// console.log(textoInvertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// let numeros = []
// let aux = 0
// for(let i = 0; i <= 12; i++){
//     if(numeros.length < 2){
//         numeros.push(i)
//     }else{
//         aux = numeros[numeros.length - 1] + numeros[numeros.length - 2]
//         numeros.push(aux)
//     }
// console.log(numeros);
// }

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const arrayNumeros = [14, 7, 18, 5, 11, 16, 3, 9, 15, 2, 19, 6, 10, 13, 8]
const newArrayNumMaoyres = []

arrayNumeros.forEach(numero => {
    if (numero >= 10 ) {
        newArrayNumMaoyres.push(numero)
    }
})
console.log(newArrayNumMaoyres);