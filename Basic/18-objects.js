//Objetos

//Sintaxis

let person = {
    name: "Charly",
    age: 37,
    alias: "Charlybio87"
} 

/*Acceso a propiedad*/

// Notacion punto
console.log(person.name);

// Notacion de corchetes
console.log(person["name"]);

// Modificacion de propiedades
person.name = "Charly Ribas";
console.log(person.name);

console.log(typeof(person.age));
person.age = "37"
console.log(person.age);
console.log(typeof(person.age));

// Eliminacion de propiedades

delete person.age
console.log(person);

// Nueva propiedad
person.email = "carlosbio87@gmail.com"
person["age"] = 37
console.log(person);

// MEtodos (funciones)

let person2 = {
    name: "Charly",
    age: 37,
    alias: "Charlybio87",
    walk : function(){
        console.log("La persona camina.");
    }
}
let person3 = {
    name: "Charly",
    age: 37,
    alias: "Charlybio87",
    walk : function(){
        console.log("La persona camina.")
    },
    job: {
        name: "Dev",
        exp: 2,
        work: function(){
            console.log(`La persona de ${this.exp} años trabaja.`)            
        }
    }
}
console.log(person3);

console.log(person3.name);
console.log(person3.age);
console.log(person3.job.name);
person3.job.work()

// Igualdad de objects
person = {
    name: "Charly",
    age: 37,
    alias: "Charlybio87"
} 


let person4 = {
    name: "Charly",
    age: 37,
    alias: "Charlybio87"
} 

console.log(person);
console.log(person4);

console.log(person == person4);
console.log(person === person4);

console.log(person.name === person4.name);

// Interacion

for (let key in person4){
    console.log(key + ": " + person4[key]);
}

// Funciones como Objects

function Person(name, age) { //Deberia ser una clase
    this.name = name    
    this.age = age
}

let person5 = new Person("Charly",37)
console.log(person5);
console.log(person5.name);

console.log(typeof(person5));
console.log(typeof(person4));