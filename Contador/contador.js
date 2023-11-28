// Este evento espera que se presione una tecla
window.addEventListener("keydown", (e) => {

    // Si la tecla presionada es "+", se llama a la funcion incremento del contador de likes
    if (e.key == "+") {
        incremento();
    }

    // Si la tecla presionada es "-", se llama a la funcion decremento del contador de likes
    else if (e.key == "-") {
        decremento();
    }
});

// Se inicializa un contador en 0
let contador = 0;

// El elemento HTML donde se mostrara el valor cambiante
const valor = document.getElementById("valor");

// Funcion para incrementar el contador
function incremento() {
    // Cada vez que se presiona la tecla "+", el contador aumenta en 1
    contador += 1;
    // El nuevo valor del contador se muestra en pantalla
    valor.innerHTML = contador;
}

// Funcion para decrementar el contador
function decremento() {
    // Si el contador es mayor que 0, se decrementa en 1 al presionar la tecla "-"
    if (contador > 0) {
        contador -= 1;
        // El nuevo valor del contador se muestra en pantalla
        valor.innerHTML = contador;
    } else {
        // Si el contador es 0, permanece en 0 y se muestra en pantalla
        contador = 0;
        valor.innerHTML = contador;
    }
}

// Funcion para resetear el contador
function resetear() {
    // Al llamar a esta funcion, el contador se restablece a 0
    contador = 0;
    // El nuevo valor del contador (0) se muestra en pantalla
    valor.innerHTML = contador;
}
