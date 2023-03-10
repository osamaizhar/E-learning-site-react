import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import styles from '../style/nav.module.css';

function NAV(){
    return(
        <div className="App">
        <Navbar className={styles.fixedTop} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Exercise Tracker App</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">Form</Nav.Link>
                  {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Activities</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
          </div>
      
    )
}
export default NAV;