
document.addEventListener("DOMContentLoaded", () => {
    cargarNavbar();
  });

// JavaScript para hacer el navbar reutilizable
function cargarNavbar() {
    fetch("../pages/navbar.html")
        .then (response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            initializeNavbar();
        })
        .catch(error => console.error('Error al cargar navbar', error) );
}

function initializeNavbar(){
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

if (menu && navbar && header){
    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');

});
window.onscroll = () => {
    menu.classList.remove('fa-times');  
    navbar.classList.remove('active');

    if (window.scrollY > 150) {
        header.classList.add('active');
    }
     else {
        header.classList.remove('active');
    }
}
}
else {
    console.error('uno o mas elementos no se encontraron en el documento');
}
}

