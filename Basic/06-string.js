

let myName = "charly"
let myAge = "36"
let greeting = "Hola, " + myName + "!!"
console.log(greeting);
console.log(typeof greeting);

//longitud

console.log(greeting.length);

// acceso a caracteres

console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);
console.log(greeting[15]);

// metodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("charly"));
console.log(greeting.indexOf("CHARLY"));
console.log(greeting.includes("charly"));
console.log(greeting.slice(0,14));
console.log(greeting.replace("charly", "charlydev"));


// template literals
let message = `hola este esmi 
curso de js`
console.log(message);

console.log(`hola, ${myName}`);

let email = "carlos@gmial.com"
console.log(`hola, `);