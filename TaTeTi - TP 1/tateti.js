// Variables:
//del juego
var nameplayer1 = document.getElementById("nombreJugador1");
var nameplayer2 = document.getElementById("nombreJugador2");
var quienJuega = document.getElementById("quienJuega");
var botonComenzar = document.getElementById("empezarJuego");
var botonRevancha = document.getElementById("btnrevancha");
var casilla = document.querySelectorAll('.casilla');
var juegosGanadosJugador1 = 0;
var juegosGanadosJugador2 = 0;
var juegosEmpatados = 0;
var turno = 0;
var juegaPlayer1 = true;
var hayGanador = false;
var terminoJuego = false;
var ganador = "";

// Marcador:
var jugador1 = document.getElementById("Jugador1");
var jugador2 = document.getElementById("Jugador2");
var ganados1 = document.getElementById("Ganados1");
var ganados2 = document.getElementById("Ganados2");
var empatados = document.getElementById("Empatados");

var combinacionesGanadoras = [
    [1, 5, 9],
    [3, 5, 7],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

//funciones:

//comienza el juego
function comenzar() {
    var player1 = document.getElementById("nombreJugador1").checkValidity(); // validar campo completo
    var player2 = document.getElementById("nombreJugador2").checkValidity(); // validar campo completo

    if (player1 == false || player2 == false) {
        document.getElementById("alert").style.display = "block";
    } else {
        //Armado tabla de resultado        
        Jugador1.innerHTML = nameplayer1.value;
        Jugador2.innerHTML = nameplayer2.value;
        Ganados1.innerHTML = juegosGanadosJugador1;
        Ganados2.innerHTML = juegosGanadosJugador2;
        Empatados.innerHTML = juegosEmpatados;

        document.getElementById('juegoCompleto').style.display = "block";
        document.getElementById("btnrevancha").style.display = "none";
        document.getElementById("alert").style.display = "none";
        quienJuega.innerHTML = "Juega el jugador: " + nameplayer1.value; // muestra quien juega
        botonComenzar.style.display = "none";
    }
}

// Jugar Revancha:
function revancha() {
    turno = 0;
    hayGanador = false;
    terminoJuego = false;
    juegaPlayer1 = true;

    casilla.forEach((m) => {
        m.innerHTML = "";
        m.style.backgroundColor = "#ffffff";
    });
    document.getElementById("btnrevancha").style.display = "none";
    quienJuega.innerHTML = "Juega el jugador: " + nameplayer1.value; // muestra quien juega    

}

//Resetea el juego:
function reiniciar() {
    juegosGanadosJugador1 = 0;
    juegosGanadosJugador2 = 0;
    juegosEmpatados = 0;
    turno = 0;
    document.getElementById("nombreJugador1").value = "";
    document.getElementById("nombreJugador2").value = "";
    document.getElementById('juegoCompleto').style.display = "none";
    location.reload();

}

function comprobarGanador() {

    combinacionesGanadoras.forEach(element => {
        var _elemento0 = document.getElementById(element[0]).innerHTML;
        var _elemento1 = document.getElementById(element[1]).innerHTML;
        var _elemento2 = document.getElementById(element[2]).innerHTML;
        if (_elemento0 === _elemento1 && _elemento1 === _elemento2 && _elemento0 !== "" && _elemento1 !== "" && _elemento2 !== "") {
            hayGanador = true;
            return hayGanador;
        } else {
            return hayGanador;
        }
    })

}

casilla.forEach(item => {
    item.addEventListener('click', event => {
        if (!hayGanador && !terminoJuego) {

            if (!event.target.innerHTML) {
                turno++;
                if (juegaPlayer1) {
                    event.target.innerHTML = "X";
                    event.target.style.color = "red";
                    item.style.backgroundColor = "red";
                    quienJuega.innerHTML = "Juega el jugador: " + nameplayer2.value; // muestra quien juega
                    juegaPlayer1 = false;
                } else {
                    event.target.innerHTML = "O";
                    event.target.style.color = "#222223";
                    item.style.backgroundColor = "#222223";
                    quienJuega.innerHTML = "Juega el jugador: " + nameplayer1.value; // muestra quien juega
                    juegaPlayer1 = true;
                }

                if (turno === 9) {
                    debugger
                    comprobarGanador();
                    if (!hayGanador) {
                        terminoJuego = true;
                        quienJuega.innerHTML = "Es un Empate!";
                        juegosEmpatados++;
                        Empatados.innerHTML = juegosEmpatados;
                        document.getElementById("btnrevancha").style.display = "block";
                    }
                }

                if (turno > 2 && !terminoJuego) {

                    comprobarGanador();

                    if (hayGanador) {

                        if (juegaPlayer1) {
                            ganador = nameplayer2.value;
                            quienJuega.innerHTML = "Ha ganado el jugador " + ganador + "!!!";
                            document.getElementById('quienJuega').style.color = "##2ea00e";
                            juegosGanadosJugador2++;
                            Ganados2.innerHTML = juegosGanadosJugador2;

                        } else {
                            ganador = nameplayer1.value;
                            quienJuega.innerHTML = "Ha ganado el jugador " + ganador + "!!!";
                            document.getElementById('quienJuega').style.color = "##2ea00e";
                            juegosGanadosJugador1++;
                            Ganados1.innerHTML = juegosGanadosJugador1;
                        }
                        document.getElementById("btnrevancha").style.display = "block";

                    }

                }

            }
        }
    })
})