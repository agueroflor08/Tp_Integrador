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
