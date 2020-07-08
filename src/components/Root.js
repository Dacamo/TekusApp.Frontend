import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ResumePage from '../pages/ResumePage';
import Navigation from './Navigation';
import history from '../history';



const Root = () => {
  return (<>
    <Router history={history}>
      <Navigation />
      <div id="main-container">
        <Switch>
          <Route path="/Clientes" exact component={HomePage} />
          <Route path="/Servicios" exact component = {ServicesPage}/>
          <Route path="/Resumen" exact component = {ResumePage}/>
        </Switch>
      </div>
    </Router>

  </>)
}
export default Root;
