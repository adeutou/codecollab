import React from 'react'
import {Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Button } from "react-bootstrap";
import logo from '../assets/logo2.png'

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="" style={{ width: 50, height: 50 }} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/services">
              <Nav.Link>
                Services <i
                  class="fa-solid fa-clipboard-list"
                  style={{ color: "blue" }}
                ></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>
                A Propos{" "}
                <i class="fa-solid fa-question" style={{ color: "blue" }}></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <button className="but">
                Se connecter{" "}
                <i
                  class="fa-solid fa-right-to-bracket"
                  style={{ color: "blue" }}
                ></i>
              </button>
            </LinkContainer>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default Navigation