// Variables para almacenar las ventas de cada vendedor
let juanaVentas = [0, 0, 0, 0];
let pedroVentas = [0, 0, 0, 0];

// Función para validar un número
function validarNumero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Función para calcular y mostrar el empleado del mes
function calcularEmpleadoDelMes() {
  // Obtener las cantidades vendidas por Juana
  let juanaAqua = document.getElementById("juana-aqua").value;
  let juanaEmocion = document.getElementById("juana-emocion").value;
  let juanaAlegria = document.getElementById("juana-alegria").value;
  let juanaFrescura = document.getElementById("juana-frescura").value;

  // Validar las cantidades vendidas por Juana
  if (!validarNumero(juanaAqua) || !validarNumero(juanaEmocion) || !validarNumero(juanaAlegria) || !validarNumero(juanaFrescura)) {
    alert("Por favor, ingresa solo valores numéricos para las ventas de Juana.");
    return;
  }

  // Actualizar las ventas de Juana
  juanaVentas = [parseInt(juanaAqua), parseInt(juanaEmocion), parseInt(juanaAlegria), parseInt(juanaFrescura)];

  // Obtener las cantidades vendidas por Pedro
  let pedroAqua = document.getElementById("pedro-aqua").value;
  let pedroEmocion = document.getElementById("pedro-emocion").value;
  let pedroAlegria = document.getElementById("pedro-alegria").value;
  let pedroFrescura = document.getElementById("pedro-frescura").value;

  // Validar las cantidades vendidas por Pedro
  if (!validarNumero(pedroAqua) || !validarNumero(pedroEmocion) || !validarNumero(pedroAlegria) || !validarNumero(pedroFrescura)) {
    alert("Por favor, ingresa solo valores numéricos para las ventas de Pedro.");
    return;
  }

  // Actualizar las ventas de Pedro
  pedroVentas = [parseInt(pedroAqua), parseInt(pedroEmocion), parseInt(pedroAlegria), parseInt(pedroFrescura)];

  // Calcular la suma total de dinero recolectada por cada vendedor
  let juanaTotal = juanaVentas[0] * 200 + juanaVentas[1] * 180 + juanaVentas[2] * 160 + juanaVentas[3] * 150;
  let pedroTotal = pedroVentas[0] * 200 + pedroVentas[1] * 180 + pedroVentas[2] * 160 + pedroVentas[3] * 150;

  // Verificar quién es el empleado del mes
  let empleadoDelMes = "";
  let totalVentaEmpleado = undefined
  if (juanaTotal > pedroTotal) {
    empleadoDelMes = "Juana";
    totalVentaEmpleado = juanaTotal
  } else if (pedroTotal > juanaTotal) {
    empleadoDelMes = "Pedro";
    totalVentaEmpleado = pedroTotal
  } else {
    empleadoDelMes = "Empate";
    totalVentaEmpleado = "Fue un empate"
  }
  let ocultar=document.getElementsByClassName("container")
  for (let index = 0; index < ocultar.length; index++) {
    
    ocultar[index].style.display='none'
    
  }
  // Mostrar los resultados en la consola
  console.log("Ventas de Juana: " + juanaVentas);
  console.log("Total recolectado por Juana: $" + juanaTotal);
  console.log("Ventas de Pedro: " + pedroVentas);
  console.log("Total recolectado por Pedro: $" + pedroTotal);
  console.log("Empleado del mes: " + empleadoDelMes);

  // Mostrar los resultados en el HTML
  let resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "<h2>Resultados</h2>" +
    "<p>Ventas de Juana: Aqua:" + juanaVentas[0] + " Emoción: "+juanaVentas[1]+
    " Alegría: "+juanaVentas[2] + " Frescura: "+ juanaVentas[3] + "</p>" +
    "<p>Total recolectado por Juana: $" + juanaTotal + "</p>" +
    "<p>Ventas de Juana: Aqua:" + pedroVentas[0] + " Emoción: "+pedroVentas[1]+
    " Alegría: "+pedroVentas[2] + " Frescura: "+ pedroVentas[3] + "</p>" +
    "<p>Total recolectado por Pedro: $" + pedroTotal + "</p>" +
    "<p>Empleado del mes: " + empleadoDelMes + "</p>";

    mostrarCardVendedor(empleadoDelMes,totalVentaEmpleado);
}


function mostrarCardVendedor(empleadoDelMes,totalVenta){
  cardVendedorMes = document.getElementById("vendedor-mes");
  let vendido = totalVenta
  let empleado = empleadoDelMes;
  cardVendedorMes.innerHTML = 
  '<div class="card mb-3">'+
  `<img class="vendedor" src="../img/${empleado}.jpg" class="card-img-top" alt="Vendedor del mes">`+
  ` <div class="card-body">
    <h5 class="card-title">${empleado}</h5>
    <p class="card-text">Felicicdades al empeado del mes!!</p>
    <p class="card-text">Total vendido: $ ${vendido}</p>
  </div>`
}