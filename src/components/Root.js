import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import ClientsPage from '../pages/ClientsPage';
import ServicesPage from '../pages/ServicesPage';
import CreateClientPage from '../pages/CreateClientPage';
import UpdateClientPage from '../pages/UpdateClientPage';
import ResumePage from '../pages/ResumePage';
import Navigation from './Navigation';
import history from '../history';

const Root = () => {
  return (
  <>
    <Router history={history}>
      <Navigation/>
      <div id="main-container">
          <Switch>
            <Route path='/' exact component = {ClientsPage}/>
            <Route path='/Clientes' exact component={ClientsPage} />
            <Route path="/Clientes/Crear" exact component={CreateClientPage} />
            <Route path="/Clientes/Actualizar/:Id" exact component={UpdateClientPage} />
            <Route path="/Servicios" exact component={ServicesPage} />
            <Route path="/Resumen" exact component={ResumePage} />
          </Switch>
      </div>
    </Router>
  </>)
}
export default Root;
