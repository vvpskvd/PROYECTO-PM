//Main
const btnCart = document.querySelector(".container-cart-icon");
const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");
const containerCartProducts = document.querySelector(".container-cart-products");

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle("hidden-cart")
});

// All product container
const productsList = document.querySelector(".container-items");

// Products
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

//Cart changes
productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h1').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Function to show cart
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

		// Clean HTML
		rowProduct.innerHTML = '';

		let total = 0;
		let totalOfProducts = 0;
	
		allProducts.forEach(product => {
			const containerProduct = document.createElement('div');
			containerProduct.classList.add('cart-product');
	
			containerProduct.innerHTML = `
				<div class="info-cart-product">
					<span class="cantidad-producto-carrito">${product.quantity}</span>
					<p class="titulo-producto-carrito">${product.title}</p>
					<span class="precio-producto-carrito">${product.price}</span>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>        
			`;
	
			rowProduct.append(containerProduct);
	
			total =
				total + parseInt(product.quantity * product.price.slice(1));
			totalOfProducts = totalOfProducts + product.quantity;
		});
	
		valorTotal.innerText = `$${total}`;
		countProducts.innerText = totalOfProducts;
};