//Declarar variables:

    //1º forma: vacía
    //let nombre;

    //2º forma: con valor
    //let nombre="Jorge";

    //3º forma: con valor y tipo de dato
    //let nombre:string="Jorge";

    //4º forma: a través de prompt
    //let nombre=prompt("¿Cuál es tu nombre?"); 

let nombre="Jorge";
let ciudad="Sevilla";
let edad="35";

//Primera forma de concatenar variables
let saludo="Hola, mi nombre es "+nombre+" y vivo en "+ciudad+" y tengo "+edad+" años.";

console.log(saludo);

//Segunda forma de concatenar variables
let saludo2=`Hola, mi nombre es ${nombre} y vivo en ${ciudad} y tengo ${edad} años.`;

console.log(saludo2);

//Creamos un saludo en mayúsculas
let saludoMayusculas=saludo.toUpperCase();
console.log(saludoMayusculas);

saludo.toWellFormed

console.log(saludo);


//Vamos a preguntarle el nombre al usuario y lo guardamos en una variable
nombre=prompt("¿Cuál es tu nombre?");
console.log(nombre);

ciudad=prompt("¿Cuál es tu ciudad?");
console.log(ciudad);

edad=prompt("¿Cuál es tu edad?");
console.log(edad);

saludo="Hola, mi nombre es "+nombre+" y vivo en "+ciudad+" y tengo "+edad+" años.";
console.log(saludo);


//Mostrarlo en HTML
document.getElementById("hola").textContent=saludo;