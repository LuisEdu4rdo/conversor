let celsius = document.getElementById("celsius");
let resultado = document.getElementById("resultado");
// let kelvin = document.getElementById("kelvin");

function calcular() {
  let calc = (celsius.value * 9 / 5) + 32;

  resultado.innerHTML = `${celsius.value}°C é igual a ${calc}° F`;

}