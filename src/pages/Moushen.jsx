import React, { useState, useEffect } from 'react'
import { DotLoader } from "react-spinners";
import Aos from 'aos';
import WhyWe from '../components/WhyWe';
import Support from '../components/Support';
import MotionDepends from '../components/MotionDepends';

const Moushen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);

      Aos.init({
        once: false,
        duration: 1700,
      })

    }, 500);
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
              <h1>Motion</h1>
              <p>Создание моушн видео, создание анимационных видео роликов</p>
              <button className="btn myBtn">Get Started</button>
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
