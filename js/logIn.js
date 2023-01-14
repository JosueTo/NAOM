let idTimeOut;
let password = document.getElementById("password");
let btnLogIn=document.getElementById("btnLogIn");
let emailConfirmar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let alertErrorPassword = document.getElementById("alertErrorPassword");
let alertCorreo = document.getElementById("alertCorreo");

let email=document.getElementById("email");
btnLogIn.addEventListener("click",function(event){
    event.preventDefault();
    let validos=0;

    //---------Email---------

    if (email.value.match(emailConfirmar)==null) {
        alertCorreo.style.display="block";
        email.style.border = "solid red 1px";
      }
      else {
        email.style.border = "solid green 1px"
        alertCorreo.style.display = "none";
        validos++;
      }
    //---------------Contraseña

    if (password.value.length < 6) {
        alertErrorPassword.style.display="block";
        password.style.border = "solid red 1px";
      } else {
        alertErrorPassword.style.display = "none";
        password.style.border = "solid green 1px";
        validos++;
      }

    //-----------------TimeOut--------
    if ((idTimeOut!=undefined) && (idTimeOut!=null)) {
    clearTimeout(idTimeout);
  }

});


