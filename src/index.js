import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Services from './components/Services';
import Navbar from './components/Navbar';

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/about-us' exact component={App} />
      <Route path='/projects' exact component={App} />
      <Route path='/contacts' exact component={App} />
      <Route path='/services' exact component={Services} />
    </Switch>
  </Router>,
  document.getElementById('root')
);