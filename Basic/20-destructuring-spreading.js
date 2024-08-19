myArray = [1,2,3,4]

let person = {
    name: "char",
    age: 37,
    alias: "charly"
}

let myValue = myArray[1]
console.log(myValue);

let myName = person.name
console.log(myName);

// Desestructuracion

// sintxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4]= myArray
console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);

// Sintaxis arrays con valores predefinidos

let [myValue5 =0, myValue6 =0, myValue7 =0, myValue8 =0, myValue9 =0]= myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

