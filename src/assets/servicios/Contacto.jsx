import "../styles/contacto.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import Menu from "../Componetes/Menus.jsx";

export default function Contacto() {
  return (
    <>
      <Menu />
      <br />
      <br />
      <br />
      <section className="contacto-redes">
        <h2 className="titulo-principal">Contáctanos en redes</h2>
        <p className="descripcion">
          Estamos disponibles en nuestras plataformas digitales. ¡Síguenos o
          escríbenos!
        </p>
        <div className="iconos-redes">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="icono whatsapp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/mariaisabelwedding/"
            target="_blank"
            rel="noopener noreferrer"
            className="icono instagram"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a
            href="https://twitter.com/eventosgerizim"
            target="_blank"
            rel="noopener noreferrer"
            className="icono twitter"
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a
            href="https://facebook.com/eventosgerizim"
            target="_blank"
            rel="noopener noreferrer"
            className="icono facebook"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a href="mailto:eventos@gerizim.com" className="icono email">
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </section>
    </>
  );
}
