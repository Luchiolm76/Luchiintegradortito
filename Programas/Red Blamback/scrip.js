// Funciones para realizar operaciones matemáticas
function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function multiplicacion(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    if (b === 0) {
      throw "No es posible dividir por cero.";
    }
    return a / b;
  }
  
  // Función para mostrar el menú de operaciones y obtener la selección del usuario
  function mostrarMenu() {
    console.log("Calculadora Interactiva");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Salir");
    const opcion = parseInt(prompt("Seleccione una operación (1/2/3/4/5):"));
    return opcion;
  }
  
  // Función anónima para manejar mensajes de error
  const manejarError = (error) => {
    console.error("Error:", error);
  };
  
