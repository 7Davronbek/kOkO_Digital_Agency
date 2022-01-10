import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);