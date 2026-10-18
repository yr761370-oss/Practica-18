let edad = 17;
let nombre = "Paula";
nombre = "Yadira";

if (edad >= 18) {
    console.log(nombre + " es mayor de edad");
} else {
    console.log(nombre + " no es mayor de edad");
}

let numero1 = 10;
let numero2 = 12;
if (numero1 > numero2) {
    numero1 = numero1 * 5;
    console.log(numero1 + " es mayor que " + numero2);
    console.log("El número 1 es mayor que el número 2");
} else if (numero1 < numero2) {
    console.log("El número 2 es mayor o igual al número 1");
}

let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miercoles":
        console.log("Hoy es miércoles");            
        break;
    case "jueves":
        console.log("Hoy es jueves");
        break;
    case "viernes":
        console.log("Hoy es viernes");
        break;
    case "sabado":
        console.log("Hoy es sábado");
        break;  
    case "domingo":
        console.log("Hoy es domingo");
        break;
    default:
        console.log("No es un día válido");
        break;
}

let mes = "septiembre";
mes = mes.toLowerCase(); // Convertir a minúsculas para evitar problemas de mayúsculas  
switch (mes) {
    case "enero":
        console.log("Hoy es enero");
        break;
    case "febrero":
        console.log("Hoy es febrero");
        break;
    case "marzo":
        console.log("Hoy es marzo");
        break;
    case "abril":
        console.log("Hoy es abril");
        break;
    case "mayo":
        console.log("Hoy es mayo");
        break;
    case "junio":
        console.log("Hoy es junio");
        break;
    case "julio":
        console.log("Hoy es julio");
        break;
    case "agosto":
        console.log("Hoy es agosto");
        break;
    case "septiembre":
        console.log("Hoy es septiembre");
        break;
    case "octubre":
        console.log("Hoy es octubre");
        break;
    case "noviembre":
        console.log("Hoy es noviembre");
        break;
    case "diciembre":
        console.log("Hoy es diciembre");
        break;
    default:
        console.log("No es un mes válido");
        break;
}
