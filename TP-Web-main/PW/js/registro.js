const formulario = document.getElementById("formRegistro");

const usuario = document.getElementById("usuario");

const email = document.getElementById("email")

const password = document.getElementById("password");

usuario.addEventListener("blur", function(){

    if(usuario.value.trim() == ""){

        usuario.classList.add("error");

    }
});
password.addEventListener("blur", function(){
    if(password.value.trim() == ""){
        password.classList.add("error");
    }
});
email.addEventListener("blur", function(){
    if(email.value.trim() == ""){
        email.classList.add("error");
    }
});


usuario.addEventListener("focus", function(){
    usuario.classList.remove("error");
});
password.addEventListener("focus", function(){
    password.classList.remove("error");
});
email.addEventListener("focus", function(){
    email.classList.remove("error");
});


formulario.addEventListener("reset", function(){
    usuario.classList.remove("error");
    password.classList.remove("error");
});

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    if(usuario.value.trim()=="" || password.value.trim()==""){
        alert("Complete todos los campos");
        return;
    }
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const existe = usuarios.find(function(u){
        return u.usuario == usuario.value;
    });
    if(existe){
        alert("Ese usuario ya existe");
        return;
    }
    usuarios.push({
        usuario: usuario.value,
        password: password.value,
        email: email.value
    });
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    alert("Usuario registrado correctamente");
    formulario.reset();

    window.location.href = "perfil.html";

});