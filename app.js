let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre !== ""){
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        console.log(amigos);
    }else {
        alert("El nombre no puede estar vacío");
    }
    mostrarAmigos(); // Se llama a la funcion para actualizar la lista en el HTML con el amigo recien agregado
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");// Se obtiene la referencia a la lista
    lista.innerHTML = ""; // Limpia la lista antes de agregar algun nuevo elemento
    amigos.forEach(function(amigo) { // Loop encargado de iterar el array amigos
        let li = document.createElement("li"); // Crear un nuevo elemento de la lista
        li.textContent = amigo; // Asignar el nombre del amigo al elemento de la lista
        lista.appendChild(li); // Con esta linea agregamos el elemento para que aparezca en el HTML
    });

}

function sortearAmigo() {
    let amigoSorteado = document.getElementById("resultado");
    if(amigos.length < 1){ // Valida que la lista no este vacia y lanza un mensaje de acuerdo a eso
        alert("La lista no puede estar vacia")
    }else if (amigos.length < 2){ // Valida que la lista tenga al menos 2 amigos antes de realizar un sorteo y da instrucciones al usuario
        alert("Necesitas al menos 2 amigos para realizar un sorteo");
    }else{
        amigoSorteado.innerHTML =""; // Limpia el elemento antes de realizar un sorteo
        let sorteado = amigos[Math.floor(Math.random()* amigos.length)]; // Genera un numero aleatorio entre 0 y el ultimo elemento de la array
        let li = document.createElement("li"); // Crea un nuevo elemento lista en la ul con el id de resultado
        li.textContent = `El amigo sorteado es: ${sorteado}!`; // Asigna el nombre del amigo sorteado al elemento li recien creado
        amigoSorteado.appendChild(li); // Muestra el resultado en el HTML
    }
}
