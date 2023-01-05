let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());

  console.log(value); // Borrar en futuras versiones
})
