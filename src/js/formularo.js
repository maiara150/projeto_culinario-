$(document).ready(function() {
    const formulario = $("#formulario");
    formulario.on('submit', function(event) {
      event.preventDefault();
      alert("Enviado com sucesso");
    });
  });