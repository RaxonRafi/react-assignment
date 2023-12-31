import {Container, Navbar, Nav } from 'react-bootstrap';
import './AppNav.css'
import navLogo from '../../assets/whole.png';
import searchLogo from '../../assets/baseline-search-24px.png';
import arrow from '../../assets/baseline-arrow_drop_down-24px.png';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">
            <img src={navLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="mx-auto searchbarStyles">
            <div>
               <img src={searchLogo} /> 
            </div>
            <div>
              <span>Search for your favorite groups in ATG</span>
            </div>
          </div>
          <Nav className="ml-auto">
          Create account.<a href="">It’s free!</a> 
          <img src={arrow} alt="" />
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
