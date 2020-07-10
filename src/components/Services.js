import React, { Component } from 'react';
import history from '../history';
import Service from './Service';
import ButtonRedirect from './ButtonRedirect';

class Services extends Component {

  componentDidMount() {
    this.props.fetchingServices()
  }

  componentDidUpdate() {
    this.props.fetchingServices()
  }

  render() {

    if (this.props.servicesData.length <= 0) {
      return (
        <div>
          <ButtonRedirect
            text={'Agregar Servicio'}
            link={'/Servicios/Crear'} />
          <center>
            <p>No tiene servicios</p>
          </center>
        </div>
      );
    }


    return (
      <>
        <ButtonRedirect
          text={'Agregar Servicio'}
          link={'/Servicios/Crear'} />
        <hr />
        <div>
          <table className="table table-hover table-sm">
            <thead className="thead-light">
              <tr>
                <th scope='col'>Nombre</th>
                <th scope='col'>Valor Hora</th>
                <th scope='col'>Paises Disponible</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.servicesData.map((service) =>
                <Service
                  key={service.id}
                  name={service.name}
                  hourValue={service.hourValue}
                  contries={service.contries}
                  actions={
                    <>
                      <button
                        className='btn btn-info action-btn btn-sm'
                        onClick={() => history.push(`/Servicios/Actualizar/${service.id}`)} >
                        Editar
                      </button>
                      <button
                        className='btn btn-danger action-btn btn-sm'
                        onClick={() => { if (window.confirm('¿Está seguro que desea eleminar el servicio?')) this.props.removingService(service.id) }} >
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

export default Services;
