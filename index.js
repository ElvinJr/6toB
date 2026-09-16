let nombre = prompt("Cual es tu nombre?");
let apellido = prompt("Cual es tu apellido?");
let anoNacimiento = Number(prompt('En que año naciste?'));
let edad = 2026 - anoNacimiento;
let esMayorEdad = edad > 18 ? "Es mayor de edad" : "Es menor de edad";

let mensaje = `Hola ${nombre} ${apellido} usted nacio en ${anoNacimiento} y tienes ${edad}, y usted ${esMayorEdad}`;

alert(mensaje);