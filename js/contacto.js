let btnContactoEnviar = document.getElementById("btnContactoEnviar");
let idTimeout;

btnContactoEnviar.addEventListener("click", function(event) 
{ 
    event.preventDefault();
    let validos=0;
    
    let emailConfirmar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let telefonoConfirmar = /[0-9]{2}-[0-9]{4}-[0-9]{4}/;
    let nombreConfirmar =/^[a-zA-Z-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/; 

    let nameFrom=document.getElementById("exampleFormControlInput1");
    let emailFrom=document.getElementById("exampleFormControlInput2");
    let cellPhone=document.getElementById("exampleFormControlInput3");
    let emailBody=document.getElementById("exampleFormControlTextarea1");

    let alertError = document.getElementById("alertError");
    emailBody.value= emailBody.value.trim(); 
    alertError.style.display="none";
    alertError.innerHTML = "";

   //---------------Nombre-------------------------------
   if (nameFrom.value.match(nombreConfirmar)==null)
   {
     alertError.style.display="block";
     alertError.innerHTML += "<br/> El nombre no es valido.";
     nameFrom.style.border = "solid red 1px";
     
   }
   else
   {
    nameFrom.style.border = "solid green 1px"
    validos++;
   }

    //-------------------correo-------------------------
    if (emailFrom.value.match(emailConfirmar)==null)
  {
    alertError.style.display="block";
    alertError.innerHTML += "<br/> El correo electronico no es valido.";
    emailFrom.style.border = "solid red 1px";
    
  }
  else
  {
    emailFrom.style.border = "solid green 1px"
    validos++;
  }
   //------------------numero telefonico----------
  if(cellPhone.value.match(telefonoConfirmar)==null)
  {
    alertError.style.display="block";
    alertError.innerHTML += "<br/> Ingresa un número valido";
    cellPhone.style.border = "solid red 1px";
    
  }
  else{
    cellPhone.style.border = "solid green 1px";
    validos++;
}
if ((idTimeout!=undefined) && (idTimeout!=null))
  {
    clearTimeout(idTimeout);
  }

  if (validos == 3){
    Email.send({
      SecureToken : "6b81c250-0dd0-4825-a352-20c85c39abcd",
      To : `josuetolvera@gmail.com, josuetolverati@gmail.com`,
      From : `josuetolvera@gmail.com`,
      Subject : `${nameFrom.value} - ${emailFrom.value}`,
      Body : `Información de contacto: <br>
            ${emailFrom.value}<br> ${cellPhone.value}<br> Mensaje:<br> ${emailBody.value}`
    }).then(
    message => alert("Tu correo se envío satisfactoriamente")
      );
    idTimeout =  setTimeout(function()
    {
      nameFrom.style.border="";
      emailFrom.style.border="";
      cellPhone.style.border="";
      nameFrom.value="";
      emailFrom.value="";
      cellPhone.value="";
      emailBody.value="";
    }, 3000);

    
  }

});