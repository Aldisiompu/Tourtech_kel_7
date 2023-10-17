import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarwisata = () => {
  return (
    <Navbar style={{backgroundColor:'#08496F'}} className="Nav fixed-top" expand="lg">
      <Container>
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand style={{ color: 'white' }} href="#home">
            Tour Tech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey="/home">
            <Nav.Item>
              <Nav.Link style={{ color: 'white', marginRight: '50px' }} href="/home">
                Beranda
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={<span style={{ color: 'white' }}>Wisata</span>}
              menuVariant="white"
              style={{ marginRight: '50px' }}
            >
              <NavDropdown.Item href="/wisataA">Alam</NavDropdown.Item>
              <NavDropdown.Item href="/wisataS">Sejarah</NavDropdown.Item>
              <NavDropdown.Item href="/wisata">Budaya</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={<span style={{ color: 'white' }}>Pemandu</span>}
              menuVariant="white"
              style={{ marginRight: '50px' }}
            >
              <NavDropdown.Item href="#action/3.1">Data Pemandu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Daftar</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link style={{ color: 'white', marginRight: '50px', textDecoration: 'none' }} eventKey="/testimoni">
                Testimoni
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={<span style={{ color: 'white' }}>User</span>}
              menuVariant="white"
            >
              <NavDropdown.Item href="/akunsaya">Akun Saya</NavDropdown.Item>
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarwisata;
