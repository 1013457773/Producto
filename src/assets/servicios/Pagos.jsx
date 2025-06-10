import React, { useState } from "react";
import "../styles/pagos.css";
import Menu from "../Componetes/Menus.jsx";
import { crearPago } from "../../Api";
import Swal from "sweetalert2";

export default function Pagos() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    evento: "",
    fecha: "",
    monto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await crearPago(formulario);

      Swal.fire(
        "¡Pago exitoso!",
        `Registro guardado para ${formulario.nombre}`,
        "success"
      );

      // Reiniciar formulario
      setFormulario({
        nombre: "",
        correo: "",
        evento: "",
        fecha: "",
        monto: "",
      });
    } catch (error) {
      console.error("Error al guardar el pago:", error);
      Swal.fire("Error", "No se pudo registrar el pago.", "error");
    }
  };

  return (
    <div>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <section className="servicios-extras">
        <h2 className="titulo-principal">Formulario de Pago</h2>
        <p className="descripcion">
          Completa los campos para pagar tu evento con nosotros.
        </p>

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

          <label>Numero de tarjeta (COP):</label>
          <input
            type="number"
            name="monto"
            value={formulario.monto}
            onChange={handleChange}
            required
          />

          <button type="submit" className="boton-info">
            Realizar Pago
          </button>
        </form>
      </section>
    </div>
  );
}
