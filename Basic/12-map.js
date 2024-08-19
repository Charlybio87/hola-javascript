// objeto map que me puede decir de el y de sus metodos?

//Declaro
let myMap = new Map()

console.log(myMap);

//Inicia
myMap = new Map([
    ["name","Charly"],
    ["email","charlybio87@outlook.com"],
    ["age", 25],
])
console.log(myMap);

// Metodos y propiedad

// set (actualizar o agregar)
myMap.set("alias", "Charly Bio")
myMap.set("name","Charly Dev") //reemplaza nombre anterior
console.log(myMap);

// get (obtener)

console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// has (comprobar)

console.log(myMap.has("surname"));
console.log(myMap.has("age"));

// delete

myMap.delete("email");
console.log(myMap.has('email')); 
console.log(myMap);

// método map.keys() ?
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries())

const keysIterator = myMap.keys()
console.log(keysIterator.next().value);
console.log(keysIterator.next().value);
console.log(keysIterator.next().value);

// size
console.log(myMap.size);

const miArreglo = Array.from(myMap);
console.log(miArreglo);
const miObjeto = Object.fromEntries(myMap);
console.log(miObjeto);

// clear
myMap.clear()
console.log(myMap);
