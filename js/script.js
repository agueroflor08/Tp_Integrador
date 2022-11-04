const TICKET = 200;
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#email");
const cantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#categoria");
const totalPago = document.querySelector("#totalPago");

const btnBorrar = document.querySelector("#btnBorrar");
const btnCalcular = document.querySelector("#btnResumen");

btnBorrar.addEventListener("click", borrar);
btnCalcular.addEventListener("click", mostrarTotal);

function borrar() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  cantidad.value = "";
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
  total = parseInt(cantidad.value) * calcularDescuento() * TICKET;
  return total;
}

function mostrarTotal() {
  totalPago.textContent = calcularTotal();
}
