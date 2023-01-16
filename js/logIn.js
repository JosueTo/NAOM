let idTimeOut;
let password = document.getElementById("password");
let btnLogIn=document.getElementById("btnLogIn");
let email = document.getElementById("email");
// let emailConfirmar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let alertErrorPassword = document.getElementById("alertErrorPassword");
let alertCorreo = document.getElementById("alertCorreo");


btnLogIn.addEventListener("click",function(event){
    event.preventDefault();
    let validos=0;

    //-----------------TimeOut--------
    if ((idTimeOut!=undefined) && (idTimeOut!=null)) {
    clearTimeout(idTimeout);
  }

  let isLogged = {"nombre":`${getNameFromEmail(email.value)}`,
                  "email":`${email.value}`
                }
  
  //---------------- Validación Usuario-------
  if (validateUserLoggedIn(email.value, password.value)) {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
  }
}
)

function validateUserLoggedIn(email, password) {
      let registroList = JSON.parse(localStorage.getItem("registro"));
      
      for (const user in registroList) {
        if (registroList[user].email === email && registroList[user].password === password) {
          return true;
        }
      }
      return false;
  }

function getNameFromEmail(email) {
  let registroList = JSON.parse(localStorage.getItem("registro"));
  for (const user in registroList) {
    if (email === registroList[user].email) return registroList[user].nombre;
  }

  return "";
}
;


