function getAllProducts(){
     fetch('../js/products.json')
     .then(response => response.json()).then(data => {
        data.products.forEach(product => {
            addItem(product);
        });
     })
}

function addItem(product){
    const itemHTML = `<div class="card" style="width: 18rem;">
            <img src="${product.file}" style="width:120px; height:120px;"class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-light" type="submit" style="background-color: #EFCFCF;">Agregar al carrito</a>
            </div>
        </div>
        <br/>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

window.addEventListener("load", () => {
    getAllProducts();
    let product = JSON.parse(localStorage.getItem("product"));
    addItem(product);
  });