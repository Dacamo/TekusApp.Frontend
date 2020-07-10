import React from 'react';
import CreateServiceCountryContainer from '../containers/CreateServiceCountryContainer';
import ServicesCountriesContainer from '../containers/ServicesCountriesContainer';

const CreateServiceCountryPage = () => (
  <div className="container full-h">
    <>
      <p className="title-text">Disponibilidad en paises</p>
      <hr />
      <ServicesCountriesContainer/>
      <CreateServiceCountryContainer />
    </>
  </div>
)

export default CreateServiceCountryPage;
