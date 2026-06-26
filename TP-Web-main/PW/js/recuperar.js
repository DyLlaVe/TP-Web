const formulario = document.getElementById("formRecuperar");
const email = document.getElementById("email");

email.addEventListener("blur", function(){
    if(email.value.trim() == ""){
        email.classList.add("error");
    }
});
email.addEventListener("focus", function(){
    email.classList.remove("error");
});

formulario.addEventListener("reset", function(){
    email.classList.remove("error");
});

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    if(email.value.trim() == ""){
        alert("Ingrese su correo electrónico");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const encontrado = usuarios.find(function(u){
        return u.email == email.value; 
    });

    if(encontrado){
        alert("Tu usuario es: " + encontrado.usuario + "\nTu contraseña es: " + encontrado.password);
        window.location.href = "perfil.html"
    } else {
        alert("No existe ninguna cuenta con ese correo");
    }
});