// `\/`
let age = 10

if (age == 37){
    console.log("You are 37 years old")
} else if (age < 18){
    console.log(`You are a child, tienes ${age}`)
} else if (age > 18){
    console.log(`You are an adult, tienes ${age}`)
} 
else {
    console.log("You are not 37 years old")
}

// operador ternario

const message = age == 37 ? "la edad es 37" : "la edad no es 37"
console.log(message);

//switch

let day = 0
let dayName

if (day == 0) {
    dayName = "Domingo"
}else if (day == 1){
    dayName = "Lunes"
}

day = 7

switch (day) {
    case 0:
        dayName = "Domingo"
        console.log("domingo");
        break
    case 1:
        dayName = "Lunes"
        console.log("lunes");
        break
    case 2:
        dayName = "martes"
        console.log("martes");
        break
    case 3:
        dayName = "miercoles"
        console.log("miercoles");
        break
    case 4:
        dayName = "jueves"
        console.log("jueves");
        break
    case 5:
        dayName = "viernes"
        console.log("viernes");
        break
    case 6:
        dayName = "sabado"
        console.log("sabado");
        break
    default:
        dayName = "no es un dia de la semana"
    }
console.log(dayName);
