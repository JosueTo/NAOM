export function addItem(product) {
    return `
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
}

export function addItems(product) {
    return `
    <div class="card col-xl-3 col-lg-4 col-sm-9 col-10 my-2 mx-1">
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
}

export function getAllProducts() {
   return fetch('../js/products.json')
        .then(response => response.json()).then(data => data.products);
}