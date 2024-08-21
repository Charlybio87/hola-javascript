// Exportacion de modulos

export function add(a,b) {
    return a+b
}

console.log(add(5,10))

// Propiedades

export const PI = 3.1416
export let name = "charly" 

// clases

export class Circle {
    constructor(radius){
        this.radius = radius

    }
    area() {
        return Math.PI * this.radius ** 2
    }
    perimetro(){
        return 2 * Math.PI * this.radius
    }
}

// Exportacion por defecto
export default function restar(a,b){
    return a-b
}
// export default function restar2(a,b){
//     return a-b
// } // solo se puede exportar una funcion

// export default class MyClass {

// }