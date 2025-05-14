import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  const usuarioAutenticado = localStorage.getItem("auth") === "true";

  return usuarioAutenticado ? children : <Navigate to="/" />;
};

export default RutaProtegida;
