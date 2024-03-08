import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImg from '../assets/sticker.png';
import './Navegation.css';
import { NavLink,Link } from "react-router-dom";

function NavegationMenu() {
  return (
    <Navbar expand="lg" className="bg-nav py-0">
      <Container fluid >
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
        <Navbar.Brand as={Link} to='/' className="img-brand p-0 img-fluid"><img src={LogoImg} alt="logo recetas"  /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="" >
          <Nav className=" ms-auto me-5 m ">
            <NavLink end  to='/' className=" text-light nav-link">Home</NavLink>
            <NavLink end to='/admin' className=" text-light nav-link">Admin</NavLink>
            <NavLink end to='/login' className=" text-light nav-link">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavegationMenu;
