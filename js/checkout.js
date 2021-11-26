// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 8
function validate(name, phone, password, email) {
    // Validate fields entered by the user: name, phone, password, and email
    // Done with Bootstrap 5 - Oscar Abad
}

// Show cart on checkout page passing the cart list from shop.html/js as localstorage object
function showCart() {
    var storedNames = JSON.parse(localStorage.getItem("cartCheckout"));
    document.querySelector('.cartCheckoutList').innerHTML = storedNames;
    return storedNames;
}
showCart()

// draw footer on this page
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

function checkCreditCard() {
    // here we could check the credit card number with regular expressions to format with spaces and check the bank name.    
}