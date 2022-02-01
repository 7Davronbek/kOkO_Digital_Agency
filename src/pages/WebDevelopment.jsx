import React, { useState, useEffect } from 'react'
import { DotLoader } from "react-spinners";
import Support from '../components/Support';
import WebConsist from '../components/WebConsist';
import WebDepends from '../components/WebDepends';
import WebHeader from '../components/WebHeader';
import WhyWe from '../components/WhyWe';

const WebDevelopment = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Web services</h5>
          <DotLoader color="#fff" size="35" loading={isLoading} />
        </div>
      ) : (
        ""
      )}
      <div className='webDevelopment courses'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Web services</h1>
              <button className="btn myBtn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <WebHeader />

      <WebConsist />

      <WhyWe />
      <Support />

      <WebDepends />
    </>
  )
}

export default WebDevelopment
