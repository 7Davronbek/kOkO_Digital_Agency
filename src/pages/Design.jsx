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
import DesignPortfolio from '../components/DesignPortfolio';

const Design = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setLoad(true);
    }, 1800);

    Aos.init({
      once: false,
      duration: 2000,
    })

  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>kOkO Digital Agency uz | Design | Tashkent | kOkO</title>
        <link rel="canonical" href="https://www.kokoagency.uz/" />
      </Helmet>

      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Дизайн</h5>
          <RingLoader color={`${localStorage.getItem('theme') === 'white' ? '#000' : '#fff'}`} size="35" loading={isLoading} />
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

                  <a
                    href="https://t.me/kOkOdigital"
                    target='_blank' rel="noreferrer"
                    className="btn myBtn"
                    data-aos='fade-left'
                  // onClick={() => props.updateState({ isOpen: true })}
                  // onClick={() => setModal(true)}
                  >
                    <div className="click"></div>
                    Бесплатная консультация
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <DesignHeader />
      <DesignConsist />

      {/* <WhyWe /> */}
      <DesignPortfolio />
      <Support />

      <DesignDepends />

    </>
  )
}

export default connect(null, { updateState })(Design)
