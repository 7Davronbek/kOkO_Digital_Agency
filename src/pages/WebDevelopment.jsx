import React, { useState, useEffect } from 'react'
import { RingLoader } from "react-spinners";
import PaketsWeb from '../components/PaketsWeb';
import Support from '../components/Support';
import WebConsist from '../components/WebConsist';
import WebDepends from '../components/WebDepends';
import WebHeader from '../components/WebHeader';

import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'
import { Helmet } from 'react-helmet';
// import WhyWe from '../components/WhyWe';

const WebDevelopment = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setLoad(true);
    }, 1800);
  }, []);
  return (
    <>
    
    <Helmet>
        <meta charSet="utf-8" />
        <title>kOkO Agency | Web Development | Tashkent | KOKO | koko</title>
        <link rel="canonical" href="https://www.kokoagency.uz/" />
    </Helmet>
      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Разработка сайтов</h5>
          <RingLoader color={`${localStorage.getItem('theme') === 'white' ? '#000' : '#fff'}`} size="35" loading={isLoading} />
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
                <button data-aos='fade-left' className="btn myBtn"onClick={() => props.updateState({isOpen: true})}>Оставить заявку</button>
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

export default connect(null, { updateState })(WebDevelopment)

