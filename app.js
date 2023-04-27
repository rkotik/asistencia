window.addEventListener("DOMContentLoaded", function () {
  const Empleado = document.querySelector("#Empleado");

  leerUser();
  // grabarUser();
});

function generarUUID() {
  const generateId = Math.random().toString(36).substring(2, 18);
  return generateId;
}

function grabarUser() {
  const uuid = generarUUID();
  localStorage.setItem("Employee", uuid);
  Empleado.innerHTML = "Guardado";
}

function leerUser() {
  const uuid = localStorage.getItem("Employee");
  if (uuid != null && uuid != "") {
    console.log(uuid);
    Empleado.innerHTML = uuid;
    // Empleado.innerHTML = "Leido";
  } else {
    console.log(
      "Dispositivo no registrado. Deberás registrarlo para poder utilizar esta aplicación."
    );
  }
}
