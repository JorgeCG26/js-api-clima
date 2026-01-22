// Selectores
const formulario = document.querySelector("#formulario");
const inputCiudad = document.querySelector("#ciudad");
const selectPais = document.querySelector("#pais");

// Eventos
formulario.addEventListener("submit", enviarDatosFormulario);

// Funciones
function enviarDatosFormulario(event) {
  event.preventDefault();

  const ciudad = inputCiudad.value;
  const pais = selectPais.value;

  validarCamposFormulario(ciudad, pais);
}

function validarCamposFormulario(ciudad, pais) {
  if (ciudad.trim() === "" || pais === "") {
    mensajeErrorFormulario("Todos los campos son obligatorios");
    return;
  }

  consultarApiClima(ciudad, pais);
}

function mensajeErrorFormulario(mensaje) {
  // Verificar si hay mas de un error
  const alerta = document.querySelector("#alertaError");
  if (alerta) {
    return;
  }

  const divEtiqueta = document.createElement("DIV");
  divEtiqueta.textContent = mensaje;
  divEtiqueta.id = "alertaError";

  divEtiqueta.classList.add(
    "text-center",
    "text-white",
    "font-medium",
    "bg-red-600",
    "p-2",
    "rounded-md",
    "w-full",
    "mt-9",
    "uppercase",
  );

  formulario.appendChild(divEtiqueta);

  // Eliminar alerta después de 3 segundos
  setTimeout(() => {
    divEtiqueta.remove();
  }, 3000);
}

function consultarApiClima(ciudad, pais) {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);
}
