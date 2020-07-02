
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const mensaje= document.getElementById("opinion");
const form = document.getElementById("form");


    form.addEventListener("sumbit",e=>{
        e.preventDefault()
        if(nombre.value.lenght<3){
            alert("El campo nombre esta vacio");
        }
    })

