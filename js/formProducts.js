let form = document.getElementById("form");
let alertError2 = document.getElementById("alertError2");
let img = document.getElementById("form0");
let name1 = document.getElementById("form1");
let price = document.getElementById("form2");
let description = document.getElementById("form3");
let stock = document.getElementById("form4");
let prevImg = document.getElementById("prevImg");
let image;

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
  alertError2.innerHTML = "";
  alertError2.style.display="none";


  let valido = true;

  let product = {"name":`${name1.value}`,
      "price":`${price.value}`,
      "description":`${description.value}`,
      "stock":`${stock.value}`,
      "file":`${image}`}

  if (product.name.length < 3 || product.name.length > 20)
  {
    valido = false;
    alertError2.style.display="block";
    alertError2.innerHTML += "<br/> El nombre debe contener entre 3-20 caracteres";
  }

  
  if (parseInt(product.price)<=0 || isNaN(parseInt(product.price)))
  {
    valido = false;
    alertError2.style.display="block";
    alertError2.innerHTML += "<br/> Ingresa un precio valido";
  }

  if (product.description.length < 15)
  {
    valido = false;
    alertError2.style.display="block";
    alertError2.innerHTML += "<br/> La descripcion debe contener mas de 15 caracteres";
  }

  if (parseInt(product.stock) < 0 || isNaN(parseInt(product.stock)) )
  {
    valido = false;
    alertError2.style.display="block";
    alertError2.innerHTML += "<br/>Ingresa productos disponibles";
  }

  if(valido){
    localStorage.setItem("product", JSON.stringify(product));
  }
})


