import { addItems, getProducts } from "./items.js";

const cardWrapper = document.getElementById("card-wrapper");
let maxVal = document.getElementById("maxVal");
let minVal = document.getElementById("minVal");
const filtrarBtn = document.getElementById("filtrarBtn");
const productos = await getProducts(1).then(response => response.json());
productos.forEach(product => maquillajeItems(product));

function maquillajeItems(product) {
  cardWrapper.innerHTML += addItems(product);
}



filtrarBtn.addEventListener("click", () => {
  cardWrapper.innerHTML = "";
  let min = minVal.value;
  let max = maxVal.value;

  if (!min) {
    min = "0";
  }

  if (!max) {
    max = "1500";
  }

  getAllProducts().then((products) =>
    products
      .filter((product) => {
        if (product.price >= parseInt(min) && product.price <= parseInt(max))
          return true;
      })
      .forEach((product) => maquillajeItems(product))
  );
  if (localStorage.getItem("product")) {
    let productList = JSON.parse(localStorage.getItem("product"));
    productList
      .filter((product) => {
        if (product.price >= parseInt(min) && product.price <= parseInt(max))
          return true;
      })
      .forEach((product) => maquillajeItems(product));
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   let btnAddCart = document.getElementsByClassName("addCartProd");
//   for (let i = 0; i < btnAddCart.length; i++) {
//     btnAddCart[i].addEventListener("submit", () => {
//       if (localStorage.getItem("carrito")) {
//         let carritoList = JSON.parse(localStorage.getItem("carrito"));
//         carritoList.push(btnAddCart[i].id);
//         localStorage.setItem("carrito", JSON.stringify(carritoList));
//       } else {
//         let carritoList = [btnAddCart[i].id];
//         localStorage.setItem("carrito", JSON.stringify(carritoList));
//       }
//     });
//   }
// });
