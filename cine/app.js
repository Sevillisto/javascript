//Declaración de variables.

let pelicula;
let director;
let año;

//Pregunta al usuario por los datos de la película.
pelicula=prompt("Inserte el nombre de la película:");
director=prompt("Indique el director:");
año=prompt("Seleccione el año de estreno:");

//Declaración de la cadena de texto.
let frase="La película "+pelicula+" fue dirigida por "+director+" y se estrenó en el año "+año+"."

//Por consola:
console.log(frase);

//Mostrar en el html
document.getElementById("info-pelicula").textContent=frase;