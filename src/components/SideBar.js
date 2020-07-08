import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Tekus App</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
          data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="container-fluid">
    <div className="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
           
            <Link className="nav-link" to={`/Clientes`}>
              Clientes
            </Link>
            <Link className="nav-link" to={`/Servicios`}>
              Servicios
            </Link>
            <Link className="nav-link" to={`/Resumen`}>
              Resumen
            </Link>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Configuración</span>
            <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
              
            </a>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Current month
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  </div>
    </div>
  )
}

export default SideBar;
