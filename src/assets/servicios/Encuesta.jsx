import React, { useState, useEffect } from "react";
import Menu from "../Componetes/Menus";
import "../styles/Encuesta.css";
import Swal from "sweetalert2";
import { enviarFeedback, obtenerFeedbacks } from "../../Api";

export default function Encuesta() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    calificacion: "",
    comentario: "",
    recomendar: "",
  });

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    obtenerFeedbacks()
      .then(setFeedbacks)
      .catch((err) => console.error("Error al obtener feedbacks:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await enviarFeedback(formulario);
      Swal.fire("¡Gracias!", "Tu opinión ha sido registrada", "success");
      setFormulario({
        nombre: "",
        correo: "",
        calificacion: "",
        comentario: "",
        recomendar: "",
      });
      const updated = await obtenerFeedbacks();
      setFeedbacks(updated);
    } catch (error) {
      console.error("Error al enviar feedback:", error);
      Swal.fire("Error", "No se pudo enviar el feedback", "error");
    }
  };

  return (
    <>
      <Menu />
      <div className="encuesta-container">
        <h1>📝 Encuesta de Satisfacción</h1>
        <form className="formulario-encuesta" onSubmit={handleSubmit}>
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

          <label>¿Cómo calificarías tu experiencia?</label>
          <select
            name="calificacion"
            value={formulario.calificacion}
            onChange={handleChange}
            required
          >
            <option value="">-- Selecciona --</option>
            <option value="Excelente">Excelente ⭐⭐⭐⭐⭐</option>
            <option value="Buena">Buena ⭐⭐⭐⭐</option>
            <option value="Regular">Regular ⭐⭐⭐</option>
            <option value="Mala">Mala ⭐⭐</option>
            <option value="Terrible">Terrible ⭐</option>
          </select>

          <label>¿Recomendarías Eventos Gerizim?</label>
          <select
            name="recomendar"
            value={formulario.recomendar}
            onChange={handleChange}
            required
          >
            <option value="">-- Selecciona --</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>

          <label>¿Qué te gustaría mejorar o destacar?</label>
          <textarea
            name="comentario"
            value={formulario.comentario}
            onChange={handleChange}
            rows="4"
            placeholder="Escribe tu comentario..."
          />

          <button type="submit">Enviar Opinión</button>
        </form>

        <div className="feedback-lista">
          <h2>📋 Opiniones de nuestros clientes</h2>
          <div className="tarjetas-feedback">
            {feedbacks.length === 0 ? (
              <p>No hay opiniones registradas aún.</p>
            ) : (
              feedbacks.map((f, index) => (
                <div className="tarjeta-feedback" key={index}>
                  <h3>{f.nombre}</h3>
                  <p>
                    <strong>Correo:</strong> {f.correo}
                  </p>
                  <p>
                    <strong>Calificación:</strong> {f.calificacion}
                  </p>
                  <p>
                    <strong>¿Recomienda?:</strong> {f.recomendar}
                  </p>
                  <p>
                    <strong>Comentario:</strong>
                    <br />
                    {f.comentario}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
