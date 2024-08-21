//Importacion

import { add, PI, name, Circle } from "./28-export-modules.js"
import restar from "./28-export-modules.js"

//funciones

console.log( add(27, 23) ) // 5

// Propiedades

console.log(PI);
console.log(name);

//Clases

let circle = new Circle(5)
console.log(circle.radius);
console.log(circle.area());
console.log(circle.perimetro());

//Importacion por defecto

console.log(restar(28,8));

// proyecto Modular

// import {MyClass} from "*./directory/file.js" 


