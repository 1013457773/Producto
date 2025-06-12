import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validarLogin } from "../../Api";
import "../styles/Login.css";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const usuario = await validarLogin(email, password);
      localStorage.setItem("auth", "true");
      localStorage.setItem("usuario", JSON.stringify(usuario));
      navigate("/home");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="overlay">
          <h2>¡Bienvenido a Gerizim!</h2>
          <p>Donde cada evento se vuelve inolvidable.</p>
        </div>
      </div>
      <div className="auth-right">
        <h1>Inicia sesión</h1>
        <form onSubmit={handleLogin} className="auth-form">
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
          <button type="submit">Entrar</button>
        </form>
        <p>
          ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}
