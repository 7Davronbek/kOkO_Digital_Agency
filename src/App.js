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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // window.addEventListener('load', () => {
  //     setIsLoading(false)
  // })

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      // console.clear();
    }, 900);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader ">
          <span className="mr-4">
            <img src="/assets/icon/logoWhite.png" alt='Logo' />
          </span>
          <RingLoader color="#fff" size="35" loading={isLoading} />
        </div>
      ) : (
        ""
      )}
      <Header />
      <Services />
      <Offer />
      <WeInNumber />
      <Portfolio />
      <Companies />
      {/* <Personal /> */}
      <Contacts />
    </>
  );
};

export default App;
