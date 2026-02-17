const users = [
  { id: 1, name: "Juan Pérez", email: "juan.perez@example.com" },
  { id: 2, name: "María Gómez", email: "maria.gomez@example.com" },
  { id: 3, name: "Carlos Rodríguez", email: "carlos.rodriguez@example.com" },
  { id: 4, name: "Laura Martínez", email: "laura.martinez@example.com" },
  { id: 5, name: "Andrés López", email: "andres.lopez@example.com" },
];


function buscarUsuarioPorId(id) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const user = users.find(user => user.id === id);

      if (user) {
        resolve(user);
      } else {
        reject(" Usuario no encontrado");
      }
    }, 2000); 
  });
}

const input = document.getElementById("userIdInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

  const id = parseInt(input.value);

  if (!id) {
    result.innerHTML = " Por favor ingresa un ID válido";
    return;
  }


  result.innerHTML = " Cargando usuario...";

  buscarUsuarioPorId(id)
    .then(user => {
      result.innerHTML = `
        Usuario encontrado:<br>
        <strong>ID:</strong> ${user.id}<br>
        <strong>Nombre:</strong> ${user.name}<br>
        <strong>Email:</strong> ${user.email}
      `;
    })
    .catch(error => {
      result.innerHTML = error;
    })
    .finally(() => {
      console.log("Proceso finalizado");
    });

});