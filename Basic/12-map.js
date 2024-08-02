// map

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
myMap.set("alias", "Charly Bio");
myMap.set("name","Charly Dev")
console.log(myMap);

// get (obtener)

console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// has (comprobar)

console.log(myMap.has("surname"));
console.log(myMap.has("age"));

// delete

myMap.delete("email");
console.log(myMap);

// key
console.log(myMap.keys());
console.log(myMap.values());

// size
console.log(myMap.size);
// clear

myMap.clear()
console.log(myMap);
