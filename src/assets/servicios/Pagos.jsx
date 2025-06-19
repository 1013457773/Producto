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
        Swal.fire("Modificación exitosa", "El registro ha sido actualizado.", "success");
      } else {
        await crearPago(formulario);
        Swal.fire("Registro exitoso", "El pago ha sido guardado correctamente.", "success");
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
      Swal.fire("Error", "Ha ocurrido un inconveniente al procesar el pago.", "error");
    }
  };

  const handleEditar = (pago) => {
    setFormulario(pago);
    setEditando(pago.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEliminar = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Deseas eliminar este registro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        await eliminarPago(id);
        Swal.fire("Eliminado", "El registro ha sido eliminado correctamente.", "success");
        cargarPagos();
      } catch (error) {
        console.error("Error:", error);
        Swal.fire("Error", "No se pudo eliminar el registro.", "error");
      }
    }
  };

  return (
    <>
      <Menu />
      <main className="servicios-extras" style={{ paddingTop: "10rem" }}>
        <h1 className="titulo-principal">💳 Gestión de Pagos para Eventos</h1>

        <section className="formulario-pago-seccion">
          <h2 className="titulo-formulario">
            {editando ? "✏️ Modificar Pago" : "📝 Registrar Nuevo Pago"}
          </h2>

          <form className="formulario-pago" onSubmit={handleSubmit}>
            <div className="grupo-formulario">
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                required
                placeholder="Ej. Andrea Torres"
              />
            </div>

            <div className="grupo-formulario">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={formulario.correo}
                onChange={handleChange}
                required
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div className="grupo-formulario">
              <label>Tipo de evento</label>
              <select
                name="evento"
                value={formulario.evento}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Fiestas Empresariales">Fiestas Empresariales</option>
                <option value="Cumpleaños Inolvidables">Cumpleaños Inolvidables</option>
                <option value="Quince Años">Quince Años</option>
                <option value="Matrimonios">Matrimonios</option>
                <option value="Primeras Comuniones">Primeras Comuniones</option>
                <option value="Grados">Grados</option>
                <option value="Bautizos">Bautizos</option>
                <option value="Eventos Personalizados">Eventos Personalizados</option>
              </select>
            </div>

            <div className="grupo-formulario">
              <label>Fecha del evento</label>
              <input
                type="date"
                name="fecha"
                value={formulario.fecha}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grupo-formulario">
              <label>Monto (COP)</label>
              <input
                type="number"
                name="monto"
                value={formulario.monto}
                onChange={handleChange}
                required
                placeholder="Ej. 250000"
              />
            </div>

            <button type="submit" className="boton-submit">
              {editando ? "Actualizar Registro" : "Registrar Pago"}
            </button>
          </form>
        </section>

        <section>
          <h2 className="titulo-formulario">📋 Historial de Pagos</h2>
          <div className="tarjetas-pagos">
            {pagos.length === 0 ? (
              <p className="mensaje-vacio">Aún no hay pagos registrados.</p>
            ) : (
              pagos.map((pago) => (
                <div className="tarjeta" key={pago.id}>
                  <h3>{pago.nombre}</h3>
                  <p><strong>Correo:</strong> {pago.correo}</p>
                  <p><strong>Evento:</strong> {pago.evento}</p>
                  <p><strong>Fecha:</strong> {pago.fecha}</p>
                  <p><strong>Monto:</strong> ${pago.monto}</p>
                  <div className="acciones">
                    <button onClick={() => handleEditar(pago)}>✏️ Editar</button>
                    <button onClick={() => handleEliminar(pago.id)}>🗑️ Eliminar</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}
