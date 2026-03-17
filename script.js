
//Ejercicio 1 — Formatear nombre

let nombre = "VICKY"
formatearNombre(nombre)

function formatearNombre(nombre)
{
    const resultado = nombre.slice(0,1).toUpperCase() + nombre.slice(1).toLowerCase()
    console.log("Ejercicio 1: " + resultado)  
}

//Ejercicio 2 — Contar letras

let texto = "hola soy flor"
contarLetras(texto)

function contarLetras(texto)
{
    const cantLetras = texto.split(" ").join("").length
    console.log("Ejercicio 2: " + cantLetras + " letras.")
}

//Ejercicio 3 — Número mayor

let a = 10
let b = 8
let c = 3
maximo(a, b, c)

function maximo(a, b, c)
{
    const maximo = max(a, b, c)
    console.log("Ejercicio 3: " + maximo)

    function max(a, b, c)
    {
        let max

        if(a > b && a > c) { max = a}
        else if(b > a && b > c) { max = b}
        else {max = c}

        return max
    }
}
//Ejercicio 4 — Validar password

let password = "509Martes"
validarPassword(password)

function validarPassword(password)
{
    
    const numerosPosibles = ["0","1","2","3","4","5","6","7","8","9"]

    const valida = password => password.length >= 8 && numerosPosibles.some(n => password.includes(n))

    let mensaje
    if(valida){ mensaje = "La contraseña es valida."}
    else {mensaje = "La contraseña no es valida."}

    console.log("Ejercicio 4: " + mensaje)
}

//Ejercicio 5 — Suma de array

let numeros = [2, 6, 3]
sumarArray(numeros)

function sumarArray(numeros)
{
    let rta = 0
    numeros.forEach(n => { rta = rta + n})
    console.log("Ejercicio 5: " + rta)
}

//Ejercicio 6 — Número mayor de un array

let numerosArray = [2, 14, 55, 56, 23]
mayorNumero(numerosArray)

function mayorNumero(numerosArray)
{
    let mayor = numerosArray[0]
    numerosArray.forEach(n => { if(n > mayor){ mayor = n}})
    console.log("Ejercicio 6: " + mayor)
}

//Ejercicio 7 — Filtrar pares

let numerosMezclados = [2, 5, 22, 24, 33]
obtenerPares(numerosMezclados)

function obtenerPares(numeros)
{
    let numerosPares = []
    numerosPares = esPar(numerosMezclados).join(", ")
    function esPar(numerosMezclados)
    {
        numerosMezclados.forEach(n =>
        {
            if(n % 2 === 0){ numerosPares.push(n)}
        }
        )
        return numerosPares
    }
    console.log("Ejercicio 7: " + numerosPares)
}

//Ejercicio 8 — Descripción de usuario

const usuario = 
{ 
    nombre: "Ana",
    edad: 20,
    activo: false
}
descripcionUsuario(usuario)

function descripcionUsuario(usuario)
{
    const descripcion = usuario.nombre + " tiene " + usuario.edad + " años."
    console.log("Ejercicio 8: " + descripcion)
}

//Ejercicio 9 — Activar usuario

activarUsuario(usuario)

function activarUsuario(usuario)
{
    let mensaje
    usuario.activo = true
    if(usuario.activo){ mensaje = "El usuario está activo."}
    else {mensaje = "El usuario está inactivo."}

    console.log("Ejercicio 9: " + mensaje)
}

//Ejercicio 10 — Precio total

const productos = [ {nombre:"Mouse", precio:10}, {nombre:"Teclado", precio:25}, {nombre:"Monitor", precio:200} ]
let total = 0

let calcularTotal = productos => productos.forEach(p => {total += p.precio})

calcularTotal(productos)

console.log("Ejercicio 10: " + total)

//Ejercicio 11 — map

const usuarios = [{nombre:"Ana", edad:17}, {nombre:"Juan", edad:25}, {nombre:"Pedro", edad:30}]

const nombres = usuarios.map( usuario => usuario.nombre)

console.log("Ejercicio 11: " + nombres)

//Ejercicio 12 — filter

const mayores = usuarios.filter(usuario => usuario.edad >= 18)
const nombresMayores = mayores.map( mayor => mayor.nombre)

console.log("Ejercicio 12: " + nombresMayores)

//Ejercicio 13 — reduce

function sumaEdades()
{
    const edades = usuarios.map( usuario => usuario.edad)
    const suma = edades.reduce((a, b) => a + b, 0);
}


console.log("Ejercicio 13: " + suma)

//Ejercicio 14 — Destructuring

const producto = {nombre:"Notebook", precio:1000}

const {nombre: nombreProducto, precio: precioProducto} = producto;

console.log("Ejercicio 14: nombre: " + nombreProducto + " - precio: " + precioProducto)

//Ejercicio 15 — Spread operator

const productoNuevo = {...producto, stock: 5}

console.log("Ejercicio 15: " + productoNuevo.stock)

//Ejercicio 16 — Buscar producto 

const productos2 = [ {nombre:"Remera", precio:40000}, {nombre:"Jean", precio:60000}, {nombre:"Buzo", precio:80000} ]
const prodNombre = buscarProducto(productos2, "Jean");

function buscarProducto(productos2, nombre)
{
    let rta = productos2.find(prod => prod.nombre === nombre) 
    return rta
}
console.log("Ejercicio 16: nombre: " + prodNombre.nombre + " - precio: " + prodNombre.precio )

//Ejercicio 17 — Productos caros

const caros = productosCaros(productos2)

function productosCaros(productos2)
{
    let rta = productos2.filter(prod => prod.precio > 50000) 
    return rta
}

caros.forEach(prod => {
    console.log("Ejercicio 17: " + prod.nombre + " - precio: " + prod.precio)
})

//Ejercicio 18 — Promedio

const nums = [10, 12, 3, 2]
let rta = promedio(nums)

function promedio(nums)
{
    let suma = nums.reduce((a, b) => a + b, 0);
    return suma / numeros.length;
}

console.log("Ejercicio 18: " + rta)

//Desafío final — Simulación de lógica de API

const usuariosAPI = [{id:1, nombre:"Ana", edad:20}, {id:2, nombre:"Juan", edad:15}, {id:3, nombre:"Pedro", edad:30}]

function obtenerUsuarios()
{
    return usuariosAPI;
}

function obtenerUsuarioPorId(id)
{
    const usuario = usuariosAPI.find(usuario => usuario.id = id)
    return usuario;
}

function obtenerMayores()
{
    let mayores = usuariosAPI.filter(usuario => usuario.edad >= 18)
    return mayores;
}

function crearUsuario(nombre, edad)
{
    let nuevoUsuario = {nombre: nombre, edad: edad}
    usuariosAPI.push(nuevoUsuario)
}






