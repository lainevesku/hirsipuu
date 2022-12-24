import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';




function Header() {

    const [show, setShow] = useState(false);
    const showDropdown = () =>{
        setShow(!show);
    }
    const hideDropdown = () => {
        setShow(false);
    }

  return (
    <Navbar style={{backgroundColor: "#3784B5" }} expand="sm" >
      <Container>
        <Navbar.Brand href="/">Hirsipuu - Etusivu </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="kaupunki">Suomi</Nav.Link>
            <Nav.Link href="capital">Eurooppa</Nav.Link>
            <NavDropdown 
                title="Pelit" 
                id="collasible-nav-dropdown" 
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
                onToggle={() => { window.location.href = '/pelit'}}
            >
              <NavDropdown.Item href="kaupunki">Suomi</NavDropdown.Item>
              <NavDropdown.Item href="capital">Eurooppa</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;