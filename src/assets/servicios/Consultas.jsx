import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Menu from "../Componetes/Menus";
import "../styles/Consultas.css";
import { obtenerReservas } from "../../Api";

export default function Consultas() {
  const [pagos, setPagos] = useState([]);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    // Cargar pagos
    fetch("http://localhost:3000/pagos")
      .then((res) => res.json())
      .then((data) => setPagos(data))
      .catch((error) => console.error("Error cargando pagos:", error));

    // Cargar reservas
    obtenerReservas()
      .then((data) => setReservas(data))
      .catch((error) =>
        console.error("Error cargando reservas desde Consultas:", error)
      );
  }, []);

  // === PAGOS ===

  // Por tipo de evento
  const pagosPorEvento = pagos.reduce((acc, pago) => {
    acc[pago.evento] = (acc[pago.evento] || 0) + 1;
    return acc;
  }, {});
  const dataEvento = Object.entries(pagosPorEvento).map(
    ([evento, cantidad]) => ({ evento, cantidad })
  );

  // Por persona
  const totalPorPersona = pagos.reduce((acc, pago) => {
    acc[pago.nombre] = (acc[pago.nombre] || 0) + Number(pago.monto);
    return acc;
  }, {});
  const dataPersona = Object.entries(totalPorPersona).map(
    ([nombre, monto]) => ({ nombre, monto })
  );

  // Por fecha
  const eventosPorFecha = pagos.reduce((acc, pago) => {
    const fecha = pago.fecha;
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
  }, {});
  const dataFechas = Object.entries(eventosPorFecha)
    .map(([fecha, cantidad]) => ({ fecha, cantidad }))
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  const maxCantidad = Math.max(...dataFechas.map((d) => d.cantidad), 0);
  const fechaTop = dataFechas.find((d) => d.cantidad === maxCantidad);

  // === RESERVAS ===

  // Por tipo
  const reservasPorTipo = reservas.reduce((acc, reserva) => {
    acc[reserva.tipo] = (acc[reserva.tipo] || 0) + 1;
    return acc;
  }, {});
  const dataReservasTipo = Object.entries(reservasPorTipo).map(
    ([tipo, cantidad]) => ({ tipo, cantidad })
  );

  // Por fecha
  const reservasPorFecha = reservas.reduce((acc, reserva) => {
    acc[reserva.fecha] = (acc[reserva.fecha] || 0) + 1;
    return acc;
  }, {});
  const dataReservasFecha = Object.entries(reservasPorFecha).map(
    ([fecha, cantidad]) => ({ fecha, cantidad })
  );

  const colores = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#00c49f",
    "#e74c3c",
    "#3498db",
  ];

  return (
    <>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="consultas">
        <h1>📊 Consultas y Analítica de Eventos</h1>

        {/* Gráfico 1: Pagos por evento */}
        <section>
          <h2>💰 Pagos por tipo de evento</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataEvento}>
              <XAxis dataKey="evento" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico 2: Total por persona */}
        <section>
          <h2>🧾 Total pagado por persona</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataPersona}>
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="monto" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico 3: Pie de eventos */}
        <section>
          <h2>🎉 Distribución de tipos de eventos</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataEvento}
                dataKey="cantidad"
                nameKey="evento"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {dataEvento.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colores[index % colores.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico 4: Pagos por fecha */}
        <section>
          <h2>📅 Fechas con más pagos</h2>
          {fechaTop && (
            <p style={{ fontWeight: "bold", color: "#e74c3c" }}>
              🔥 Fecha más activa: <strong>{fechaTop.fecha}</strong> (
              {fechaTop.cantidad} pagos)
            </p>
          )}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataFechas}>
              <XAxis
                dataKey="fecha"
                tick={{ fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                interval={0}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad">
                {dataFechas.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.cantidad === maxCantidad ? "#e74c3c" : "#3498db"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico 5: Reservas por tipo */}
        <section>
          <h2>📌 Reservas por tipo de evento</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataReservasTipo}>
              <XAxis dataKey="tipo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#ff7f50" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico 6: Reservas por fecha */}
        <section>
          <h2>📅 Reservas por fecha</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataReservasFecha}>
              <XAxis
                dataKey="fecha"
                tick={{ fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                interval={0}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#00c49f" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Lista de reservas */}
        <section>
          <h2>📋 Reservas Registradas</h2>
          <div className="tarjetas-reservas">
            {reservas.length === 0 ? (
              <p>No hay reservas registradas.</p>
            ) : (
              reservas.map((reserva, index) => (
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
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}
