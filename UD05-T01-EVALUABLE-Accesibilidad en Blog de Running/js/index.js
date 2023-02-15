window.onload = inicio;

function inicio() {
let boton = document.getElementById("tema");
boton.addEventListener("click", tema);
}

function temaOscuro() {
  console.log("entra");
  document.querySelector("html").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  document.querySelector("nav").setAttribute("class", "d-flex navbar navbar-expand-md rounded-2 row navoscuro");
  document.querySelector("footer").setAttribute("class", "position-relative p-5 footeroscuro");
  document.getElementById("logowe").setAttribute("src", "images/imagerunningoscuro.svg");
  document.getElementById("migalink").setAttribute("class", "link-dark");
  document.getElementById("contenido").setAttribute("class", "container text-center rounded-2 cuerpooscuro");
  document.getElementById("eventos").setAttribute("class", "rounded-3 mb-5 entradaoscuro");
  document.getElementById("carreras").setAttribute("class", "rounded-3 mb-5 entradaoscuro");
  document.getElementById("noticias").setAttribute("class", "rounded-3 mb-5 entradaoscuro");
  document.getElementById("populares").setAttribute("class", "rounded-3 mb-5 entradaoscuro");
  document.getElementById("migapan").setAttribute("class", "position-relative migasoscuro rounded-3 mt-4");
  console.log("sale");
}

function temaClaro() {
  console.log("entra");
  document.querySelector("html").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  document.querySelector("nav").setAttribute("class", "d-flex navbar navbar-expand-md rounded-2 row");
  document.querySelector("footer").setAttribute("class", "position-relative p-5");
  document.getElementById("logowe").setAttribute("src", "images/imagerunning.svg");
  document.getElementById("migalink").setAttribute("class", "link-primary");
  document.getElementById("contenido").setAttribute("class", "container text-center rounded-2 cuerpo");
  document.getElementById("eventos").setAttribute("class", "rounded-3 mb-5 entrada");
  document.getElementById("carreras").setAttribute("class", "rounded-3 mb-5 entrada");
  document.getElementById("noticias").setAttribute("class", "rounded-3 mb-5 entrada");
  document.getElementById("populares").setAttribute("class", "rounded-3 mb-5 entrada");
  document.getElementById("migapan").setAttribute("class", "position-relative migas rounded-3 mt-4");
  console.log("sale");
}


function tema() {
  
  if(document.querySelector("html").getAttribute("data-bs-theme") ==="light") {
    temaOscuro();
  } else {
    temaClaro();
  }
  
}
            