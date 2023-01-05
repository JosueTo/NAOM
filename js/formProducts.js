let form = document.getElementById("form");
let alertError2 = document.getElementById("alertError2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alertError2.innerHTML = "";
  alertError2.style.display="none";
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());

 

  console.log(value); // Borrar en futuras versiones
  //console.log(value.name);

  value.name
  value.price
  value.description
  value.stock
  let valido = true;
  //console.log(parseInt(value.price))

  if (value.name.length < 3 || value.name.length > 20)
  {
    valido = false;
    alertError2.style.display="block";
    alertError2.innerHTML += "<br/> El nombre debe contener entre 3-20 caracteres";
  }

  
  if (parseInt(value.price)<=0 || isNaN(parseInt(value.price)))
  {
    valido = false;
    alertError2.style.display="block";
    alertError2.innerHTML += "<br/> Ingresa un precio valido";
  }

  if (value.description.length < 15)
  {
    valido = false;
    alertError2.style.display="block";
    alertError2.innerHTML += "<br/> La descripcion debe contener mas de 15 caracteres";
  }

  if (parseInt(value.stock) < 0 || isNaN(parseInt(value.stock)) )
  {
    valido = false;
    alertError2.style.display="block";
    alertError2.innerHTML += "<br/>Ingresa productos disponibles";
  }
 

})


