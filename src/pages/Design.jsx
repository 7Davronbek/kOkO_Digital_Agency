import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import { RingLoader } from "react-spinners";
// import WhyWe from '../components/WhyWe';
import Support from '../components/Support';
import DesignHeader from '../components/DesignHeader';
import DesignConsist from '../components/DesignConsist';
import DesignDepends from '../components/DesignDepends';

import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'
import { Helmet } from 'react-helmet';

const Design = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setLoad(true);
    }, 1500);

    Aos.init({
      once: false,
      duration: 2000,
    })

  }, []);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>kOkO Agency | Design | Tashkent | KOKO | koko</title>
        <link rel="canonical" href="https://www.kokoagency.uz/" />
    </Helmet>

      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Дизайн</h5>
          <RingLoader color="#fff" size="35" loading={isLoading} />
        </div>
      ) : (
        ""
      )}
      <div className='design courses'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {load ? (
                <>
                  <h1 data-aos='fade-right'>Design</h1>
                  <button data-aos='fade-left' className="btn myBtn" onClick={() => props.updateState({isOpen: true})}>Оставить заявку</button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <DesignHeader />
      <DesignConsist />

      {/* <WhyWe /> */}

      <Support />

      <DesignDepends />

    </>
  )
}

export default connect(null, { updateState })(Design)
