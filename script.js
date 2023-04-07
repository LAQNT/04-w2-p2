
var booksData;

function getData () {
    return fetch('https://striveschool-api.herokuapp.com/books')
    
    .then(response => response.json())
    .then((data) => {
        booksData = data; 
        insertBookCards(data);
        hideBook();
        



    })
    .then (() => {console.log(booksData)})    
    
    
    .catch(err => console.log(err))
    .finally(() => {
        let spinner = document.querySelector('.spinner');
        spinner.classList.add('hide');    
    })
}

getData()


console.log(booksData)



function insertBookCards(data){
    
    const cardsContainer = document.getElementById('cards-container');
            
    data.map(book => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('col-2', 'col-lg-3', 'col-md-4', 'col-6') 
        bookCard.innerHTML = `

            <div class="card">
                <i class="bi bi-eye-slash-fill"></i>
                <img src="${book.img}" class="card-img-top"  alt="">
                
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Catgeory: ${book.category}</p>
                    <p class="card-text asin">Id: ${book.asin}</p>
        
                    <div class="price-buttons">
                        <span class="book-price">€ ${book.price}</span>
                        <div>
                             <button class="btn btn-outline-success add-button button-circle" onclick= addToCart("${book.asin}") id="addToCart">
                                <i class="bi bi-cart-plus"  id="cart-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>    
           `                
        cardsContainer.append(bookCard); 
    })   
}

// -----------hide book card-------------
function hideBook() {
    let buttonsHide = document.querySelectorAll('.bi-eye-slash-fill');

    for (let button of buttonsHide){
        button.addEventListener('click' , () => {
            button.parentElement.parentElement.style.display = 'none';
        })

    }
}
  

// -------------------------non async func--------------------

// --------------add to shopping cart-------

let cart = [];

function addToCart(clickAsin) {
    
    if(cart.some((i) => i.asin == clickAsin)){
        console.log('sisisisisis')
    } else {
        let item = booksData.find((book) => book.asin == clickAsin);   
        cart.push(item);
        console.log(cart)
    }
    let counterSpan = document.querySelector('.total span')
        let counter = cart.length
        counterSpan.innerHTML = counter;

    let shoppingCart = document.querySelector('.cart-content')

    for (book of cart){
        
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('col','mb-3');
        cardContainer.innerHTML = `
            <div class="card-body" >
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div>
                        <img src="${book.img}" class="img-fluid rounded-1" alt="Shopping item" style="width: 65px;">
                        </div>
                        <div class="ms-3">
                            <span>${book.title}</span>
                            <span class="small mb-0">${book.asin}</span>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                            <h5 class="fw-normal mb-0">1</h5>
                        </div>
                        <div style="width: 80px;">
                            <h6 class="mb-0">${book.price}</h6>
                        </div>
                        <a href="#!" style="color: #cecece;" class="trash-item" onclick="trashItem(event)"><i class="fas fa-trash-alt"></i></a>
                    </div>
                </div>
            </div>
            `
            shoppingCart.appendChild(cardContainer)                   
        }
           

}

// --------------add to shopping cart-------
// function cartCounter() {
// }
// cartCounter()

// --------------search bar filter-------
function searchBook(x) {
    let searchInput = document.getElementById('search-bar');
  
    searchInput.addEventListener('input' , e => {
        const inputValue = e.target.value.toLowerCase();
        console.log(inputValue)
        
        books.forEach(book => {
            const isVisible = book.title.toLowerCase().includes(inputValue);
            
                book.element.classList.toggle('hide' , !isVisible);
            });
        })
}




// -----------show/hide cart-------------
function activeCart() {
    let cart = document.querySelector('.cart');
    
    if ((cart.classList.contains('active')) == false ){
        cart.classList.add('active');
    } else {
        cart.classList.remove('active'); 
    }
}

  
// --------------close cart--------------
function hideCart() {
    let cart = document.querySelector('.cart');

    cart.classList.remove('active'); 
}










        //  addToCart() 

                // // ---------------select card template------------
                // const bookCardTemplate = document.querySelector('#book-card-template');
                // // ------------clone template content ------------
                // let bookCard = bookCardTemplate.content.cloneNode(true).children[0];

                // // -------define variables with DOM selector-----
                // const img = bookCard.querySelector('.card-img-top');
                // const title = bookCard.querySelector('.card-title');
                // const genre = bookCard.querySelector('.card-text');
                // let asin = bookCard.querySelector('.asin');
                // const price = bookCard.querySelector('.book-price');
                 
                // // -------asign value to variables from JSON----
                // img.src = book.img;
                // title.textContent = book.title;
                // genre.textContent = 'Genre: '+ book.category;
                // asin.textContent = 'id: '+ book.asin;
                // price.textContent = '€ '+ book.price;

                // // -------asign container for cards -----------
                // const cardsContainer = document.getElementById('cards-container');

                // cardsContainer.append(bookCard); 
                       