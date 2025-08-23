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
}
