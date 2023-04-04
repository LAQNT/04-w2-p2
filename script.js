
let booksUrl = 'https://striveschool-api.herokuapp.com/books';

async function booksFetchData(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
            console.log(data)
            books = data.map(book => {
                // ---------------select card template------------
                const bookCardTemplate = document.querySelector('#book-card-template');
                // -------define variables with DOM selector-----
                const bookCard = bookCardTemplate.content.cloneNode(true).children[0];
                
                // -------define variables with DOM selector-----
                const img = bookCard.querySelector('.card-img-top');
                const title = bookCard.querySelector('.card-title');
                const genre = bookCard.querySelector('.card-text');
                const price = bookCard.querySelector('.book-price');
                 
                // -------asign value to variables from JSON----
                img.src = book.img;
                title.textContent = book.title;
                genre.textContent = 'Genre: '+ book.category;
                price.textContent = '€ '+ book.price;

                // -------asign container for cards -----------
                const cardsContainer = document.getElementById('cards-container');

                cardsContainer.append(bookCard); 
                
                return {title: book.title, element: bookCard }
            })
            
        // -----functions call-------
        hideBook()
        searchBook()
        console.log(books)

        })
}

booksFetchData(booksUrl);



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
// function addBookToCart(x){ 
 

//         if ((x.classList.contains('.cart-added')) == false){
    
//             x.classList.add('.cart-added');
//         }
    


// }

// ----hide book card-------
function hideBook() {
    let buttonsHide = document.querySelectorAll('.bi-eye-slash-fill');

    for (let button of buttonsHide){
        button.addEventListener('click' , () => {
            button.parentElement.parentElement.style.display = 'none';
        })

    }
}
    
// ----search bar filter-------
function searchBook(x) {
    // let books = [];
    
    let searchInput = document.getElementById('search-bar');

    searchInput.addEventListener('input' , e => {
        const inputValue = e.target.value.toLowerCase();
        console.log(inputValue)
        
        books.forEach(book => {
            const isVisible = book.title.toLowerCase().includes(inputValue);
            // console.log(isVisible)

            book.element.classList.toggle('hide' , !isVisible);
        });
    })
    
//     let titles = [];
//         for (let i = 0; i < x.length; i++){
//            let title = x[i].title;
//            titles.push(title);
//         }

//     let bookCard =
    
//   searchInput.addEventListener('input', e => {
//     const inputValue = e.target.value;
//     console.log(inputValue)
 
//     titles.forEach(title => {
//       const isVisible = title.includes(inputValue);
//       title.classList.toggle('hide', !isVisible)
//     })  
//   })

    // console.log(titles)



}