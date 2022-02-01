import React, { useState, useEffect } from 'react'
import { DotLoader } from "react-spinners";
import Aos from 'aos';
import WhyWe from '../components/WhyWe';
import Support from '../components/Support';
import MotionDepends from '../components/MotionDepends';

const Moushen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setLoad(true);
    }, 500);

    Aos.init({
      once: false,
      duration: 1700,
    })
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Motion</h5>
          <DotLoader color="#fff" size="35" loading={isLoading} />
        </div>
      ) : (
        ""
      )}
      <div className='moushen courses'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {load ? (
                <>
                  <h1 data-aos='fade-right'>Motion</h1>
                  <button data-aos='fade-left' className="btn myBtn">Get Started</button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      < WhyWe />
      <Support />

      <MotionDepends />

    </>
  )
}

export default Moushen
