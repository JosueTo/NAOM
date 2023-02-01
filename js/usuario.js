import { getUser } from "./auth.js";

let tableOrders = document.getElementById("tableOrders");
let userInfo = document.getElementById("userInfo");
let userAddress = document.getElementById("userAddress");

window.addEventListener("load", () => {
    getUser(localStorage.getItem("token"))
    .then(response => response.json())
    .then(usuario => {
        usuario.ordenes.forEach(orden => {
            tableOrders.innerHTML += addUserOrders(orden,usuario.direccion)
        })

        userInfo.innerHTML = `Nombre: ${usuario.nombre} ${usuario.apellido}<br><br>
        Correo: ${usuario.correo}<br><br>
        Telefono: ${usuario.telefono}<br>`

        userAddress.innerHTML = `${usuario.direccion}`
    });
})

function addUserOrders(orden,direccion) {
    return `
      <tr>
      <td>${orden.id}</td>
      <td>${orden.fecha}</td>
      <td>${direccion}</td>
      <td>${orden.totalOrden}</td>
      <td>${orden.estado}</td>
      </tr>
      `;
}