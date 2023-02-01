import { addItems, getProducts } from "./items.js";

const cardWrapper = document.getElementById("card-wrapper");

function maquillajeItems(product) {
  cardWrapper.innerHTML += addItems(product);
}

window.addEventListener("load", () => {
  getProducts(2).then(response => response.json())
  .then(products => products.forEach(product => maquillajeItems(product)))
});