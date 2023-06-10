/*Constantes y funciones*/
const btnCart = document.querySelector(".contenedor-icono-carro")
const CartProduct = document.querySelector(".contenedor-carro")
const CarritoInfo = document.querySelector(".productos-carrito")
const rowProduct = document.querySelector(".row-product")

/*Lista de todos los contenedores de prpductos*/
const productList = document.querySelector(".contenedor-item")
const productList2 = document.querySelector(".contenedor-item2")

/*arreglos de productos*/
let allProducts = []

/*Main*/
btnCart.addEventListener("click", () => {
    CartProduct.classList.toggle("hidden-cart")
})

/*Lista de productos*/
productList.addEventListener("click", e => {

    if(e.target.classList.contains("btn-add-cart")){
        const product = e.target.parentElement
        
        const infoProduct = {
            quantity: 1,
            title: (product.querySelector("h2").textContent),
            price: (product.querySelector("p").textContent)
        }

        allProducts = [...allProducts, infoProduct]
    }

})

productList2.addEventListener("click", e => {
    
    if(e.target.classList.contains("btn-add-cart")){
        const product = e.target.parentElement
        
        const infoProduct = {
            quantity: 1,
            title: (product.querySelector("h2").textContent),
            price: (product.querySelector("p").textContent)
        }

        allProducts = [...allProducts, infoProduct]
    }
})

/*HTML*/

const showHTML = () => {

    allProducts.forEach(products => {
        const containerProduct = document.createElement("div")
        containerProduct.classList.add("productos-carrito")
        containerProduct.innerHTML = `
                    <div class="info-producto-carrito">
                        <span class="cantidad-producto-carrito"></span>${product.quantity}</span>
                            <p class="titulo-producto-carrito">${product.title}</p>
                                <span class="precio-producto-carrito">${product.price}</span>
                    </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cancelar-productos">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                                `
    })

}