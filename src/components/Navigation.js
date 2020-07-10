import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


const Navigation = () => (
  <>
    <Navbar className="bg-dark-alpha-3" variant="dark" expand="lg" fixed="top">
      <div className="container">
        <Link className="navbar-brand" to={'/Clientes'}>
          Tekus App
      </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to={`/Clientes`}>
              Clientes
          </Link>
            <Link className="nav-link" to={`/Resumen`}>
              Resumen
          </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  </>
)

export default Navigation
