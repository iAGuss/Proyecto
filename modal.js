let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.getElementById("modal-btn");
let modal = document.querySelectorAll(".modal")[0];

let cerrar2 = document.getElementsByClassName("material-symbols-outlined")[0];

abrir.addEventListener("click", function (e) {
  document.getElementById("my-modal").style.display = "flex";
});

cerrar.addEventListener("click", function (e) {
  document.getElementById("my-modal").style.display = "none";
});

cerrar2.addEventListener("click", function (e) {
  document.getElementById("my-modal").style.display = "none";
});

