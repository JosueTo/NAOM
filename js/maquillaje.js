import { addItems, getAllProducts } from "./items.js";

const cardWrapper = document.getElementById("card-wrapper");


function maquillajeItems(product){
    cardWrapper.innerHTML += addItems(product);
}

window.addEventListener("load", () => {
    getAllProducts().then(products => products.forEach(product => maquillajeItems(product)));
    if(localStorage.getItem("product")){
        let productList = JSON.parse(localStorage.getItem("product"));
        productList.forEach(product => {
        maquillajeItems(product)
        });
    }
});
