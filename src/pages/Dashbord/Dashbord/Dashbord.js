import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useContext";

const Dashbord = () => {
  const { logout, user } = useAuth();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://mighty-journey-57918.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return (
    <div>
      <Navbar bg="primary" expand={false}>
        <Container fluid>
          <Navbar.Brand className="text-white fw-bold mx-5">Dashbord</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Dashbord
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div>
                  <Nav.Link as={Link} to="/exploreCar">
                    Expolre Car
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashbord">
                    Dashbord
                  </Nav.Link>
                  <Nav.Link as={Link} to="makePayment">
                    Payment
                  </Nav.Link>
                  <Nav.Link as={Link} to="review">
                    Review
                  </Nav.Link>
                </div>
                {admin && (
                  <div>
                    <Nav.Link as={Link} to="manageAllOrders">
                      Manage All Orders
                    </Nav.Link>
                    <Nav.Link as={Link} to="makeAdmin">
                      Make Admin
                    </Nav.Link>
                    <Nav.Link as={Link} to="addCar">
                      Add Car
                    </Nav.Link>
                    <Nav.Link as={Link} to="manageCars">
                      Manage Cars
                    </Nav.Link>
                  </div>
                )}
                <Button onClick={logout}>logOut</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashbord;
