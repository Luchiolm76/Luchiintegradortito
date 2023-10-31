// Programa principal
while (true) {
    const opcion = mostrarMenu();

    if (opcion === 5) {
        console.log("¡Hasta luego!");
        break;
    }

    if (opcion >= 1 && opcion <= 4) {
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        switch (opcion) {
            case 1:
                try {
                    const resultado = suma(num1, num2);
                    console.log("Resultado:", resultado);
                } catch (error) {
                    manejarError(error);
                }
                break;
            case 2:
                const resultado = resta(num1, num2);
                console.log("Resultado:", resultado);
                break;
            case 3:
                const resultado = multiplicacion(num1, num2);
                console.log("Resultado:", resultado);
                break;
            case 4:
                try {
                    const resultado = division(num1, num2);
                    console.log("Resultado:", resultado);
                } catch (error) {
                    manejarError(error);
                }
                break;
        }
    } else {
        console.log("Opción no válida. Por favor, seleccione una operación válida (1/2/3/4/5).");
    }
}
