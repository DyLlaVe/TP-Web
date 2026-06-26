const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

if (!usuarioActivo) {
    window.location.href = "perfil.html";
}

const claveFavoritos = "favoritos_" + usuarioActivo.usuario;

document.getElementById("nav-usuario").textContent = usuarioActivo.usuario;

const contenedor = document.getElementById("contenedor-juegos");

function listaJuegos(juegos) {
    contenedor.innerHTML = "";

    juegos.forEach(function(juego) {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = juego.imagen;
        img.alt = juego.nombre;

        const p = document.createElement("p");
        p.innerText = juego.categoria;

        const botonFavorito = document.createElement("button");
        botonFavorito.textContent = "No favorito ⭐";

        var favoritos = JSON.parse(localStorage.getItem(claveFavoritos)) || [];
        var estaEnFavoritos = favoritos.find(function(f) {
            return f.id === juego.id;
        });
        if (estaEnFavoritos) {
            botonFavorito.classList.add("favorito-puesto");
            botonFavorito.textContent = "En favoritos🌟";
        }

        botonFavorito.addEventListener("click", function() {
            botonFavorito.classList.toggle("favorito-puesto");
            var favoritos = JSON.parse(localStorage.getItem(claveFavoritos)) || [];

            if (botonFavorito.classList.contains("favorito-puesto")) {
                botonFavorito.textContent = "En favoritos🌟";
                favoritos.push(juego);
            } else {
                botonFavorito.textContent = "No favorito ⭐";
                favoritos = favoritos.filter(function(f) {
                    return f.id !== juego.id;
                });
            }
            localStorage.setItem(claveFavoritos, JSON.stringify(favoritos));
        });

        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(botonFavorito);
        contenedor.appendChild(li);
    });
}

listaJuegos(juegos);