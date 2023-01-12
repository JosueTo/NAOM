let form = document.getElementById("form");
let img = document.getElementById("form0");
let name1 = document.getElementById("form1");
let price = document.getElementById("form2");
let description = document.getElementById("form3");
let stock = document.getElementById("form4");
let prevImg = document.getElementById("prevImg");
let btnProductCancel = document.getElementById("btnProductCancel");
let btnProduct = document.getElementById("btnProduct");
let alertSuccess = document.getElementById("alertSuccess");
let image;

let alertName = document.getElementById("alertProductName");
let alertPrice = document.getElementById("alertPrice");
let alertDescription = document.getElementById("alertDescription");
let alertStock = document.getElementById("alertAvailable");
let alertImg = document.getElementById("alertFile");

function encodeImageFileAsURL(element) {
  let file = element.files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
    image = reader.result;
    prevImg.src = reader.result;
  }
  reader.readAsDataURL(file);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  alertSuccess.innerHTML = "";
  alertSuccess.style.display="none";


  let valido = true;

  let product = {"name":`${name1.value}`,
      "price":`${price.value}`,
      "description":`${description.value}`,
      "stock":`${stock.value}`,
      "file":`${image}`}

  if (product.name.length < 3 || product.name.length > 20)
  {
    valido = false;
    alertName.style.display="block";
    name1.style.border = "solid red 1px";
  } else {
    name1.style.border = "solid green 1px";
    alertName.style.display="none";
  }

  
  if (parseInt(product.price)<=0 || isNaN(parseInt(product.price)))
  {
    valido = false;
    alertPrice.style.display="block";
    price.style.border = "solid red 1px";
  } else {
    alertPrice.style.display="none";
    price.style.border = "solid green 1px";
  }

  if (product.description.length < 15)
  {
    valido = false;
    alertDescription.style.display="block";
    description.style.border = "solid red 1px";
  } else {
    alertDescription.style.display="none";
    description.style.border = "solid green 1px";
  }

  if (image == undefined){
    valido = false;
    alertImg.style.display = "block";
  }else{
    alertImg.style.display = "none";
  }

  if (parseInt(product.stock) < 0 || isNaN(parseInt(product.stock)) )
  {
    valido = false;
    alertStock.style.display="block";
    stock.style.border = "solid red 1px";
  } else {
    alertStock.style.display="none";
    stock.style.border = "solid green 1px";
  }

  if(valido){
    if(localStorage.getItem("product")){
      let productList = JSON.parse(localStorage.getItem("product"));
      productList.push(product);
      localStorage.setItem("product", JSON.stringify(productList));
      alertSuccess.style.display="block";
      alertSuccess.innerHTML += "Se agregó el producto correctamente."
      form.reset();
      prevImg.src = "../Fotos_pagina/photo-camera.png";
    }else{
      let productList = [product];
      localStorage.setItem("product",JSON.stringify(productList))
      alertSuccess.style.display="block";
      alertSuccess.innerHTML += "Se agregó el producto correctamente."
      form.reset();
      prevImg.src = "../Fotos_pagina/photo-camera.png";
    }
    
  }
})

btnProductCancel.addEventListener("click", (e) => {
  e.preventDefault();
  name1.value = "";
  price.value = "";
  description.value = "";
  stock.value = "";
  img = undefined;
  prevImg.src = "../Fotos_pagina/photo-camera.png";
  alertName.style.display="none";
  alertPrice.style.display="none";
  alertDescription.style.display="none";
  alertStock.style.display="none";
  name1.style.border = "";
  price.style.border = "";
  description.style.border = "";
  stock.style.border = "";
  alertImg.style.display = "none";
});


