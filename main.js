//Below is the javascript for my add to cart sections

//Grabbing the a tags using query selector.
let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		name: 'Colorful one-piece',
		tag: 'Colorfulfullbodyswimsuit',
		price: 190,
		inCart: 0,
	},

	{
		name: 'Plain white bikini',
		tag: 'Plainwhitebikini',
		price: 120,
		inCart: 0,
	},

	{
		name: 'Patterned bikini',
		tag: 'Patternedbikini',
		price: 155,
		inCart: 0,
	},

	{
		name: 'High waisted bikini',
		tag: 'Highwaistedpatternedbikini',
		price: 160,
		inCart: 0,
	},

	{
		name: 'Green & white bikini',
		tag: 'Greenandwhitebikini',
		price: 140,
		inCart: 0,
	},

	{
		name: 'Leopard print bikini',
		tag: 'Leopardprintbikini',
		price: 260,
		inCart: 0,
	},

	{
		name: 'Red & white swimsuit',
		tag: 'Redandwhiteswimsuit',
		price: 220,
		inCart: 0,
	},

	{
		name: 'Light pink bikini',
		tag: 'Lightpinkbikini',
		price: 240,
		inCart: 0,
	},

	{
		name: 'Plain black one-piece',
		tag: 'Blackfullbodyswimsuit',
		price: 109,
		inCart: 0,
	},

	{
		name: 'Polka dot one-piece',
		tag: 'Polkadotfullbodyswimsuit',
		price: 199,
		inCart: 0,
	},

	{
		name: 'White patterned bikini',
		tag: 'Whitepatternedbikini',
		price: 110,
		inCart: 0,
	},

	{
		name: 'Plain Olive Green bikini',
		tag: 'PlainOliveGreenbikini',
		price: 120,
		inCart: 0,
	},

	{
		name: 'Florally one-piece',
		tag: 'Florallyfullbodyswimsuit',
		price: 199,
		inCart: 0,
	},

	{
		name: 'Plain brown bikini',
		tag: 'Brownbikini',
		price: 139,
		inCart: 0,
	},

	{
		name: 'Multicolored bikini',
		tag: 'Multicoloredpatternedbikini',
		price: 110,
		inCart: 0,
	},

	{
		name: 'Plain pink bikini',
		tag: 'Pinkbikini',
		price: 240,
		inCart: 0,
	},

	//For sale products + hot picks section

	{
		name: 'Yellow one-piece',
		tag: 'Yellowonepiece',
		price: 99,
		inCart: 0,
	},

	{
		name: 'Black & white bikini',
		tag: 'Blackandwhitebikini',
		price: 99,
		inCart: 0,
	},

	{
		name: 'Black & gold one-piece',
		tag: 'Blackandgoldonepiece',
		price: 110,
		inCart: 0,
	},

	{
		name: 'Leopard print bikini',
		tag: 'Leopardprintbikini2',
		price: 120,
		inCart: 0,
	},

	{
		name: 'Navy blue bikini',
		tag: 'Navybluebikini',
		price: 99,
		inCart: 0,
	},

	{
		name: 'Hot pink bikini',
		tag: 'Hotpinkbikini',
		price: 109,
		inCart: 0,
	},

	{
		name: 'Multicolored pattern bikini',
		tag: 'Multicolored pattern bikini',
		price: 110,
		inCart: 0,
	},

	{
		name: 'Lime trendy bikini',
		tag: 'Limetrendybikini',
		price: 140,
		inCart: 0,
	},

	{
		name: 'White bikini with frills',
		tag: 'Whitebikiniwithfrills',
		price: 250,
		inCart: 0,
	},

	{
		name: 'Yellow bandeau bikini',
		tag: 'Yellowbandeaubikini',
		price: 150,
		inCart: 0,
	},

	{
		name: 'Grey bikini',
		tag: 'Greybikini',
		price: 299,
		inCart: 0,
	},

	{
		name: 'White cross bikini',
		tag: 'Whitecrossbikini',
		price: 280,
		inCart: 0,
	},
];

//Adding a for loop to loop through all the products.

for (let i = 0; i < carts.length; i++) {
	//Listen for when button is clicked and show 'added to cart' text when clicked.
	carts[i].addEventListener('click', () => {
		//loops through the products.
		cartNumbers(products[i]);
		totalCost(products[i]);
	});
}

function onLoadCartNumbers() {
	//stores the data of number of items in cart even when site is refreshed.
	let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) {
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(product) {
	//add value to local storage
	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		//fetching span so number can appear on cart symbol. if first time, number is 1
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	//Adding different products to cart. Adding as clicked.
	if (cartItems != null) {
		//Update new product details.
		if (cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product,
			};
		}
		cartItems[product.tag].inCart += 1;
	} else {
		//first time clicking on a product
		product.inCart = 1;
		cartItems = {
			[product.tag]: product,
		};
	}

	//Using JSON to convert object data to javascript.
	localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

//The below function will calculate the total of the items.
function totalCost(product) {
	//console.log('The product price is', product.price);
	let cartCost = localStorage.getItem('totalCost');

	//If cart has an item added the total is calculated with all the items.
	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost + product.price);
		//reveals price of product when clicked the first time.
	} else {
		localStorage.setItem('totalCost', product.price);
	}
}

//Displaying the cart items on the shopping cart page.

function displayCart() {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector('.products');
	let cartCost = localStorage.getItem('totalCost');

	console.log(cartItems);
	if (cartItems && productContainer) {
		//Page should be empty when loaded, then we loop through the cart items.
		productContainer.innerHTML = '';
		//Checking values of oject using map.
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `<div class='product'>
			<ion-icon name="close-circle-outline"></ion-icon>
			<img src='./images/${item.tag}.jpg'>
			<span>${item.name}</span>
			</div>
		
			<div class='price'>	${item.price}.00</div>
			<div class='quantity'>
			<ion-icon name="caret-back-circle"></ion-icon>
			<span>${item.inCart} </span>
			<ion-icon name="caret-forward-circle"></ion-icon>
			</div>
			<div class='total'>${item.inCart * item.price}.00 </div>`;
		});

		productContainer.innerHTML += `<div class='basketTotalContainer>
		<h4 class='basketTotalTitle>Basket Total:</h4> 
		<h4 class='basketTotal'>
		 R${cartCost}.00
	 </h4> 
	 </div>
		
		`;
	}
}

onLoadCartNumbers();
displayCart();
