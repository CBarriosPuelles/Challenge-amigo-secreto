// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){

    let amigo = document.getElementById('amigo').value;
    if (amigo === ""){
        alert("Por favor, inserte un nombre.");
    } else if (amigos.includes(amigo)){
        alert("Amigo ya registrado.  Por favor, ingrese un nombre distinto.");
    } else {
        amigos.push(amigo);
    }
    limpiarNombre();
    mostrarAmigos(amigos);
}

function mostrarAmigos(amigos){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i ++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length != 0){
        resultado = document.getElementById('resultado');
        let amigoGanador = amigos[Math.floor(Math.random()* amigos.length)];
        resultado.innerHTML = amigoGanador;
    } else {
        alert('No hay amigos para sortear.')
    }
}

function limpiarNombre() {
    document.getElementById('amigo').value = "";
}