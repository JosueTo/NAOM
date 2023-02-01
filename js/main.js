import { addItem, getAllProducts } from "./items.js";

const itemsContainer = document.getElementById("list-items");



function novedadesItems(product) {
    itemsContainer.innerHTML += addItem(product);
}



window.addEventListener("load", () => {
    getAllProducts().then(response => response.json()).then(products => {
        console.log(products);
        products.forEach(product => novedadesItems(product))});
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
        1200: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    }
});