function toggleMenu() {
    var menu = document.getElementById('menu');
  
    if (menu.style.right === "0px" || menu.style.right === "") {
      menu.style.right = "-250px";
    } else {
      menu.style.right = "0px";
    }
}
function fecharMenu() {
    var menu = document.getElementById('menu');
    menu.style.right = "-250px"; 
}  
function showLogin() {
    var loginOverlay = document.getElementById('login-overlay');
    loginOverlay.style.display = 'block';
}
function hideLogin() {
    var loginOverlay = document.getElementById('login-overlay');
    loginOverlay.style.display = 'none';
}
document.getElementById('ver-mais').addEventListener('click', function() {
    var imagensOcultas = document.querySelectorAll('.galeria-oculto');
    for (var i = 0; i < imagensOcultas.length; i++) {
        imagensOcultas[i].style.display = 'block'; 
    }
    this.style.display = 'none'; 
});
