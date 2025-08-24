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
