import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "usuario@correo.com" && password === "Contraseña segura") {
      navigate("/home");
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Casa de Eventos Gerizim</h2>
        <p className="slogan">Tu momento, tu evento, nuestro compromiso</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="usuario@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña segura"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Iniciar Sesión</button>

          <p className="register-link">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
