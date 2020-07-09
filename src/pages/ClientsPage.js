import React from 'react';
import ClientsContainer from '../containers/ClientsContainer';

const ClientsPage = () => (
  <div className="container full-h">
    <>
      <p className="title-text">Clientes</p>
      <hr />
      <ClientsContainer />
    </>
  </div>
)

export default ClientsPage;
