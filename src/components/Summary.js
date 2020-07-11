import React from 'react'
import { Component } from 'react'

class Summary extends Component {

  componentDidMount() {
    this.props.countingClients()
    this.props.countingServices()
    this.props.countingServicesPerContry();
  }

  render() {
    return (
      <>
        <div>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
              <h5>Total</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Clientes:</b> {this.props.quantityClients} </li>
              <li className="list-group-item"><b>Servicios:</b> {this.props.quantityServices} </li>

            </ul>
          </div>
          <br />
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
              <h5>Servicios por pais</h5>
            </div>
            <ul className="list-group list-group-flush">
              {this.props.servicesPerCountry.map((country) =>
                <li className="list-group-item">{country.name} : {country.quantity} </li>
              )}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Summary;
