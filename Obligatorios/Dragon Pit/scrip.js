function jugarPiedraPapelTijerasLagartoSpock() {
    const opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
  
    while (true) {
      // Solicitar la elección del usuario y validarla
      let eleccionUsuario = prompt(
        "Elige una opción:\n" +
          "1. Piedra\n" +
          "2. Papel\n" +
          "3. Tijera\n" +
          "4. Lagarto\n" +
          "5. Spock\n" +
          "6. Salir"
      );
  
      if (!eleccionUsuario) {
        console.log("¡Gracias por jugar!");
        break;
      }
  
      if (eleccionUsuario === "6") {
        console.log("¡Gracias por jugar!");
        break;
      }
  
      const opcionUsuario = opciones[parseInt(eleccionUsuario) - 1];
  
      if (!opcionUsuario) {
        console.log("Opción no válida. Por favor, elige una opción válida.");
        continue;
      }
  
      // Generar una elección aleatoria para la computadora
      const eleccionComputadora =
        opciones[Math.floor(Math.random() * opciones.length)];
  
      console.log(`Tu elección: ${opcionUsuario}`);
      console.log(`Elección de la computadora: ${eleccionComputadora}`);
  
      // Determinar el resultado del juego
      const resultado = determinarResultado(opcionUsuario, eleccionComputadora);
      console.log(resultado);
    }
  
    console.log("¡Gracias por jugar!");
  }
  
  function determinarResultado(usuario, computadora) {
    if (usuario === computadora) {
      return "¡Es un empate!";
    } else if (
      (usuario === "Piedra" && (computadora === "Tijera" || computadora === "Lagarto")) ||
      (usuario === "Papel" && (computadora === "Piedra" || computadora === "Spock")) ||
      (usuario === "Tijera" && (computadora === "Papel" || computadora === "Lagarto")) ||
      (usuario === "Lagarto" && (computadora === "Spock" || computadora === "Papel")) ||
      (usuario === "Spock" && (computadora === "Tijera" || computadora === "Piedra"))
    ) {
      return "¡Ganaste!";
    } else {
      return "¡La computadora gana!";
    }
  }
  
  jugarPiedraPapelTijerasLagartoSpock();
  
