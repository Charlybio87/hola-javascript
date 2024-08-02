// Funciones

//Simple
function myFunc() {
    console.log("Hola, Funcion!!");
}

for (let i = 0 ; i < 5 ; i++) {
    myFunc();
}

//con Parametros
function myFuncWithParams(name) {
    console.log(`Hola, ${name}!!`);
}

myFuncWithParams("Charly")

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

//PARAMETROS
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

//Retorno de valores
function mult(a, b){
    return a * b
}
let result = mult(2,10)
console.log(result)

//Funciones anidades
function extern() {
    console.log("Funcion Externa");
    function intern() {
        console.log("Funcion Interna");
    }
    intern()
}
extern()
// intern() Error: fuera de scope

//Funciones de orden superior
function applyFunc(func, param) {
    func(param)
}
applyFunc(myFunc4,"Funcion de Orden Superior")

// forEach

myArray = [1,2,3,4,5]
myArray.forEach(function (value) {
    console.log(value);
})

myArray.forEach(value => console.log(value))