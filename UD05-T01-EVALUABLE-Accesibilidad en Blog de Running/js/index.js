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
  console.log("sale");
}

function temaClaro() {
  console.log("entra");
  document.querySelector("html").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  document.querySelector("nav").setAttribute("class", "d-flex navbar navbar-expand-md rounded-2 row");
  document.querySelector("footer").setAttribute("class", "position-relative p-5");
  document.getElementById("logowe").setAttribute("src", "images/imagerunning.svg");
  console.log("sale");
}


function tema() {
  
  if(document.querySelector("html").getAttribute("data-bs-theme") ==="light") {
    temaOscuro();
  } else {
    temaClaro();
  }
  
}
            