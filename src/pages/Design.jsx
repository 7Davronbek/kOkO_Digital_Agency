import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import { DotLoader } from "react-spinners";
import WhyWe from '../components/WhyWe';
import Support from '../components/Support';
import DesignHeader from '../components/DesignHeader';
import DesignConsist from '../components/DesignConsist';
import DesignDepends from '../components/DesignDepends';

const Design = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 500);

    Aos.init({
      once: false,
      duration: 2000,
    })

  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Design</h5>
          <DotLoader color="#fff" size="35" loading={isLoading} />
        </div>
      ) : (
        ""
      )}
      <div className='design courses'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Design</h1>
              <p>Разработка брендбуков, Веб-дизайн, СММ-дизайн</p>
              <button className="btn myBtn">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <DesignHeader />
      <DesignConsist />

      <WhyWe />

      <Support />

      <DesignDepends />

    </>
  )
}

export default Design
