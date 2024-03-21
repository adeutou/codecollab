import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useLogoutUserMutation} from '../services/appApi'

import {useSelector} from 'react-redux'
import logo from "../assets/logo2.png";
import "./NavigationL.css"; // Import the CSS file

function NavigationL() {
  const user = useSelector((state)=>state.user);
  const [logoutUser] = useLogoutUserMutation()
async function handleLogout(e){
e.preventDefault()
await logoutUser(user)
//redirect to homepage
window.location.replace('/')
}
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <LinkContainer to="/"> */}
          <Navbar.Brand className="d-flex align-items-center justify-content-center">
            {/* Center logo and animated text horizontally */}
            <div className="brand-and-text">
              <img src={logo} alt="" style={{ width: 50, height: 50 }} />
              <span className="code-collab">CodeCollab</span>
            </div>
          </Navbar.Brand>
        {/* </LinkContainer> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/chat">
              <Nav.Link>
                Chat
                <i
                  className="fas fa-comments home-message-icon"
                  style={{ color: "blue" }}
                />
              </Nav.Link>
            </LinkContainer>
            {user && (
              <NavDropdown
                title={
                  <>
                    <i
                      class="fa-solid fa-user-large"
                      style={{ color: "blue" }}
                    ></i>
                    {user.name}
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <button className="logoutt" onClick={handleLogout}>Logout</button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationL;
