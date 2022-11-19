const botonModalCentro = document.querySelector("#boton-modal-centro");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

const botonModalDerecha = document.querySelector("#boton-modal-derecha");
const modalDerecha = document.querySelector("#modal-derecha");
const cerrarModalDerecha = document.querySelector("#cerrar-modal-derecha");

botonModalCentro.addEventListener("click", () => {
    modalCentro.classList.add("active");
}) 

cerrarModalCentro.addEventListener("click", () => {
    modalCentro.classList.remove("active");
})

botonModalDerecha.addEventListener("click", () => {
    modalDerecha.classList.add("active");
}) 

cerrarModalDerecha.addEventListener("click", () => {
    modalDerecha.classList.remove("active");
})