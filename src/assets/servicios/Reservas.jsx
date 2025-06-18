import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Reservas.css";
import Menu from "../Componetes/Menus";
import Swal from "sweetalert2";
import { obtenerReservas, crearReserva } from "../../Api";

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    tipo: "",
    personas: "",
  });

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = async () => {
    try {
      const data = await obtenerReservas();
      setReservas(data);
    } catch (error) {
      console.error("Error al cargar reservas:", error);
    }
  };

  const fechasOcupadas = reservas.map((r) => r.fecha);

  const fechaFormateada = (fecha) =>
    new Date(fecha).toISOString().split("T")[0];

  const cambiarFecha = (fecha) => {
    setFechaSeleccionada(fecha);
  };

  const fechaSeleccionadaISO = fechaFormateada(fechaSeleccionada);
  const yaReservado = fechasOcupadas.includes(fechaSeleccionadaISO);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (yaReservado) {
      Swal.fire("⚠️ Fecha ocupada", "Selecciona otra fecha", "warning");
      return;
    }

    const nuevaReserva = {
      ...formulario,
      fecha: fechaSeleccionadaISO,
    };

    try {
      await crearReserva(nuevaReserva);
      Swal.fire("✅ Reservado", "Tu reserva fue registrada", "success");
      setFormulario({
        nombre: "",
        correo: "",
        tipo: "",
        personas: "",
      });
      cargarReservas();
    } catch (error) {
      console.error("Error al reservar:", error);
      Swal.fire("Error", "No se pudo registrar la reserva", "error");
    }
  };

  return (
    <>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="reservas">
        <h1>📅 Gestión de Reservas</h1>

        <div className="contenedor">
          <div className="calendario">
            <h2>Selecciona una fecha</h2>
            <Calendar onChange={cambiarFecha} value={fechaSeleccionada} />
            <p>
              Fecha seleccionada: <strong>{fechaSeleccionadaISO}</strong>{" "}
              {yaReservado && <span className="ocupado">⛔ Ocupada</span>}
            </p>
          </div>

          <div className="formulario">
            <h2>Reservar Evento</h2>
            <form onSubmit={handleSubmit}>
              <label>Nombre completo:</label>
              <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                required
              />

              <label>Correo electrónico:</label>
              <input
                type="email"
                name="correo"
                value={formulario.correo}
                onChange={handleChange}
                required
              />

              <label>Tipo de evento:</label>
              <select
                name="tipo"
                value={formulario.tipo}
                onChange={handleChange}
                required
              >
                <option value="">-- Selecciona --</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Quince Años">Quince Años</option>
                <option value="Matrimonio">Matrimonio</option>
                <option value="Grado">Grado</option>
                <option value="Bautizo">Bautizo</option>
                <option value="Primera Comunión">Primera Comunión</option>
                <option value="Empresarial">Empresarial</option>
              </select>

              <label>Número de personas:</label>
              <input
                type="number"
                name="personas"
                value={formulario.personas}
                onChange={handleChange}
                required
              />

              <button type="submit">Reservar</button>
            </form>
          </div>
        </div>

        <div className="lista-reservas">
          <h2>📋 Reservas Registradas</h2>
          <div className="tarjetas-reservas">
            {reservas.map((reserva, index) => (
              <div key={index} className="tarjeta-reserva">
                <h3>📌 {reserva.tipo}</h3>
                <p>
                  <strong>Nombre:</strong> {reserva.nombre}
                </p>
                <p>
                  <strong>Correo:</strong> {reserva.correo}
                </p>
                <p>
                  <strong>Fecha:</strong> {reserva.fecha}
                </p>
                <p>
                  <strong>Personas:</strong> {reserva.personas}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
