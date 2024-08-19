// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
// let miNombre = 'Carlos'
// let miNombre = 'c'
// let miNombre = 123
// console.log(typeof(miNombre));

// if ((miNombre !== null || miNombre === '') && miNombre.length >= 2 && isNaN(miNombre)) {
//     console.log('Tu nombre es: ' + miNombre);
// } else {
//     console.log('No es un nombre: ' + miNombre);
// }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
// let usuario = "DevCarlos"
// let contraseña = "123"

// if (usuario === "DevCarlos" && contraseña === "1234") {
//     console.log("Puede acceder");
    
// } else if (usuario === "DevCarlos") {
//     console.log("❗ Contraseña");
    
// } else {
//     console.log("❗ Usuario desconocido");
// }


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// let num = 123

// if (num > 0) {
//     console.log("Numero: +");
// } else if (num < 0) {
//     console.log("Numero: -");
// } else {
//     console.log("Numero: 0");
// }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// let edad = 19
// if (edad >=18) {
//     console.log(`
//         Puedes Votar!
//         Felicitaciones!!!
//         😎`);
// } else {
//     console.log(`
//     Lo sentimos pero no puedes votar
//     Te faltan ${18 - edad} años
//     ¡No te desanimes!
//     😖`);
// }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

// let edad = 17
// let categoria = edad >= 18 ? "adulto" : "menor"
// console.log(categoria)

// edad >= 35 ? console.log('adulto') : console.log('menor');

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// let mes = 'Marzo'
// if (mes === 'Diciembre' || mes === 'Enero' ||mes === 'Febrero' ) {
//     console.log('Verano')
// } else if (mes === 'Marzo' || mes === 'Abril' ||mes === 'Mayo') {
//     console.log('Otoño');
    
// } else if (mes === 'Junio' || mes === 'Julio' ||mes === 'Agosto') {
//     console.log('Invierno');
    
// } else if (mes === 'Septiembre' || mes === 'Octubre' ||mes === 'Noviembre') {
//     console.log('Primavera');   
// }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// if (mes === 'Enero'||mes === 'Marzo'||mes === 'MAyo'||mes === 'Julio'||mes === 'Agosto'||mes === 'Octubre'||mes === 'Diciembre') {
//     console.log(`
//         El mes de ${mes} tiene 31 díaas-`);
    
// } else if (mes === 'Abril'||mes === 'Junio'||mes === 'Septiembre'||mes === 'Noviembre') {
//     console.log(`
//         El mes de ${mes} tiene 30 díaas-`);
    
// } else {
//     console.log(`
//         El mes de ${mes} tiene 28 días o 29 dependiendo si es un año bisuesto-`);
// }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// let idioma = 'Italian'

// switch (idioma) {   
//     case "Español":
//         console.log('Hola, bienvenido');
//         break;
//     case "Ingles":
//         console.log('Hello, welcome');
//         break;
//     case "Francese":
//         console.log('Bonjour, bienvenue');
//         break;
//     case "Italiano":
//         console.log('Ciao, benvenuto');
//         break;
//     case "Aleman":
//         console.log('Hallo, willkommen');
//         break;
//     default:
//         console.log('Idioma no reconocido');
//         break;
// }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// switch (mes = 'Julio') {
//     case 'Enero':
//         console.log('Verano');
//         break;
//     case 'Febrero':
//         console.log('Verano');
//         break;
//     case 'Marzo':
//         console.log('Otoño');
//         break;
//     case 'Abril':
//         console.log('Otoño');
//         break;
//     case 'Mayo':
//         console.log('Otoño');
//         break;
//     case 'Junio':
//         console.log('Invierno');
//         break;
//     case 'Julio':
//         console.log('Invierno');
//         break;
//     case 'Agosto':
//         console.log('Invierno');
//         break;
//     case 'Septiembre':
//         console.log('Primaver');
//         break;
//     case 'Octubre':
//         console.log('Primaver');
//         break;
//     case 'Noviembre':
//         console.log('Primaver');
//         break;
//     case 'Diciembre':
//     console.log('Primavera');
//     break;
//     default:
//         break;
// }


// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes = 'Febrero') {
case 'Enero':
    console.log('tiene 31 dias');
    break;
case 'Febrero':
    console.log('tiene 28 o 29 dias');
    break;
case 'Marzo':
    console.log('tiene 31 dias');
    break;
case 'Abril':
    console.log('tiene 30 dias');
    break;
case 'Mayo':
    console.log('tiene 31 dias');
    break;
case 'Junio':
    console.log('tiene 30 dias');
    break;
case 'Julio':
    console.log('tiene 31 dias');
    break;
case 'Agosto':
    console.log('tiene 31 dias');
    break;
case 'Septiembre':
    console.log('tiene 30 dias');
    break;
case 'Octubre':      
    console.log('tiene 31 dias');
    break;
case 'Noviembre':
    console.log('tiene 30 dias');
    break;
case 'Diciembre':
    console.log('tiene 31 dias');
    break;
default:
    console.log('no es un mes valido');
    break;
}