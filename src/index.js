import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/Navbar';
import Footer2 from './components/Footer2';
import ScrollToTop from './components/ScrollToTop';
import ContactsPage from './pages/ContactsPage';
import AboutUs from './pages/AboutUs';
import AllPortfolio from './pages/AllPortfolio';
import WebDevelopment from './pages/WebDevelopment';
import InternetMarketing from './pages/InternetMarketing';
import Design from './pages/Design';
import Moushen from './pages/Moushen';
import Phone from './components/Phone';

ReactDOM.render(
  <>
  <Router>
    <Navbar />
    <ScrollToTop />
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/about-us' exact component={AboutUs} />
      <Route path='/projects' exact component={AllPortfolio} />
      <Route path='/contacts' exact component={ContactsPage} />
      <Route path='/web-development' exact component={WebDevelopment} />
      <Route path='/internet-marketing' exact component={InternetMarketing} />
      <Route path='/design' exact component={Design} />
      <Route path='/motion' exact component={Moushen} />
      {/* <Route path='/services' exact component={Services} /> */}
    </Switch>
    <Phone />
    <Footer2 />
  </Router>
  </>,
  document.getElementById('root')
);