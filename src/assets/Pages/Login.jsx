import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("auth", "true");
      navigate("/home");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="overlay">
          <h2>¡Bienvenido a Gerizim!</h2>
          <p>
            Una casa de eventos familiar donde tus momentos se convierten en
            recuerdos inolvidables.
          </p>
          <p>
            Queremos ser los mejores de Colombia y ser reconocidos en el mundo
            por hacer de cada celebración algo único.
          </p>
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
