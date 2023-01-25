import { addItems, getAllProducts } from "./items.js";

const cardWrapper = document.getElementById("card-wrapper");
let maxVal = document.getElementById("maxVal");
let minVal = document.getElementById("minVal");

function maquillajeItems(product) {
    cardWrapper.innerHTML += addItems(product);
}

window.addEventListener("load", () => {
    getAllProducts().then(products => products.forEach(product => maquillajeItems(product)));
    if (localStorage.getItem("product")) {
        let productList = JSON.parse(localStorage.getItem("product"));
        productList.forEach(product => {
            maquillajeItems(product)
        });
    }
});

maxVal.addEventListener("keyup", () => {
    cardWrapper.innerHTML = "";
    let min = minVal.value;
    let max = maxVal.value;


    if (!min) {
        min = "0";
    }

    if (!max) {
        max = "1500";
    }

    
    getAllProducts().then(products => products.filter(product => {
        if (product.price >= parseInt(min) && product.price <= parseInt(max)) return true;
    }).forEach(product => maquillajeItems(product)))
    if (localStorage.getItem("product")) {
        let productList = JSON.parse(localStorage.getItem("product"));
        productList.filter(product => {
            if (product.price >= parseInt(min) && product.price <= parseInt(max)) return true;
        }).forEach(product => maquillajeItems(product))
    }
})


minVal.addEventListener("keyup", () => {
    cardWrapper.innerHTML = "";
    let min = minVal.value;
    let max = maxVal.value;

    if (!min) {
        min = "0";
    }

    if (!max) {
        max = "1500";
    }

    
    getAllProducts().then(products => products.filter(product => {
        if (product.price >= parseInt(min) && product.price <= parseInt(max)) return true;
    }).forEach(product => maquillajeItems(product)))
    if (localStorage.getItem("product")) {
        let productList = JSON.parse(localStorage.getItem("product"));
        productList.filter(product => {
            if (product.price >= parseInt(min) && product.price <= parseInt(max)) return true;
        }).forEach(product => maquillajeItems(product))
    }
})


