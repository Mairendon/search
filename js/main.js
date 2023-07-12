//variables
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");

const max = new Date().getFullYear();
const min = max - 10;

//events
document.addEventListener("DOMContentLoaded", () => {
  showCars();

  completeSelect();
});

//functiones
function showCars() {
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
    ${marca}${modelo}-${year} - ${puertas} Puertas - Transmission: ${transmision} - Price: ${precio}€ - Color: ${color}
    `;

    resultado.appendChild(autoHTML);
  });
}

function completeSelect() {
  for (let i = max; i > min; i--) {
    console.log(i);
  }
}
