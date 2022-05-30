let precio = 200;
let descuento = [0.8, 0.5, 0.15];

document.getElementById("formulario").onsubmit= function(event) {
  event.preventDefault();
  let cantidad = parseInt(document.getElementById('cantidad').value);
  let categoria = parseInt(document.getElementById("categoria").value);
  let total = (cantidad * precio * (1-descuento[categoria])).toFixed(2);
  document.getElementById("total").innerText = "Total a pagar: $" + total;
}