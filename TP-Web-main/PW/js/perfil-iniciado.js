const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

if(!usuarioActivo){
    window.location.href = "perfil.html";
}

document.getElementById("nav-usuario").textContent = usuarioActivo.usuario;
document.querySelector(".username").textContent = usuarioActivo.usuario;

const logout = document.getElementById("logout");

logout.addEventListener("click", function(){
    localStorage.removeItem("usuarioActivo");
    window.location.href = "perfil.html";
});
const wishlistContainer = document.getElementById("wishlist-container");
const titulo = document.createElement("div");

titulo.classList.add("section-title");
titulo.textContent = "Lista de favoritos";
wishlistContainer.appendChild(titulo);

const claveFavoritos = "favoritos_" + usuarioActivo.usuario;
const favoritos = JSON.parse(localStorage.getItem(claveFavoritos)) || [];


if(favoritos.length === 0){
} else {
    favoritos.forEach(function(juego){
        const card = document.createElement("div");
        card.classList.add("game-card");

        const img = document.createElement("img");
        img.src = juego.imagen;
        img.alt = juego.nombre;

        const info = document.createElement("div");
        info.classList.add("game-info");

        const nombre = document.createElement("h4");
        nombre.textContent = juego.nombre;

        const precio = document.createElement("div");
        precio.classList.add("price");
        precio.textContent = juego.precio;

        info.appendChild(nombre);
        info.appendChild(precio);
        card.appendChild(img);
        card.appendChild(info);
        wishlistContainer.appendChild(card);
    });
}