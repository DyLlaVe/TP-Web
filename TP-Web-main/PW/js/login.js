const formulario = document.getElementById("formLogin");

const usuario = document.getElementById("usuario");

const password = document.getElementById("password");

usuario.addEventListener("blur", function(){
    if(usuario.value.trim()==""){
        usuario.classList.add("error");
    }
});
password.addEventListener("blur", function(){
    if(password.value.trim()==""){
        password.classList.add("error");
    }
});


usuario.addEventListener("focus", function(){
    usuario.classList.remove("error");
});
password.addEventListener("focus", function(){
    password.classList.remove("error");
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
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const encontrado = usuarios.find(function(u){
        return u.usuario == usuario.value &&
               u.password == password.value;
    });
    if(encontrado){
        localStorage.setItem("usuarioActivo", JSON.stringify(encontrado));

        alert("Bienvenido " + encontrado.usuario);
        window.location.href="perfil-iniciado.html";
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }
});
