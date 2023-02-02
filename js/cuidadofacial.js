import { addItems, getProducts } from "./items.js";

const cardWrapper = document.getElementById("card-wrapper");
const productos = await getProducts(3).then(response => response.json());
productos.forEach(product => maquillajeItems(product));

function maquillajeItems(product) {
  cardWrapper.innerHTML += addItems(product);
}

