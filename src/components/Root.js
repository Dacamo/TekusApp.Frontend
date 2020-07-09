import React from 'react';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ClientsPage from '../pages/ClientsPage';
import ServicesPage from '../pages/ServicesPage';
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
            <Route path="/Servicios" exact component={ServicesPage} />
            <Route path="/Resumen" exact component={ResumePage} />
          </Switch>
      </div>
    </Router>
  </>)
}
export default Root;
