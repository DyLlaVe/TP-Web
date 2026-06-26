const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keyup', () => {
  const valor = searchBox.value.toLowerCase();

  const filtrados = juegos.filter(juego =>
    juego.nombre.toLowerCase().includes(valor) ||
    juego.categoria.toLowerCase().includes(valor)
  );

  listaJuegos(filtrados);
});
