import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Registro.css";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    if (nombre && apellido && email && password) {
      localStorage.setItem(
        "usuario",
        JSON.stringify({ nombre, apellido, email, password })
      );
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="overlay">
          <h2>Gerizim: Donde la magia de tus momentos comienza</h2>
          <p>
            Somos una casa de eventos familiar con el corazón puesto en cada
            detalle.
          </p>
          <p>
            Nuestra meta: ser los mejores de Colombia y conquistar el mundo con
            celebraciones inolvidables.
          </p>
        </div>
      </div>
      <div className="auth-right">
        <h1>Regístrate</h1>
        <form onSubmit={handleRegistro} className="auth-form">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="checkbox-label">
            <input type="checkbox" required /> Acepto términos y condiciones
          </label>
          <button type="submit">Registrarse</button>
        </form>
        <p>
          ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
