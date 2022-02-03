import React, { useState, useEffect } from 'react'
import { RingLoader } from "react-spinners";
import PaketsWeb from '../components/PaketsWeb';
import Support from '../components/Support';
import WebConsist from '../components/WebConsist';
import WebDepends from '../components/WebDepends';
import WebHeader from '../components/WebHeader';
// import WhyWe from '../components/WhyWe';

const WebDevelopment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setLoad(true);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Web services</h5>
          <RingLoader color="#fff" size="35" loading={isLoading} />
        </div>
      ) : (
        ""
      )}
      <div className='webDevelopment courses'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {load ? (
                <>
                <h1 data-aos='fade-right'>Web services</h1>
                <button data-aos='fade-left' className="btn myBtn">Get Started</button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <WebHeader />

      <WebConsist />
      <PaketsWeb />

      {/* <WhyWe /> */}
      <Support />

      <WebDepends />
    </>
  )
}

export default WebDevelopment
