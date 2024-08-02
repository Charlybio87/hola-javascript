//Arrays

let myArray = []
let myArray2 = new Array()

console.log(myArray);
console.log(myArray2);

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)
console.log(myArray);
console.log(myArray2);


myArray = ["carlos","alberto","ribas",37,true]
myArray2 = new Array("carlos","alberto","ribas",37,true)
console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3)
myArray2[0] = "Carlos"
// myArray2[1] = "Alberto"
myArray2[2] = "Ribas"

console.log(myArray2);

myArray = []
myArray[2] = "Carlos"
// myArray[0] = "Alberto"
myArray[1] = "Ribas"

console.log(myArray);

//metodos comunes
myArray = []
myArray.push("Carlos")
myArray.push("Alberto")
myArray.push("Ribas")
myArray.push("37")
console.log(myArray);

myArray.pop() //elimina el ultimo elemento
console.log(myArray);

console.log(myArray.pop())

console.log(myArray)

myArray.shift()
console.log(myArray);
console.log(myArray.shift());
console.log(myArray);

myArray.unshift("Carlos","Ribas")
console.log(myArray);

//length

console.log(myArray.length);

// clear
// myArray = []
myArray.length = 0 //alternativa
console.log(myArray);

//slice
myArray.push("carlos","alberto","ribas",37)

let myNewArray = myArray.slice(1,2)
console.log(myNewArray);
console.log(myArray);

//splice

myArray.splice(1,2)
console.log(myArray);

myArray = ["carlos","alberto","ribas",37]

myArray.splice(1,2,"New Input")
console.log(myArray);