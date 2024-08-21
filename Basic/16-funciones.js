// Funciones

// Simple

for (let i = 0 ; i < 5 ; i++) {
    myFunc();
}

function myFunc() {
    console.log("Hola, Funcion!!");
} // function es HOISTING puede ser llamda antes de ser declarada

// con Parametros
myFuncWithParams("Charly")

function myFuncWithParams(name) {
    console.log(`Hola, ${name}!!`);
}


// funciones anonimas
const myFunc2 = function (name) {
    console.log(`Hola, ${name}!!`)
}

myFunc2("Charlydev")

// arrow functions
const myFunc3 = (name) => {
    console.log(`Hola, ${name}!!`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}!!`)

myFunc3("Hola, Charlydev")
myFunc4("Hola, Charlydev")

// PARAMETROS
function sum(a,b) {
    console.log(a + b);
}

sum(5,15)
sum(5)
sum()

function defaultSum(a=0,b=0) {
    console.log(a + b);
}
//por defecto
defaultSum()
defaultSum(5)
defaultSum(15,20)
defaultSum(b = 15)

// Retorno de valores
let result = mult(2,10)
console.log(result)

function mult(a, b){
    return a * b
}

// Funciones anidades
function extern() {
    console.log("Funcion Externa");
    function intern() {
        console.log("Funcion Interna");
    }
    intern()
}
extern()
// intern() Error: fuera de scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}
// const myFunc4 = (name) => console.log(`Hola, ${nam}!!`)e

applyFunc(myFunc4,"Funcion de Orden Superior")

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))