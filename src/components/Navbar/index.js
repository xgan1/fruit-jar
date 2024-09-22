import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiFruitBowl } from 'react-icons/gi';
import './style.css';
import { Link } from 'react-router-dom'; // 从 react-router-dom 导入 Link

const AppNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" fixed="sticky" className="nav_style" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand">
            <GiFruitBowl className="img" /> FRUITYVICE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=".navbar-collapse">
            <Nav className="ms-auto ">
              <Nav.Link as={Link} to="/" className="links">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/fruitJar" className="links">
                Fruit Jar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
