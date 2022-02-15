import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import { RingLoader } from "react-spinners";
// import WhyWe from '../components/WhyWe';
import Support from '../components/Support';
import InternetHeader from '../components/InternetHeader';
import InternetConsist from '../components/InternetConsist';
import InternetDepend from '../components/InternetDepend';
import PaketsInternet from '../components/PaketsInternet';

import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'
import { Helmet } from 'react-helmet';

const InternetMarketing = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setLoad(true);
    }, 1800);

    Aos.init({
      once: false,
      duration: 1700,
    })

  }, []);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>kOkO Agency | Internet Marketing | Tashkent | KOKO | koko</title>
        <link rel="canonical" href="https://www.kokoagency.uz/" />
    </Helmet>

      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Интернет маркетинг</h5>
          <RingLoader color={`${localStorage.getItem('theme') === 'white' ? '#000' : '#fff'}`} size="35" loading={isLoading} />
        </div>
      ) : (
        ""
      )}
      <div className='internetMarketing courses'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {load ? (
                <>
                  <h1 data-aos='fade-right'>Internet marketing</h1>
                  <button data-aos='fade-left' className="btn myBtn"onClick={() => props.updateState({isOpen: true})}>Оставить заявку</button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <InternetHeader />

      <InternetConsist />
      <PaketsInternet />

      {/* <WhyWe /> */}
      <Support />

      <InternetDepend />

    </>
  )
}

export default connect(null, { updateState })(InternetMarketing)
