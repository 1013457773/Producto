// src/Componetes/RutaProtegida.jsx
import { Navigate } from "react-router-dom";

export default function RutaProtegida({ children }) {
  const auth = localStorage.getItem("auth");
  return auth ? children : <Navigate to="/" />;
}
