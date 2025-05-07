import { BrowserRouter, Routes, Route } from "react-router-dom";
import { enrutador } from "./enrutador.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {enrutador.map((ruta, i) => (
          <Route key={i} path={ruta.path} element={ruta.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
