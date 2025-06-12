import React, { useState, useEffect } from "react";
import "../styles/pagos.css";
import Menu from "../Componetes/Menus.jsx";
import { crearPago, obtenerPagos, eliminarPago, editarPago } from "../../Api";
import Swal from "sweetalert2";

export default function Pagos() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    evento: "",
    fecha: "",
    monto: "",
  });

  const [pagos, setPagos] = useState([]);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    cargarPagos();
  }, []);

  const cargarPagos = async () => {
    const data = await obtenerPagos();
    setPagos(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editando) {
        await editarPago(editando, formulario);
        Swal.fire("¡Actualizado!", "El pago fue modificado", "success");
      } else {
        await crearPago(formulario);
        Swal.fire("¡Pago exitoso!", "Registro guardado", "success");
      }

      setFormulario({
        nombre: "",
        correo: "",
        evento: "",
        fecha: "",
        monto: "",
      });
      setEditando(null);
      cargarPagos();
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Ocurrió un problema", "error");
    }
  };

  const handleEditar = (pago) => {
    setFormulario(pago);
    setEditando(pago.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEliminar = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    });

    if (confirm.isConfirmed) {
      try {
        await eliminarPago(id);
        Swal.fire("Eliminado", "El pago fue borrado", "success");
        cargarPagos();
      } catch (error) {
        console.error("Error:", error);
        Swal.fire("Error", "No se pudo eliminar", "error");
      }
    }
  };

  return (
    <div>
      <Menu />
      <br />
      <br />
      <br />
      <section className="servicios-extras">
        <h2 className="titulo-principal">Formulario de Pago</h2>
        <form className="formulario-pago" onSubmit={handleSubmit}>
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />

          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            required
          />

          <label>Tipo de Evento:</label>
          <select
            name="evento"
            value={formulario.evento}
            onChange={handleChange}
            required
          >
            <option value="">-- Selecciona un evento --</option>
            <option value="Boda">Boda</option>
            <option value="Cumpleaños">Cumpleaños</option>
            <option value="Quince años">Quince años</option>
            <option value="Prom">Prom</option>
            <option value="Otro">Otro</option>
          </select>

          <label>Fecha del Evento:</label>
          <input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
            required
          />

          <label>Monto en COP:</label>
          <input
            type="number"
            name="monto"
            value={formulario.monto}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {editando ? "Actualizar Pago" : "Realizar Pago"}
          </button>
        </form>

        <h2 className="titulo-principal">Pagos Registrados</h2>
        <div className="tarjetas-pagos">
          {pagos.map((pago) => (
            <div className="tarjeta" key={pago.id}>
              <h3>{pago.nombre}</h3>
              <p>
                <strong>Correo:</strong> {pago.correo}
              </p>
              <p>
                <strong>Evento:</strong> {pago.evento}
              </p>
              <p>
                <strong>Fecha:</strong> {pago.fecha}
              </p>
              <p>
                <strong>Monto:</strong> ${pago.monto}
              </p>
              <div className="acciones">
                <button onClick={() => handleEditar(pago)}>Editar</button>
                <button onClick={() => handleEliminar(pago.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
