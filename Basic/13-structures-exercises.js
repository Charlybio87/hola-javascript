// 1. Crea un array que almacene cinco animales
const zoo = new Array();
zoo[0] = "Lion";
zoo[1] = "Tiger";
zoo[2] = "Bear";
zoo[3] = "Monkey";
zoo[4] = "Elephant";
console.log(zoo);

// 2. Añade dos más. Uno al principio y otro al final
    // zoo.push('fox')
    // zoo.push('Wolf')
    // console.log(zoo);
zoo.unshift('fox')
zoo.push('Wolf')
console.log(zoo);

// 3. Elimina el que se encuentra en tercera posición
console.log(zoo.splice(2,1))
console.log(zoo);

// 4. Crea un set que almacene cinco libros
const libros = new Set()
libros.add("Harry Potter")
libros.add("El Señor de los Anillos")
libros.add("El Código Da Vinci")
libros.add("El Padrino")
libros.add("El Nombre del Viento")
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add('El Principito')
libros.add('El Nombre del Viento')
console.log(libros);

// 6. Elimina uno concreto a tu elección
console.log(libros.delete('El Señor de los Anillos'))
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
const mes = new Map(
    [[1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"], [5, "Mayo"], [6, "Junio"], [7, "Julio"], [8,"Agosto"], [9, "Septiembre"],[10, "Octubre"], [11, "Noviembre"], [12, "Diciembre"]]
)
console.log(mes);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mes.has(5) ? "Existe" : "No Existe")

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mes.set(12,['Diciembre','Enero','Febrero'])
console.log(mes.get(12))
console.log(mes);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const arrayNumeros = [1, 2, 3, 4, 5, 6]
console.log(arrayNumeros);
// [ 1, 2, 3, 4, 5, 6 ]

const numerosSet = new Set (arrayNumeros)
console.log(numerosSet)
// Set(6) { 1, 2, 3, 4, 5, 6 }

const numerosMap = new Map()
console.log(numerosMap.set('Numeros',numerosSet))
// Map(1) { 'Numeros' => Set(6) { 1, 2, 3, 4, 5, 6 } }

