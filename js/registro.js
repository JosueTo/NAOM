let idTimeOut;
let btnRegistro=document.getElementById("btnRegistro");
let emailConfirmar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let telefonoConfirmar = /[^0]{1}[0-9]{2}-[0-9]{4}-[0-9]{4}/;
let nombreConfirmar =/^[a-zA-Z-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let apellidoConfirmar=/^[a-zA-Z-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let email=document.getElementById("email");
let tel=document.getElementById("tel");
btnRegistro.addEventListener("click",function(event){
    event.preventDefault();
    let validos=0;

    
    let alertError = document.getElementById("alertError");
    email.value= email.value.trim(); 
    alertError.style.display="none";
    alertError.innerHTML = "";
//---------------Nombre-------------------------------
if (nombre.value.match(nombreConfirmar)==null)
{
  alertError.style.display="block";
  alertError.innerHTML += "<br/> El nombre no es válido.";
  nombre.style.border = "solid red 1px";
  
}
else
{
 nombre.style.border = "solid green 1px"
 validos++;
}
//---------------Apellido-------------------------------
if (apellido.value.match(apellidoConfirmar)==null)
{
  alertError.style.display="block";
  alertError.innerHTML += "<br/> El apellido no es válido.";
  apellido.style.border = "solid red 1px";
  
}
else
{
 apellido.style.border = "solid green 1px"
 validos++;
}

//------------------numero telefonico----------
if(tel.value.match(telefonoConfirmar)==null)
{
 alertError.style.display="block";
 alertError.innerHTML += "<br/> Ingresa un número válido";
 tel.style.border = "solid red 1px";
 
}
else{
 tel.style.border = "solid green 1px";
 validos++;
}

//-----------------TimeOut--------
if ((idTimeout!=undefined) && (idTimeout!=null))
{
 clearTimeout(idTimeout);
}
//---------Email---------
if (email.value.match(emailConfirmar)==null)
{
  alertError.style.display="block";
  alertError.innerHTML += "<br/> El correo electrónico no es válido.";
  email.style.border = "solid red 1px";
  
}
else
{
  email.style.border = "solid green 1px"
  validos++;
}
if ((idTimeout!=undefined) && (idTimeout!=null))
  {
    clearTimeout(idTimeout);
  }
});

tel.addEventListener("keypress", (event) => {
if(tel.value.length == 2){
 tel.value += '-';
}else if(tel.value.length == 7){
 tel.value += '-';
}
// do something
});
