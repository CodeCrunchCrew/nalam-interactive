import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" className="mx-3">
        <img
          src="https://assets-global.website-files.com/651eac31835f453a27bb7c5a/651eaf8dda4d313d93565f20_Nalam%20Logo.svg"
          loading="lazy"
          width="87"
          height="23"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <Button variant="outline-dark" className="my-2 rounded-pill">
              Home
            </Button>
          </Nav.Link>
          <Nav.Link href="#">
            <Button variant="outline-dark" className="my-2 rounded-pill">
              Sponsor a Girl
            </Button>
          </Nav.Link>
          <Nav.Link href="#">
            <Button variant="outline-dark" className="my-2 rounded-pill">
              Stories
            </Button>
          </Nav.Link>
          <Nav.Link href="#">
            <Button variant="outline-dark" className="my-2 rounded-pill">
              About
            </Button>
          </Nav.Link>
          <Nav.Link href="#">
            <Button variant="outline-dark" className="my-2 rounded-pill">
              Contact
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
