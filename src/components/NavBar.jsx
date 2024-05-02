import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link da react-router-dom
import logo from '../assets/img/logo.png';
import '../App.css'; // Importa il file CSS per lo stile personalizzato della navbar

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-dark custom-navbar">
      <Container fluid className="px-0"> {/* Utilizza fluid e px-0 per espandere la navbar */}
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Logo"
            src={logo}
            width="100"
            height="55"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/tv-shows" className="nav-link">TV Shows</Nav.Link>
            <Nav.Link href="#" className="nav-link">Movies</Nav.Link>
            <Nav.Link href="#" className="nav-link">Recently Added</Nav.Link>
            <Nav.Link href="#" className="nav-link">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <i className="fa fa-search icons"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons"></i>
        <i className="fa fa-user icons"></i>
      </Container>
    </Navbar>
  );
}

export default NavBar;
