/* const TICKET = 200;
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#email");
const cantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#categoria");
const totalPago = document.querySelector("#totalPago");

const btnBorrar = document.querySelector("#btnBorrar");
const btnCalcular = document.queryElementById("btnResumen");

btnBorrar.addEventListener("click", borrar);
btnCalcular.addEventListener("click", mostrarTotal);

function borrar() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  categoria.value = "";
  totalPago.textContent = "";
}

function calcularDescuento() {
  switch (categoria.value) {
    case "ninguna":
      return 0;
    case "estudiante":
      return 0.8;
    case "trainee":
      return 0.5;
    case "junior":
      return 0.15;
    default:
      return false;
  }
}

function calcularTotal() {
  let total = 0;
  total = (parseInt(cantidad.value) * TICKET) - (parseInt(cantidad.value) * calcularDescuento() * TICKET);
  return total;
}

function mostrarTotal() {
  totalPago.textContent = calcularTotal();
} */

function pagoTotal(cantidad, categoria)
{
  const TICKET = 200
  let total = cantidad * TICKET

  switch (categoria){
    case "estudiante":
      total = total - (total * 80/100)
      break;
    case "trainee":
      total = total - (total * 50/100)
      break;
    case "junior":
      total = total - (total * 15/100)
      break;
  }
  return total
}

let formulario = document.getElementById("formTickets")
formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
}
)

let boton = document.getElementById("btnResumen")

boton.addEventListener("click", ()=>{
  let cantidad = document.getElementById("cantidad").value
  let categoria = document.getElementById("categoria").value
  let valor = pagoTotal(cantidad, categoria)
  let resumen = document.getElementById("inputPagar")
  resumen.textContent = "Total a pagar: $" + valor
}
)
