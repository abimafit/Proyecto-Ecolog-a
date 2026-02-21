// Seleccionamos los elementos
const modal = document.getElementById("miModal");
const btnAbrir = document.getElementById("botonAbrir");
const btnCerrar = document.querySelector(".cerrar");
// Función para abrir el modal
btnAbrir.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Evita el scroll al estar abierto
}
// Función para cerrar el modal
const cerrarModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Devuelve el scroll
}
btnCerrar.onclick = cerrarModal;
// Cerrar si hacen clic fuera de la caja blanca
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}
// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") cerrarModal();
});