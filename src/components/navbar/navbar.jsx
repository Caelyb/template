/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar, Nav, NavDropdown, Form, Button,
} from 'react-bootstrap';
// import MySearchbar from '../searchbarComponent/searchbar';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">React Template Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Component">About</Nav.Link>
          <NavDropdown title="Templates" id="services-dropdown">
            <NavDropdown.Item href="/Counter"> Counter </NavDropdown.Item>
            <NavDropdown.Item href="/Phonebook"> Phonebook </NavDropdown.Item>
            <NavDropdown.Item href="/ItemGrid"> Product grid </NavDropdown.Item>
            <NavDropdown.Item href="/Searchbar"> Search Page </NavDropdown.Item>
            <NavDropdown.Item href="/DisplayBar"> Carousel </NavDropdown.Item>
            <NavDropdown.Item href="/Test1Component"> Test1 </NavDropdown.Item>
            <NavDropdown.Item href="/Test2Component"> Test2 </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
