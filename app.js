// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // array

function agregarAmigo() {
    // 1) Capturar el valor
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    
    actualizarLista();

    //  Limpiar el campo de entrada
    input.value = "";
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");

    ul.innerHTML = ""; // limpiamos antes de renderizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <strong>${elegido}`;
}