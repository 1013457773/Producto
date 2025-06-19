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
    fetch("http://localhost:3000/pagos")
      .then((res) => res.json())
      .then((data) => setPagos(data))
      .catch((error) => console.error("Error cargando pagos:", error));

    obtenerReservas()
      .then((data) => setReservas(data))
      .catch((error) =>
        console.error("Error cargando reservas desde Consultas:", error)
      );
  }, []);

  const pagosPorEvento = pagos.reduce((acc, pago) => {
    acc[pago.evento] = (acc[pago.evento] || 0) + 1;
    return acc;
  }, {});
  const dataEvento = Object.entries(pagosPorEvento).map(
    ([evento, cantidad]) => ({ evento, cantidad })
  );

  const totalPorPersona = pagos.reduce((acc, pago) => {
    acc[pago.nombre] = (acc[pago.nombre] || 0) + Number(pago.monto);
    return acc;
  }, {});
  const dataPersona = Object.entries(totalPorPersona).map(
    ([nombre, monto]) => ({ nombre, monto })
  );

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

  const reservasPorTipo = reservas.reduce((acc, reserva) => {
    acc[reserva.tipo] = (acc[reserva.tipo] || 0) + 1;
    return acc;
  }, {});
  const dataReservasTipo = Object.entries(reservasPorTipo).map(
    ([tipo, cantidad]) => ({ tipo, cantidad })
  );

  const reservasPorFecha = reservas.reduce((acc, reserva) => {
    acc[reserva.fecha] = (acc[reserva.fecha] || 0) + 1;
    return acc;
  }, {});
  const dataReservasFecha = Object.entries(reservasPorFecha).map(
    ([fecha, cantidad]) => ({ fecha, cantidad })
  );

  const colores = [
    "#ff80ab", "#f06292", "#ec407a", "#e91e63", "#d81b60",
    "#c2185b", "#ad1457", "#880e4f"
  ];

  return (
    <>
      <Menu />
      <div className="consultas">
        <h1>🎀 Analítica de Eventos y Pagos</h1>

        {/* Gráfico: Pagos por tipo de evento */}
        <section>
          <h2>💰 Pagos por tipo de evento</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataEvento}>
              <XAxis dataKey="evento" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#f06292" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico: Total por persona */}
        <section>
          <h2>👩‍💼 Total pagado por persona</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataPersona}>
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="monto" fill="#ba68c8" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico: Distribución de tipos de eventos */}
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

        {/* Gráfico: Fechas más activas */}
        <section>
          <h2>📆 Fechas con más pagos</h2>
          {fechaTop && (
            <p style={{ fontWeight: "bold", color: "#c2185b" }}>
              🔥 Fecha más activa: <strong>{fechaTop.fecha}</strong> ({fechaTop.cantidad} pagos)
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
                    fill={entry.cantidad === maxCantidad ? "#c2185b" : "#f8bbd0"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico: Reservas por tipo */}
        <section>
          <h2>🗂️ Reservas por tipo de evento</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataReservasTipo}>
              <XAxis dataKey="tipo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#f48fb1" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfico: Reservas por fecha */}
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
              <Bar dataKey="cantidad" fill="#ce93d8" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Lista de reservas */}
        <section>
          <h2>📋 Reservas registradas</h2>
          <div className="tarjetas-reservas">
            {reservas.length === 0 ? (
              <p>No hay reservas registradas.</p>
            ) : (
              reservas.map((reserva, index) => (
                <div key={index} className="tarjeta-reserva">
                  <h3>📌 {reserva.tipo}</h3>
                  <p><strong>Nombre:</strong> {reserva.nombre}</p>
                  <p><strong>Correo:</strong> {reserva.correo}</p>
                  <p><strong>Fecha:</strong> {reserva.fecha}</p>
                  <p><strong>Personas:</strong> {reserva.personas}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}
