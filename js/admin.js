

const contenedor =
document.getElementById("contenedorAdmin");

let reservas =
JSON.parse(localStorage.getItem("reservas")) || [];

mostrarReservas();

function mostrarReservas() {

  contenedor.innerHTML = "";

  reservas.forEach(reserva => {

    const card = document.createElement("div");

    card.classList.add("card-admin");

    card.innerHTML = `

      <h2>${reserva.habitacion}</h2>

      <p>Usuario:
      ${reserva.usuario}</p>

      <p>Ingreso:
      ${reserva.ingreso}</p>

      <p>Salida:
      ${reserva.salida}</p>

      <p>Total:
      $${reserva.total}</p>

    `;

    contenedor.appendChild(card);

  });

}






