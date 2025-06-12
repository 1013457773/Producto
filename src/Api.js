const URL_API = "/api"; 

// ======================== USUARIOS ========================

// Obtener todos los usuarios
export async function obtenerUsuarios() {
  const res = await fetch(`${URL_API}/usuarios`);
  if (!res.ok) throw new Error("Error al obtener usuarios.");
  return res.json();
}

// Validar login
export async function validarLogin(email, password) {
  const usuarios = await obtenerUsuarios();
  const usuario = usuarios.find(
    (u) => u.email === email && u.password === password
  );

  if (!usuario) {
    throw new Error("Correo o contraseña incorrectos");
  }

  return usuario;
}

// Registrar usuario
export async function registrarUsuario(nuevoUsuario) {
  const usuarios = await obtenerUsuarios();
  const yaExiste = usuarios.some((u) => u.email === nuevoUsuario.email);

  if (yaExiste) {
    throw new Error("El correo ya está registrado");
  }

  const res = await fetch(`${URL_API}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoUsuario),
  });

  if (!res.ok) throw new Error("Error al registrar usuario");
  return res.json();
}

// ======================== PAGOS ========================

// Obtener todos los pagos
export async function obtenerPagos() {
  const res = await fetch(`${URL_API}/pagos`);
  if (!res.ok) throw new Error("Error al obtener pagos");
  return res.json();
}

// Crear nuevo pago
export async function crearPago(pago) {
  const res = await fetch(`${URL_API}/pagos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pago),
  });

  if (!res.ok) throw new Error("Error al crear el pago.");
  return res.json();
}

// Editar pago existente
export async function editarPago(id, datosActualizados) {
  const res = await fetch(`${URL_API}/pagos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datosActualizados),
  });

  if (!res.ok) throw new Error("Error al actualizar el pago");
  return res.json();
}

// Eliminar pago
export async function eliminarPago(id) {
  const res = await fetch(`${URL_API}/pagos/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al eliminar el pago");
  return true;
}
