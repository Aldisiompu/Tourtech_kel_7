import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarwisata = () => {
return (
    <Navbar className = "Nav">
    <Container>
        <Navbar.Brand style={{color:'white'}} href="#home">Tour Tech</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="justify-content-end" activeKey="/home" >
            <Nav.Item>
            <Nav.Link style={{color: 'white'}} href="/hom">Beranda</Nav.Link>
            </Nav.Item>
            <NavDropdown 
                id="nav-dropdown-dark-example"
                title={<span style={{ color: 'white' }}>Wisata</span>}
                menuVariant="white"
                >
                <NavDropdown.Item href="#action/3.1">Alam</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Sejarah
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Budaya</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title={<span style={{ color: 'white' }}>Pemandu</span>}
                menuVariant="white"
                >
                <NavDropdown.Item href="#action/3.1">Data Pemandu</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Daftar
                </NavDropdown.Item>    
            </NavDropdown>
            <Nav.Item>
            <Nav.Link style={{color: 'white'}} eventKey="/testimoni" >Testimoni</Nav.Link>
            </Nav.Item>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title={<span style={{ color: 'white' }}>User</span>}
                menuVariant="white"
                >
                <NavDropdown.Item href="#action/3.1">Akun Saya</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Logout
                </NavDropdown.Item>    
            </NavDropdown>
        </Nav>
    </Container>
    </Navbar>
);
}

export default Navbarwisata;