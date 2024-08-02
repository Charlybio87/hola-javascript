// loops o bucles

// for
// for (let i = 0; i<5; i++) {
//     console.log((i+1)+ `. Hola ${i}`);
// }

// const numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i< numbers.length; i++){
//     console.log(`Elemento: ${numbers[i]}`);
// }

// while
let i = 0;
while (i < 6) {
    console.log((i+1)+ `. Hola ${i}`);
    i++;
}
// do while
i = 7;
do {
    console.log((i+1)+ `. Hola ${i}`);
    i++;
} while (i < 6);

// for of

myArray = [1,2,3,4]

mySet = new Set("carlos","alberto","ribas",37,"carlos@look.com")

myMap = new Map([
    ["name","Charly"],
    ["email","charlybio87@outlook.com"],
    ["age", 25],
])
myString = "Hola, JavaScript!"

for (let valor of myArray) {
    console.log(valor);
}
for (let valor of mySet) {
    console.log(valor);
}
for (let valor of myMap) {
    console.log(valor);
}
for (let valor of myString) {
    console.log(valor);
}

// break y continue
for (let i = 0; i < 10; i++) {
    if (i == 5){
        continue
    }else if (i== 6) {
        break
        }
        console.log((i+1)+ `. Hola ${i}`);
}