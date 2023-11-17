import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <Navbar expand="lg fixed-top" className="bg-warning">
      <Container>
      <Link to="/"> <img src="NewsCurry logoo.png" alt="logo" width="140" height="32"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <li className="nav-item">
          <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/technology">Technology</Link>
        </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;