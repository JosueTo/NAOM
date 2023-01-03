function getAllProducts(){
     fetch('../js/products.json')
     .then(response => response.json()).then(data => {
        data.products.forEach(product => {
            addItem(product);
        });
     })
}

function addItem(product){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+product.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+product.name+'</h5>\n' +
        '        <p class="card-text">'+product.description+'</p>\n' +
        '        <a href="#" class="btn btn-light" type="submit" style="background-color: #EFCFCF;">Agregar al carrito</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

window.addEventListener("load", () => {
    getAllProducts();
  });