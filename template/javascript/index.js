// Obtén el modal
var modal = document.getElementById("product-modal");

// Obtén el botón que abre el modal
var btn = document.getElementById("modal-1");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close-btn")[0];

// Cuando el usuario haga clic en el botón, abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérralo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Función para agregar/quitar favoritos
function toggleFavorite(productName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(productName);

    if (index === -1) {
        favorites.push(productName);
    } else {
        favorites.splice(index, 1);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateHeartButton(productName);
}

// Función para actualizar el estado del botón del corazón
function updateHeartButton(productName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const heartButton = document.querySelector('.heart-button');

    if (favorites.includes(productName)) {
        heartButton.classList.add('active');
    } else {
        heartButton.classList.remove('active');
    }
}

// Actualiza el estado del botón del corazón al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateHeartButton('Nombre del Producto');
});



