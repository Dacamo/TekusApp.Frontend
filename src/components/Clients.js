import React, { Component } from 'react';
import history from '../history';
import Client from './Client';
import ButtonRedirect from './ButtonRedirect';

class Clients extends Component {

  componentDidMount() {
    this.props.fetchingClients()
  }

  componentDidUpdate() {
    this.props.fetchingClients()
  }

  render() {

    if (this.props.clientsData.length <= 0) {
      return (
        <div>
          <ButtonRedirect
            text={'Agregar Cliente'}
            link={'/Clientes/Crear'} />
          <center>
            <p>No existen Clientes Registrados</p>
          </center>
        </div>
      );
    }


    return (
      <>
        <ButtonRedirect
          text={'Agregar Cliente'}
          link={'/Clientes/Crear'} />
        <hr />
        <div>
          <table className="table table-hover table-sm">
            <thead className="thead-light">
              <tr>
                <th scope='col'>NIT</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Correo</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.clientsData.map((client) =>
                <Client
                  key={client.id}
                  nit={client.nit}
                  email={client.email}
                  name={client.name}
                  actions={
                    <>
                      <button
                        className='btn btn-primary action-btn btn-sm'
                        onClick={() => history.push(`/Servicios/${client.id}`)} >
                        Servicios
                </button>
                      <button
                        className='btn btn-info action-btn btn-sm'
                        onClick={() => history.push(`/Clientes/Actualizar/${client.id}`)} >
                        Editar
                </button>
                      <button
                        className='btn btn-danger action-btn btn-sm'
                        onClick={() => { if (window.confirm('¿Está seguro que desea eleminar el cliente?')) this.props.removingClient(client.id) }} >
                        Eliminar
                </button>
                    </>
                  }
                />
              )}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Clients;
