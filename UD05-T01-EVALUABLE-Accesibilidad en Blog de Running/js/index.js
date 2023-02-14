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
  //document.querySelector("nav").setAttribute("class", "d-flex navbar navbar-expand-md rounded-2 row navoscuro");
  console.log("sale");
}

function temaClaro() {
  console.log("entra");
  document.querySelector("html").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  document.querySelector("nav").setAttribute("class", "d-flex navbar navbar-expand-md rounded-2 row");
  console.log("sale");
}


function tema() {
  
  if(document.querySelector("html").getAttribute("data-bs-theme") ==="light") {
    temaOscuro();
  } else {
    temaClaro();
  }
  
}
            