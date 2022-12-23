let btnContactoEnviar = document.getElementById("btnContactoEnviar");
let idTimeout;
let correos = ["gbastoa17@gmail.com",
"josuetolvera@gmail.com",
"lore.rdz2802@gmail.com",
"ivancamposceron11@gmail.com",
"eh180793@gmail.com",
"maria.gonzalezbarrreda@gmail.com",
"marzo.2093@gmail.com",
"arguello.ramosadrian@gmail.com"];

let emailConfirmar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let telefonoConfirmar = /[0-9]{2}-[0-9]{4}-[0-9]{4}/;
let nombreConfirmar =/^[a-zA-Z-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/; 
let msjConfirmar =/^[a-zA-Z-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/; 

let nameFrom=document.getElementById("exampleFormControlInput1");
let emailFrom=document.getElementById("exampleFormControlInput2");
let cellPhone=document.getElementById("exampleFormControlInput3");
let emailBody=document.getElementById("exampleFormControlTextarea1");

btnContactoEnviar.addEventListener("click", function(event) 
{ 
    event.preventDefault();
    let validos=0;

    
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
//---------------------mensaje-----------------------
  if (emailBody.value.match(msjConfirmar) == null) {
    alertError.style.display="block";
    alertError.innerHTML +="</br> Completa el campo de mensaje";
    emailBody.style.border = "solid red 1px"
  }
  else
  {
    emailBody.style.border = "solid green 1px";
    validos++;
  }
//-----------------TimeOut--------
if ((idTimeout!=undefined) && (idTimeout!=null))
  {
    clearTimeout(idTimeout);
  }

  if (validos == 4){
    Email.send({
      SecureToken : "0d441985-cdef-4941-9931-d30a7ed8bde4",
      To : correos,
      From : `webosgeneration@gmail.com`,
      Subject : `${nameFrom.value} te ha enviado un mensaje.`,
      Body : `${emailBody.value}
              <br>
              <br>
              Informacion de contacto
              <br>
              <br>
              ${emailFrom.value}<br> 
              ${cellPhone.value}`
  }).then(
    message => alert("Su mensaje fue enviado exitosamente. Pronto nos contactaremos.")
  );
    idTimeout =  setTimeout(function()
    {
      nameFrom.style.border="";
      emailFrom.style.border="";
      cellPhone.style.border="";
    }, 3000);
    nameFrom.value = "";
    emailFrom.value = "";
    cellPhone.value = "";
    emailBody.value = "";
  }
});

cellPhone.addEventListener("keypress", (event) => {
  if(cellPhone.value.length == 2){
    cellPhone.value += '-';
  }else if(cellPhone.value.length == 7){
    cellPhone.value += '-';
  }
  // do something
});
