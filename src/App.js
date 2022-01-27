import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Companies from "./components/Companies";
import Contacts from "./components/Contacts";
// import Personal from "./components/Personal";
import { DotLoader } from "react-spinners";

import "aos/dist/aos.css";
import "aos/dist/aos.js";
import WeInNumber from "./components/WeInNumber";
import Offer from "./components/Offer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // window.addEventListener('load', () => {
  //     setIsLoading(false)
  // })

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader ">
          <span className="mr-4">
            <img src="/assets/icon/logoWhite.png" alt='Logo' />
          </span>
          <DotLoader color="#fff" size="35" loading={isLoading} />
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
