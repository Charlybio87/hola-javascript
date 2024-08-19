// clases

class Person {
    constructor(name, age,alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

// Sintaxis

let person = new Person ("char",37,"crahydev")
let person2 = new Person ("char",37,"crahydev")

console.log(person);
console.log(person2);

console.log(typeof person);

//Valores por defecto

class DefaultPerson {
    constructor(name="Nombre por defecto", age=0,alias="Si alias") {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person3 = new DefaultPerson('chraly',37)
console.log(person3);

// Acceso de propiedades

console.log(person3.alias);
console.log(person3["alias"])

person3.alias="Chralydev"

console.log(person3.alias);

// Valores en clases

class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    walk() {
        console.log("La persona camina")
        
    }

}

let person4 = new PersonWithMethod("char",37,"chardev")
person4.walk()

// Propiedades privadas

class PrivatePerson {
    #bank
    constructor(name, age, alias, bank) {
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
    }
    pay(){
        this.#bank
    }
}
let person5 = new PrivatePerson("char",37,"chardev","IBM23123123123")

// No podemos acceder
// console.log(person5.#bank);
// person5.bank = "new asdkljaslkajsf"// bank no es #bank
console.log(person5);


// Setters y Getters

class GetSetPerson {
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias,bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){
        return this.#name
    }
    set bank(newback){
        this.#bank = newback
    }
    get name(){
        return this.#name
    }
}
person6 = new GetSetPerson("carlos",20,"dev","bank12312321")

console.log(person6);
console.log(person6.name);

person6.bank = "new bank23214566589"