let precio=25;
let cantidad=3;
let descuento=5;

//OPERADORES ARITMETICOS

//Operador de suma
let suma;
suma=precio+precio;

console.log(suma);


//Operador de resta
let resta=suma-precio;

console.log(resta);

resta=precio-descuento;

console.log(resta); //Ahora vale 20

//Operador de multiplicación
let multiplicacion=precio*cantidad;
console.log(multiplicacion);    //Ahora vale 75

//Operación división
let division=precio/cantidad;
console.log(division);

//Operador de módulo (resto)
let modulo = precio%cantidad;
console.log(modulo);    //Sirve para calcular numeros pares. 


//----------------------------------------------------------------------------------------------------------

//OPERADORES DE ASIGNACION

let precioTotal= precio + 10;  //Cuando quiero incrementar un precio en 10 euros
console.log("Precio + 10 = "+precioTotal);   //Ahora valdrá 10 euros más

let iva=(precio*21)/100;
iva=precio*0.21;
console.log("IVA aplicado: "+iva)

precioTotal=precio+iva;
console.log("Precio más IVA = "+precioTotal);   //Ahora el precioTotal vale 30.25

//--------------

let carrito=0;

carrito +=10;   //carrito + 10
console.log(carrito);   //Ahorra carrito vale 10 

carrito -=5;   //Se resta 5 a carrito
console.log(carrito);   //Ahorra carrito vale 5

//Comparadores

let a=15;
let b=3;

let buleanu=a>b;
console.log(buleanu);   //true

buleanu=a<b;
console.log(buleanu);   //false

c= a>3;
console.log(c);

let d="7";
console.log(a===d); //Va a dar false, porque d es string y a es integer

//Comparadores lógicos
let puedePasar;
let llave=true;
let permiso=false;

//puedePasar true si tiene la llave o el permiso

puedePasar= llave || permiso;   //or alternativa
console.log(puedePasar);

let jefe=true;
puedePasar=(llave&&permiso)||jefe;
console.log(puedePasar);

let estaLloviendo = false;  //nace como falso
let puedoSalirSinParaguas = !estaLloviendo; //es true solo si no está lloviendo (! invierte el sentido)

console.log(puedoSalirSinParaguas);

//EJERCICIOS

//Ejercicio 11 Mayor que y menor que
const a1 = 8 > 3;   // true
const b1 = 2 < 1;   // false
console.log(a1, b1);

//Ejercicio 12 Mayor o igual y menor o igual
const r1 = 5 >= 5; // true
const r2 = 4 <= 3; // false
console.log(r1, r2);

//Ejercicio 13 Igualdad simple frente a estricta
const igualdadSimple = "10" == 10;     // true
const igualdadEstricta = "10" === 10; // false
console.log(igualdadSimple, igualdadEstricta);

//Ejercicio 14 Distinto frente a estrictamente distinto
const distintoSimple = 7 != "7";     // false
const distintoEstricto = 7 !== "7"; // true
console.log(distintoSimple, distintoEstricto);  //Negando la igualdad

//Ejercicio 15 Dos precios reales
const precio1 = 12.5;
const precio2 = 12.99;
const esMasBarato = precio1 < precio2;
console.log(esMasBarato); // true

//Ejercicio 16 AND básico
const tieneDni = true;
const tieneCita = false;
const puedeEntrar = tieneDni && tieneCita;
console.log(puedeEntrar); // false

//Ejercicio 17 OR básico
const esFestivo = false;
const esDomingo = true;
const descanso = esFestivo || esDomingo;
console.log(descanso); // true

//Ejercicio 18 NOT con una variable
const encendido = true;
const apagado = !encendido;
console.log(apagado); // false

//Ejercicio 19 Comparación y AND
const nota = 70;
const asistencia = 80;
const aprueba = (nota >= 50) && (asistencia >= 75);
console.log(aprueba); // true

//Ejercicio 20 OR y NOT
const saldo = 0;
const tieneCredito = true;
const bloqueado = false;

const puedeComprar = (saldo > 0 || tieneCredito) && !bloqueado;
console.log(puedeComprar); // true