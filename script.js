

function fetchData() {
    let url = 'https://striveschool-api.herokuapp.com/books';

    fetch(url)

    .then(response => response.json())
    .then(data => {
        result = data;
        console.log(result);


        let container = document.getElementById('cards-container');

        data.forEach(book => {
            let card = 
            `<div class="col--2 col-lg-3 col-md-4 col-6">
                <div class="card";">
                    <img src="${book.img}" class="card-img-top"    alt="${book.asin}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Genre: ${book.category}</p>

                        <div class="price-buttons">
                            <span>${'€ '+book.price}</span>

                            <div>
                                 <button class="btn btn-outline-success add-button button-circle" onclick="addBookToCart(this)" >
                                    <i class="bi bi-cart-plus" id="cart-icon"></i>
                                </button>
                                
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            container.innerHTML += card;     
        });
    })
    
    // .catch(error) => {
    //     console.error('Error found', error);
    // }
}
fetchData();


// -----add book to cart-----
let cartIcon = document.querySelector('#cart-icon');
let closeCart = document.querySelector('#close-cart');


// ----show/hide cart-------
function activeCart() {
    let cart = document.querySelector('.cart');
 
    if ((cart.classList.contains('active')) == false ){
        cart.classList.add('active');
    } else {
        cart.classList.remove('active'); 
    }
}

function hideCart() {
    let cart = document.querySelector('.cart');

    cart.classList.remove('active'); 
}

// ----add book to cart-------
function addBookToCart(x){ 


        if ((x.classList.contains('.cart-added')) == false){
    
            x.classList.add('.cart-added');
        }
    


}