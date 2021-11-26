// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
// added image prop with the product image
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        image: './images/cooking-oil.jpg'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        image: './images/pasta.jpg'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        image: './images/instant-cupcake-mixture.jpg'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        image: './images/all-in-1.jpg'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        image: './images/zero-makeup-kit.jpg'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        image: './images/lip-tints.jpg'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
        image: './images/lawn-dress.jpg'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        image: './images/lawn-chiffon-combo.jpg'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        image: './images/toddler-frock.jpg'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];
var cart = [];
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let total = 0;

let subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};

// Exercise 1 (deprecated)
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // products.forEach(function(product) {
    //     if (product.id == id) {
    //         // 2. Add found product to the cartList array
    //         cartList.push(product);
    //         console.log(cartList);
    //     }
    // });
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array    
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    // let subTotals = {
    //     subtotalGrocery: 0,
    //     subtotalBeauty: 0,
    //     subtotalClothes: 0
    // };
    subtotal = {
        grocery: {
            value: 0, 
            discount: 0
        },
        beauty: {
            value: 0, 
            discount: 0
        },
        clothes: {
            value: 0, 
            discount: 0
        },
    };

    applyPromotionsCart()

    console.log('cart calculateSubtotals',cart);
    cart.forEach(function(product) {
        // refactor applypromotions foreach
        subtotal[product.type].value += product.price * product.quantity;
        subtotal[product.type].discount += product.subtotalWithDiscount;
        // if (product.type == 'grocery') {
        //     subtotal.grocery.value += product.price * product.quantity;
        // } else if (product.type == 'beauty') {
        //     subtotal.beauty.value += product.price * product.quantity;
        // } else if (product.type == 'clothes') {
        //     subtotal.clothes.value += product.price * product.quantity;
        // }
    });
    // console.log('subtotal GBC', subtotalGrocery, subtotalBeauty, subtotalClothes);
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    total = 0;
    applyPromotionsCart();

    cart.forEach(function(product) {
        total += product.subtotalWithDiscount;
    });
    
    return total;
}

// Exercise 5 (deprecated)
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // cartList.forEach(function(product) {
    //     var found = false;
    //     cart.forEach(function(item) {
    //         if (item.id == product.id) {
    //             item.quantity += 1;
    //             found = true;
    //         }
    //     });
    //     if (!found) {
    //         cart.push({
    //             id: product.id,
    //             name: product.name,
    //             price: product.price,
    //             quantity: 1
    //         });
    //     }
    // });
    // console.log('generateCart(cart)',cart); 
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // console.log(JSON.stringify(cart, null, 2));
    cart.forEach(function(item) {
        switch (item.name) {
            case 'Cooking oil':
                if (item.quantity >= 3) {
                    item.subtotalWithDiscount = 10;
                } else {
                    item.subtotalWithDiscount = item.price * item.quantity;
                }
                break;
            case 'Instant cupcake mixture':
                if (item.quantity >= 10) {
                    item.subtotalWithDiscount = item.subtotal * 0.66;
                } else {
                    item.subtotalWithDiscount = item.price * item.quantity;
                }
                break;
            default:
                item.subtotalWithDiscount = item.price * item.quantity;
                break;
        }
    });
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    products.forEach(function(product) {
        if (product.id === id) {
            var found = false;
            cart.forEach(function(item) {
                if (item.id === product.id) {
                    item.quantity += 1;
                    item.subtotal = item.price * item.quantity;
                    found = true;
                }
            });
            if (!found) {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    type: product.type,
                    quantity: 1,
                    subtotal: product.price,
                    subtotalWithDiscount: product.price,
                });
            }
        }
    });

    showItemCounter();
    
    // calculateSubtotals();
    // calculateTotal();    
    console.log(cart);
}

function showItemCounter(){
    // cart Item counter to show in the cart button
    document.querySelector('.cart-counter').innerHTML = cart.map(item => item.quantity).reduce((a, b) => a + b, 0);
    // cart item counter to show in the modal cart
    document.querySelector('.modal-items-counter').innerHTML = cart.map(item => item.quantity).reduce((a, b) => a + b, 0) + ' items in your cart.';
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    console.log('Estoy en RemoveFromHell')

    cart.forEach(function(item) {
        if (item.id === id) {
            item.quantity -= 1;
            item.subtotal = item.price * item.quantity;
            item.subtotalWithDiscount = item.price * item.quantity;
            if (item.quantity === 0) {
                cart.splice(cart.indexOf(item), 1);
            }
        }
    });
    
    showItemCounter()
    printCart();
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    // add cart to a list in the class .modal-body as a list of items
    calculateSubtotals();
    calculateTotal();

    let cartCheckout = window.document.querySelector('.modal-body .list').innerHTML = cart.map(function(item) {
        if ((item.quantity >= 3 && item.name === 'Cooking oil') ||
            (item.quantity >= 10 && item.name === 'Instant cupcake mixture')) {
            return `<li class="d-block d-flex justify-content-between p-1 mx-0 bg-light rounded shadow">
                <button type="button" onclick="removeFromCart(${item.id})" class="btn btn-danger" style="padding:0.3rem;">X</button>
                <span class="flex-grow-1 ms-2 justify-content-start align-self-middle">                    
                    <h6 class="px-2 m-0 align-self-center"><strong>${item.name}</strong></h6>
                    <span class="align-self-center px-2 fs-7">$${item.price.toFixed(2)} x ${item.quantity} =</span>
                    <span class="align-self-center px-2 fs-7"><strike>$${item.subtotal.toFixed(2)}</strike> Disc.</span>
                </span>
                <strong class="col-2 p-0 pe-2 align-self-center ms-auto justify-content-start text-end">$${item.subtotalWithDiscount?.toFixed(2)}</strong>
            </li>`;
        } else {
            return `<li class="d-block d-flex justify-content-between p-1 mx-0 bg-light rounded shadow">
                <button type="button" onclick="removeFromCart(${item.id})" class="btn btn-danger" style="padding:0.3rem;">X</button>
                <span class="flex-grow-1 ms-2 justify-content-start align-self-middle">                    
                    <h6 class="px-2 m-0 align-self-center"><strong>${item.name}</strong></h6>
                    <span class="align-self-center px-2 fs-7">$${item.price.toFixed(2)} x ${item.quantity} =</span>
                    <span class="align-self-center px-2 fs-7">$${item.subtotal.toFixed(2)}</span>
                </span>
                <strong class="col-2 p-0 pe-2 align-self-center ms-auto text-end">$${item.subtotalWithDiscount?.toFixed(2)}</strong>
            </li>`;
        }
    }).join(``)
    + `<li class="subtotals text-right p-1 px-4 text-primary"><strong>Subtotal Grocery:  $${subtotal.grocery.discount.toFixed(2)}</strong></li>`
    + `<li class="subtotals text-right p-1 px-4 text-primary"><strong>Subtotal Beauty:  $${subtotal.beauty.discount.toFixed(2)}</strong></li>`
    + `<li class="subtotals text-right p-1 px-4 text-primary"><strong>Subtotal Clothes:  $${subtotal.clothes.discount.toFixed(2)}</strong></li>`
    + `<li class="subtotals text-right p-2 px-4"><strong>Total: $${total.toFixed(2)}</li>`;

    // store the cart object in local storage
    localStorage.setItem("cartCheckout", JSON.stringify(cartCheckout));

    return cartCheckout;
}

// send Total from total variable in shop.html and shop.js, and send it to checkout.html, and open it
// TO-DO
function checkout(total) {
    total = total;
    window.open("checkout.html", "_self").document.querySelector('.total').innerHTML = total.toFixed(2);
}


// Search product Function
function searchProduct(search) {
    // reduce header image height
    document.querySelector('header').style.height = '200px';
    // look for product and show it
    // TO DO (undefined instead type of product)
    search = document.querySelector('input').value.toLowerCase();
    products.forEach(function(product) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            searchResult = product.type;
            return document.querySelector('.searchContainer').innerHTML = `
            <div id="${product.type}" class="row ml-3 m-5 d-flex wrap justify-content-center">
                <h4>Section: ${product.type}</h4>
                
                <a class="text-decoration-none text-dark" onclick="showSearchResult()" href="shop.html">
                    <div  class="card m-1 ml-5 p-4" style="width: 18rem;">
                        <img src="${product.image}" class="grocery-img">
                        <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <h1 class="card-text">$${product.price}</h1>
                        <!-- <button type="button" onclick="addToCart(4)" class="btn btn-primary">Add to cart</button> -->
                        </div>
                    </div>
                </a>
                
            </div>
            `
        }
    });
}
// function to open the shop.html and point to type of product anchor
// TO-DO the type doesnt work, gives undefined
function showSearchResult(searchResult) {
    window.open("shop.html#"+searchResult, "_self");
}

// draw footer on this page function
function showFooter() {
    return window.document.querySelector('footer').innerHTML =
        `<!-- footer -->
        <footer>
            <div class="container-fluid bg-light">
                <div class="row">
                    <div class="col-md-12">
                        <div class="footer-copyright text-center py-3">
                            <p>Copyright &copy; 2020 ShopNow</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`;
}
showFooter();