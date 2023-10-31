// Solicitar al usuario un número entero positivo.
const numeroIngresado = prompt("Ingresa un número entero positivo:");

// Convertir la entrada del usuario a un número entero.
const numero = parseInt(numeroIngresado);

// Comprobar si la entrada es un número válido y positivo.
if (!isNaN(numero) && numero > 0) {
  let suma = 0;

  // Utilizar un bucle para sumar los números desde 1 hasta el número ingresado.
  for (let i = 1; i <= numero; i++) {
    suma += i;
  }

  // Mostrar la suma total en la consola.
  console.log(`La suma de los números desde 1 hasta ${numero} es: ${suma}`);
} else {
  // Mostrar un mensaje de error si la entrada no es válida.
  console.log("Por favor, ingresa un número entero positivo válido.");
}
