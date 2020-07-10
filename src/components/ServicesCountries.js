import React from 'react'
import { Component } from 'react'
import ServiceCountry from './ServiceCountry'


class ServicesCountries extends Component {
  
  componentDidMount(){
    this.props.fetchingServicesCountries(this.props.match.params.serviceId)
  }

  componentDidUpdate(){
    this.props.fetchingServicesCountries(this.props.match.params.serviceId)
  }
  
  render() {
    
    if (this.props.servicesCountriesData<=0) {
      return (
        <div>
        <center>
           <div>El servicio no está disponible en ningun país</div>
        </center>
        </div>
      );
    }

    return (
      <>
        <table className="table table-hover table-bordered table-sm">
          <thead className="thead-light">
            <tr>
              <th scope='col'>Pais</th>
              <th scope='col'>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {this.props.servicesCountriesData.map((serviceCountry) =>
            <ServiceCountry 
            key={serviceCountry.id}
            name = {serviceCountry.country.name}
            actions = {
              <button
                id= 'eliminar'
                className='btn btn-danger'
                onClick={() =>{ if (window.confirm('¿Está seguro que desea eleminar el servicio?')) this.props.removingServiceCountry(serviceCountry.id) }}>
                Eliminar Disponibilidad
              </button>
            }
            />
          )}
          </tbody>
        </table>
        <hr/>
        </>
    );
  }
}

export default ServicesCountries;
