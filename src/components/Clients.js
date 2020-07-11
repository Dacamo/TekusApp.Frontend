import React, { Component } from 'react';
import history from '../history';
import Client from './Client';
import ButtonRedirect from './ButtonRedirect';

class Clients extends Component {

  componentDidMount() {
    //this.props.fetchingClients()
    this.props.fetchingClientsByRange(1)
    this.props.countingClients()
  }

  render() {
    
    let renderPageNumbers;

    const pageNumbers = [];
    if (this.props.quantity > 0) {
      for (let i = 1; i <= Math.ceil(this.props.quantity / 4); i++) {
        pageNumbers.push(i);
      }

      renderPageNumbers = pageNumbers.map(number => {
        let classes = this.props.actualPage === number ? "active" : '';
     
        return (
          <span key={number} className={classes} onClick={() => this.props.fetchingClientsByRange(number)}>{number}</span>
        );
      
      });

    }
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
                <th scope='col'>Servicios</th>
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
                  services={
                    <button
                      className='btn btn-primary action-btn btn-sm'
                      onClick={() => 
                      {
                        history.push(`/Servicios/${client.id}`)
                        this.props.fetchingClientById(client.id)
                      }} >
                      Servicios
                    </button>
                  }
                  actions={
                    <>   
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
        <div className="pagination">
          <span onClick={() => this.props.fetchingClientsByRange(1)}>&laquo;</span>
          {renderPageNumbers}
        </div>
        <br/>
      </>
    )
  }
}

export default Clients;
