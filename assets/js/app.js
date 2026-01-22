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

  formulario.reset();
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
  // https://home.openweathermap.org/api_keys
  const apiKey = "9ac42084bdef60c7633c4556475bca7d";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      if (datos.cod === "404") {
        mensajeErrorFormulario(
          "No se puedo obtener el clima de la ciudad ingresada.",
        );
        return;
      }

      mostrarDatosDelClima(datos);
    });
}

function mostrarDatosDelClima(datos) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;

  const nombreCiudad = document.querySelector("#nombreCiudad");
  const temperatura = document.querySelector("#temperatura");
  const temperaturaMinima = document.querySelector("#temperaturaMinima");
  const temperaturaMaxima = document.querySelector("#temperaturaMaxima");

  nombreCiudad.textContent = `Clima en ${name}`;
  temperatura.textContent = `${conversionDeKelvinACentigrados(temp)} C°`;
  temperaturaMinima.textContent = `${conversionDeKelvinACentigrados(temp_min)} °`;
  temperaturaMaxima.textContent = `${conversionDeKelvinACentigrados(temp_max)} °`;
}

function conversionDeKelvinACentigrados(temperatura) {
  return parseInt(temperatura - 273.15);
}
