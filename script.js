
//Ejercicio 1 — Formatear nombre

let nombre = "VICKY";
const resultado = nombre.slice(0,1).toUpperCase() + nombre.slice(1).toLowerCase();
console.log("Ejercicio 1: " + resultado);

//Ejercicio 2 — Contar letras

let oracion = "hola soy flor";

const cantLetras = oracion.split(" ").join("").length;

console.log("Ejercicio 2: " + cantLetras + " letras.");

//Ejercicio 3 — Número mayor

let n1 = 10;
let n2 = 8;
let n3 = 3;

const maximo = max(n1, n2, n3);
console.log("Ejercicio 3: " + maximo);

function max(n1, n2, n3)
{
    let max;

    if(n1 > n2 && n1 > n3) { max = n1;}
    else if(n2 > n1 && n2 > n3) { max = n2;}
    else {max = n3;}

    return max;
}

//Ejercicio 4 — Validar password

let password = "509Martes"
const numerosPosibles = ["0","1","2","3","4","5","6","7","8","9"];

const valida = password = password.length >= 8 && numerosPosibles.some(n => password.includes(n));

let mensaje;
if(valida){ mensaje = "La contraseña es valida."}
else {mensaje = "La contraseña no es valida."}

console.log("Ejercicio 4: " + mensaje);

//Ejercicio 5 — Suma de array

let numeros = [2, 6, 3];
let rta = 0;

numeros.forEach(n => { rta = rta + n;});

console.log("Ejercicio 5: " + rta);

//Ejercicio 6 — Número mayor de un array

let numerosArray = [2, 14, 55, 56, 23];
let mayor = numerosArray[0];

numerosArray.forEach(n => { if(n > mayor){ mayor = n;}})

console.log("Ejercicio 6: " + mayor)

//Ejercicio 7 — Filtrar pares

let numerosMezclados = [2, 5, 22, 24, 33];
let numerosPares = [];

numerosPares = esPar(numerosMezclados).join(", ");

function esPar(numerosMezclados)
{
    numerosMezclados.forEach(n =>
    {
        if(n % 2 === 0){ numerosPares.push(n);}
    }
    )
    return numerosPares;
}

console.log("Ejercicio 7: " + numerosPares);



