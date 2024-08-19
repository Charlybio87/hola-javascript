//set

let mySet = new Set()
// let mySet2 = {} ❌
console.log(mySet);


mySet = new Set("carlos","alberto","ribas",37,"carlos@look.com") // S/ Corchetes
console.log(mySet)

mySet = new Set(["carlos","alberto","ribas",37,"carlos@look.com",'carlos'])

console.log(mySet)

//metodos comunes

//add y delete
// mySet.add("https://carlosdev")

// console.log(mySet);

// console.log(mySet.delete("carlos"))
// console.log(mySet);


// console.log(mySet.delete("alberto"));
// console.log(mySet.delete("4"));
// console.log(mySet);

//has
// console.log(mySet.has("carlos"));
// console.log(mySet.has("Charly"));

//size

// console.log(mySet.size);

//convertir un set a array
// let myArray = Array.from(mySet)
// console.log(`Array: ${myArray}`);

//convertir un array a set

// let mySet1 = new Set(myArray)
// console.log(mySet1);

//los set no admite duplicado

mySet.add("carlosdev@look.com")
mySet.add("carlosdev@look.com")
mySet.add("carlosdev@look.com")
mySet.add("CarlosDev@look.com")
mySet.add("CarlosDev@look.com")
mySet.add("CarlosDev@look.com")
console.log(mySet);

// const miSet = new Set([1, 2, 3]);
// miSet.add(4)
// miSet.add(4)
// miSet.add(4)
// console.log(miSet);