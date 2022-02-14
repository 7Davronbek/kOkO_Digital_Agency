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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // window.addEventListener('load', () => {
  //     setIsLoading(false)
  // })

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      // console.clear();
    }, 1800);
  }, []);

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>kOkO Agency uz | Tashkent | KOKO | koko</title>
        <link rel="canonical" href="https://www.kokoagency.uz/" />
    </Helmet>

      {isLoading ? (
        <div className="loader ">
          <span className="mr-4">
            <img style={{width: '140px'}} src="/assets/icon/logo.png" alt='Logo' />
          </span>
          <RingLoader color="#fff" size="35" loading={isLoading} />
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
    </>
  );
};

export default App;
