//Declaración de variables.
let film;
let director;
let year;

//Pregunta al usuario por los datos de la película.
//film=prompt("Inserte el nombre de la película:");
//director=prompt("Indique el director:");
//year=prompt("Seleccione el año de estreno:");

film="F1";
director="Steven Spielberg";
year=2025;

//Declaración de la cadena de texto.
//let frase="La película "+pelicula+" fue dirigida por "+director+" y se estrenó en el año "+año+".";

let frase=`La película ${film} fue dirigida por ${director} y se estrenó en el año ${year}.`;

//Por consola:
console.log(frase);

//Mostrar en el html
document.getElementById("info-pelicula").textContent=frase;