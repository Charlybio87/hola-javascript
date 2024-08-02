//set

let mySet = new Set()
// let mySet2 = {} ❌

mySet = new Set("carlos","alberto","ribas",37,"carlos@look.com")
console.log(mySet)

mySet = new Set(["carlos","alberto","ribas",37,"carlos@look.com"])
console.log(mySet)

//metodos comunes

//add y delete
mySet.add("carlosdev@look.com")

console.log(mySet);

mySet.delete("carlos")
console.log(mySet)

console.log(mySet.delete("alberto"));
console.log(mySet.delete("4"));
console.log(mySet);

//has

console.log(mySet.has("carlos"));
console.log(mySet.has("alberto"));

//size

console.log(mySet.size);

//convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray);

//convertir un array a set

mySet = new Set(myArray)
console.log(mySet);

//los set no admite duplicado

mySet.add("carlosdev@look.com")
mySet.add("CarlosDev@look.com")
console.log(mySet);