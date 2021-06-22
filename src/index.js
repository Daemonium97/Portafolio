import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Home, Description, Projects, Contact } from './components/Home'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route>
        <Home/>
        <Description />
        <Projects/>
        <Contact/>
      </Route>
    </Switch>


  </BrowserRouter>,
  document.getElementById('root')
);


