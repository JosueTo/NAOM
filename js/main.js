function getAllProducts() {
    fetch('../js/products.json')
        .then(response => response.json()).then(data => {
            data.products.forEach(product => {
                addItem(product);
            });
        })
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
        <div class="card-title">${product.name.slice(0,53)}...</div>

        <div class="card-price mb-2">$500</div>
        <a href="#" class="btn btn-light" type="submit" id="addCartProd" style="background-color: #EFCFCF;"><strong>Agregar al carrito</strong></a>
    </div>
    </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



window.addEventListener("load", () => {
    getAllProducts();
    let productList = JSON.parse(localStorage.getItem("product"));
    productList.forEach(product => addItem(product));
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
        920: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: 50,
        },

    }
});