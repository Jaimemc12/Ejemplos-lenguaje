let jugador = document.getElementById("opcion");
let opciones = ["piedra", "papel", "tijera"];
let maquina = opciones[Math.floor(Math.random() * opciones.length)];
let resultado = document.getElementById("resultado");
function PiedraPapelTijera(jugador, maquina) {

    if (jugador == maquina) {
        console.log("Empate");
    } else if ((jugador == "piedra" && maquina == "tijera") ||
        (jugador == "papel" && maquina == "piedra") ||
        (jugador == "tijera" && maquina == "papel")) {
        console.log("¡Ganaste!");
    } else {
        console.log("¡Perdiste!");
    }


}

PiedraPapelTijera(jugador, maquina);