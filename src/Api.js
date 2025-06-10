const URL_API = "/api"; // Usamos el proxy de Vite para evitar CORS

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

// Obtener todos los pagos (para mostrarlos si lo deseas)
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
