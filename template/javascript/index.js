// Obtén el modal
var modal = document.getElementById("product-modal");

// Obtén el botón que abre el modal
var btn_1 = document.getElementById("modal-1");
var btn_2 = document.getElementById("modal-2");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close-btn")[0];

// Cuando el usuario haga clic en el botón, abre el modal
btn_1.onclick = function() {
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




