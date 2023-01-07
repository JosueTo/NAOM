let form = document.getElementById("form");
let alertError2 = document.getElementById("alertError2");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  alertError2.innerHTML = "";
  alertError2.style.display="none";
  const data = new FormData(e.target);
  const product = Object.fromEntries(data.entries());

  let valido = true;
  //console.log(parseInt(value.price))

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


