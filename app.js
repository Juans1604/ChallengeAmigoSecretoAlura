// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function recorrerLista (){
    console.log(amigos)
    let listaAmigosHTML = document.getElementById('listaAmigos');
    listaAmigosHTML.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        listaAmigosHTML.appendChild(nuevoElemento);
    }
}
function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function agregarAmigo(){
    let valorCaja = document.getElementById("amigo").value;
    if (valorCaja == ""){
        alert("El campo no puede estar vacio")
    }else if (amigos.includes(valorCaja)){
        alert("Este nombre ya se encuentra registrado en la lista")
        limpiarCaja();
    }else{
        amigos.push(valorCaja);
        console.log(amigos);
        recorrerLista();
        limpiarCaja();
    }
}
function limpiarCaja(){
    document.querySelector("#amigo").value ="";
}

function sortearAmigo(){
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para hacer el sorteo.");
        return;  
    }else if (amigos.length == 1) {
        let amigoSorteado = amigos[0];
        asignarTextoElemento("#resultado", `El amigo secreto es: ${amigoSorteado}`);
        amigos = []; 
        recorrerLista();  
        alert("El último amigo ha sido sorteado, el juego se reiniciará.");
        reiniciarJuego(); 
        return; 
    }else{
    let amigoSeleccionado = amigos[Math.floor(Math.random()*amigos.length)];
    asignarTextoElemento("#resultado",`El amigo secreto es: ${amigoSeleccionado}`)
    recorrerLista();
    }
}

function reiniciarJuego(){
    amigos = [];
    recorrerLista();
    asignarTextoElemento("#resultado", "");
    limpiarCaja();
}