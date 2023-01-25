export function addItem(product) {
    return `
    <div class="swiper-slide">
    <img src="${product.file}" "class="card-img-top" alt="image">
    <div class="card-body"><br>
    <div class="hearts-outer">
            <div class="hearts-inner" style="width:100%;"></div>
        </div>
        <div class="card-title">
        <p class="card-title"><font color="#1C315E">${product.name.slice(0,53)}...</font></p>
        </div>

        <div class="card-price">$${product.price}</div>
    </div>
    <a href="#" class="addCartProd mt-1 mb-2 position-relative bottom-0" type="submit"><strong>Agregar al carrito</a>
    </div>
    `;
}

export function addItems(product) {
    return `
    <div class="card col-xl-2 col-lg-3 col-sm-5 col-10  my-2 mx-2">
    <div class="text-center">
    <img src="${product.file}" "class="card-img-top" alt="image">
    </div>
    <div class="card-body"><br>
    <div class="hearts-outer">
            <div class="hearts-inner" style="width:100%;"></div>
        </div>
        <div class="card-title text-center">
        <p class="card-text mb-3"><font color="#1C315E">${product.name}</font></p>
        </div>

        <div class="card-price">$${product.price}</div>
    </div>
    <a href="#" class="addCartProd mt-1 mb-2 position-relative bottom-0" type="submit">Agregar al carrito</strong></a>
    </div>
    `;
}

export function getAllProducts() {
   return fetch('../js/products.json')
        .then(response => response.json()).then(data => data.products);
}


//Se va a implementar cuando el API este funcional.
// export async function searchResult(keyword){
//     return fetch("APIURL"+keyword);
// }