import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";
import resume from "../assets/resume07:18:20.pdf"
import { Link } from "react-router-dom";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" style={{height: "5vh"}}>
    <Navbar.Brand href="#home">Jeffrey Harding</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Bio</Link></Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href={resume}>Resumé</Nav.Link>
        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Personal Work</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Group Projects</NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/00y-700">GitHub</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
  
}

export default MyNavbar;
