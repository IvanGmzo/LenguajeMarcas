    var boton = document.getElementById('enviar');
  boton.addEventListener('click', function enviarFormulario(){
    let numero = document.getElementById("numero").value;
    let fecha_emision = document.getElementById("fecha_emision").value;
    let vencimiento = document.getElementById("vencimiento").value;

    let nombre = document.getElementById("nombre").value;
    let nif = document.getElementById("nif").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let poblacion = document.getElementById("poblacion").value;
    let cod_postal = document.getElementById("cod_postal").value;

    let nombre_cliente = document.getElementById("nombre_cliente").value;
    let nif_cliente = document.getElementById("nif_cliente").value;
    let email_cliente = document.getElementById("email_cliente").value;
    let direccion_cliente = document.getElementById("direccion_cliente").value;
    let poblacion_cliente = document.getElementById("poblacion_cliente").value;
    let cod_postal_cliente = document.getElementById("cod_postal_cliente").value;

    console.log(numero);
    console.log(fecha_emision);
    console.log(vencimiento);

    console.log(nombre);
    console.log(nif);
    console.log(telefono);
    console.log(email);
    console.log(direccion);
    console.log(poblacion);
    console.log(cod_postal);

    console.log(nombre_cliente);
    console.log(nif_cliente);
    console.log(email_cliente);
    console.log(direccion_cliente);
    console.log(poblacion_cliente);
    console.log(cod_postal_cliente);
})
var button = document.getElementById("Anadir");
button.onclick = function() {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Texto en el div");
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
