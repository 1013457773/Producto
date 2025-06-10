import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registrarUsuario } from "../../Api";
import "../styles/Registro.css";
import Swal from "sweetalert2";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      await registrarUsuario({ nombre, apellido, email, password });
      Swal.fire("¡Registro exitoso!", "Puedes iniciar sesión ahora", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="overlay">
          <h2>Gerizim: Donde la magia de tus momentos comienza</h2>
          <p>Eventos con alma y detalle.</p>
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
