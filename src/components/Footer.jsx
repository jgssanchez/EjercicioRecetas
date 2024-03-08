import "bootstrap/dist/css/bootstrap.css";
import LogoImg from "../assets/sticker.png";
import "./Footer";

const Footer = () => {
  return (
    <footer className="d-flex flex-column align-items-center bg-black text-light text-center py-2 px-2">
      <img src={LogoImg} alt="" className="img-fluid" width={100} />

      <p>&copy; Rolling Code School. Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
