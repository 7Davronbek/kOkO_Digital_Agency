import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Companies from "./components/Companies";
import Contacts from "./components/Contacts";
import WeInNumber from "./components/WeInNumber";
import Offer from "./components/Offer";
// import Personal from "./components/Personal";
import { RingLoader } from "react-spinners";

import "aos/dist/aos.css";
import "aos/dist/aos.js";

import {Helmet} from "react-helmet";
import { connect } from "react-redux";


const App = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  // window.addEventListener('load', () => {
  //     setIsLoading(false)
  // })

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
      console.clear();
    }, 1800);
  }, []);

  return (
    <div className={`${props.white ? 'themeActive' : ''}`}>

    <Helmet>
        <meta charSet="utf-8" />
        <title>kOkO Agency uz | Tashkent | KOKO | koko</title>
        <link rel="canonical" href="https://www.kokoagency.uz/" />
    </Helmet>

      {isLoading ? (
        <div className="loader ">
          <span className={`mr-4 icon icon-logo ${localStorage.getItem('theme') === 'white' ? 'black' : ''}`}>
          </span>
          <RingLoader color={`${localStorage.getItem('theme') === 'white' ? '#000' : '#fff'}`} size="35" loading={isLoading} />
        </div>
      ) : (
        <>
        <Header /> 
        <Services />
        <Offer />
        <WeInNumber />
        <Portfolio />
        <Companies />
        <Contacts />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    white: state.email.white
  }
}

export default connect(mapStateToProps, null)(App)
