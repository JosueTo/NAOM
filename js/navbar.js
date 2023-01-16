let toggleUserView = document.getElementsByClassName("toggleUserView");
window.addEventListener("load", () => {
  if(localStorage.getItem("isLogged")){
    toggleUserView[0].innerHTML = "Hola "+JSON.parse(localStorage.getItem("isLogged")).nombre;
    toggleUserView[0].href = "";
    toggleUserView[1].innerHTML = "Cerrar sesión";
    toggleUserView[1].href = "../HTML/logIn.html";
  }
});

toggleUserView[1].addEventListener("click", () => {
  localStorage.removeItem("isLogged");
})