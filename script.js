
function validar() {
    var nombre, correo , texto;
nombre = document.getElementById("name").value;
correo = document.getElementById("email").value;
texto = document.getElementById("text").value;

if(nombre === "" || correo ==="" || texto===""){
    alert("Todos los campos son obligatorios");
    return false;
}
else if (nombre.lenght>30){
    alert("El nombre es muy largo");
    return false;
}
else if (correo.lenght>35){
    alert("El nombre es muy largo");
    return false;
}
else if (texto.lenght>150){
    alert("El texto es muy largo");
    return false;
}
}
