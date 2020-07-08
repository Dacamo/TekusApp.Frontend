import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import SideBar from './SideBar';

const Navigation = () => {
  return (
    /*<Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <div className="container">
        <Link className="navbar-brand" to={'/Clientes'}> TEKUS APP</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to={`/Clientes`}>
              Clientes
            </Link>
            <Link className="nav-link" to={`/Servicios`}>
              Servicios
            </Link>
            <Link className="nav-link" to={`/Resumen`}>
              Resumen
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>*/
    <SideBar/>
  );
};

export default Navigation;
