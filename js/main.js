function getAllProducts() {
    let productList = [];
    fetch('../js/products.json')
        .then(response => response.json()).then(data => {
            data.products.forEach(product => {
                productList.push(product);
            })
            localStorage.setItem("product", JSON.stringify(productList));
            });
}

function addItem(product) {
    const itemHTML = 
    `
    <div class="swiper-slide">
    <img src="${product.file}" "class="card-img-top" alt="image">
    <div class="card-body"><br>
    <div class="hearts-outer">
            <div class="hearts-inner" style="width:100%;"></div>
        </div>
        <div class="card-title">
        <p class="card-title">${product.name.slice(0,53)}...</p>
        </div>

        <div class="card-price">$500</div>
    </div>
    <a href="#" class="btn btn-light addCartProd mt-1 mb-2 position-relative bottom-0" type="submit" style="background-color: #EFCFCF;"><strong>Agregar al carrito</strong></a>
    </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



window.addEventListener("load", () => {
    if(!localStorage.getItem("product")){
        getAllProducts();
    }
    let productList = JSON.parse(localStorage.getItem("product"));
    productList.forEach(product => {
        addItem(product)
    });
});


// Carousel
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    }
});