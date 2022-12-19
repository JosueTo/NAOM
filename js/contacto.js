let btnContactoEnviar = document.getElementById("btnContactoEnviar");
let idTimeout;

btnContactoEnviar.addEventListener("click", function(event) 
{ 
    event.preventDefault();
    let validos=0;
    
    let emailConfirmar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let telefonoConfirmar = /[0-9]{2}-[0-9]{4}-[0-9]{4}/;
    let nombreConfirmar =/^[a-zA-Z-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/; 

    let exampleFormControlInput1=document.getElementById("exampleFormControlInput1");
    let exampleFormControlInput2=document.getElementById("exampleFormControlInput2");
    let exampleFormControlInput3=document.getElementById("exampleFormControlInput3");
    let exampleFormControlTextarea1=document.getElementById("exampleFormControlTextarea1");

    let alertError = document.getElementById("alertError");
    exampleFormControlTextarea1.value= exampleFormControlTextarea1.value.trim(); 
    alertError.style.display="none";
    alertError.innerHTML = "";

   //---------------Nombre-------------------------------
   if (exampleFormControlInput1.value.match(nombreConfirmar)==null)
   {
     alertError.style.display="block";
     alertError.innerHTML += "<br/> El nombre no es valido.";
     exampleFormControlInput1.style.border = "solid red 1px";
     
   }
   else
   {
    exampleFormControlInput1.style.border = "solid green 1px"
    validos++;
   }

    //-------------------correo-------------------------
    if (exampleFormControlInput2.value.match(emailConfirmar)==null)
  {
    alertError.style.display="block";
    alertError.innerHTML += "<br/> El correo electronico no es valido.";
    exampleFormControlInput2.style.border = "solid red 1px";
    
  }
  else
  {
    exampleFormControlInput2.style.border = "solid green 1px"
    validos++;
  }
   //------------------numero telefonico----------
  if(exampleFormControlInput3.value.match(telefonoConfirmar)==null)
  {
    alertError.style.display="block";
    alertError.innerHTML += "<br/> Ingresa un número valido";
    exampleFormControlInput3.style.border = "solid red 1px";
    
  }
  else{
    exampleFormControlInput3.style.border = "solid green 1px";
    validos++;
}
if ((idTimeout!=undefined) && (idTimeout!=null))
  {
    clearTimeout(idTimeout);
  }

  if (validos == 3){
    idTimeout =  setTimeout(function()
    {
      exampleFormControlInput1.style.border="";
      exampleFormControlInput2.style.border="";
      exampleFormControlInput3.style.border="";
    }, 3000);
  }

});
