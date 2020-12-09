import React from 'react';
import {
  Button, Form, FormControl, Nav, Navbar, NavDropdown
} from 'react-bootstrap';
import '../app.css';
import './componentsStyle/componentStyle.css';

const ProjectNavBar = () => (
  <Navbar className="navBar" bg="light" expand="lg">
    <Navbar.Brand className="navbar-brand" href="/home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/knitting">Knitting</Nav.Link>
        <Nav.Link href="/woodworking">Woodworking</Nav.Link>
        <Nav.Link href="/pepper">Pepper</Nav.Link>
        <Nav.Link href="/users">Users</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#login">Login</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="searchBox" />
        <Button variant="outline-success" className="searchBox">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default ProjectNavBar;
