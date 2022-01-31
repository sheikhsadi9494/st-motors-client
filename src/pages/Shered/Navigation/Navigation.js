import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useContext";
const Navigation = () => {
  const {user, logout} = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to='/' className="fw-bold">St Motors</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
              <Nav.Link as={Link} to="/exploreCar" className="text-dark">Explore Cars</Nav.Link>             
              {
                  user?.email && 
                  <Nav.Link as={Link} to="/dashbord" className="text-dark">Dashbord</Nav.Link>
              }
              {
                  user?.email ? 
                  <Button variant="white" onClick={logout} >Logout</Button>
                  :
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
            <Navbar.Text className="text-dark">
              Signed in as: <a href="#login" className="text-dark">{user?.email && user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
