/*Constantes y funciones*/
const btnCart = document.querySelector(".contenedor-iconos")
const CartProduct = document.querySelector(".contenedor-carro")


/*Main*/
btnCart.addEventListener("click", () => {
    CartProduct.classList.toggle("hidden-cart")
})