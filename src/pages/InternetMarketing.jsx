import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import { DotLoader } from "react-spinners";
import WhyWe from '../components/WhyWe';
import Support from '../components/Support';
import InternetHeader from '../components/InternetHeader';
import InternetConsist from '../components/InternetConsist';
import InternetDepend from '../components/InternetDepend';

const InternetMarketing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
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
          <h5 className='mr-4'>Internet marketing</h5>
          <DotLoader color="#fff" size="35" loading={isLoading} />
        </div>
      ) : (
        ""
      )}
      <div className='internetMarketing courses'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Internet marketing</h1>
              {/* <p>SMM, SEO, Контекстная реклама</p> */}
              <button className="btn myBtn">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <InternetHeader />

      <InternetConsist />

      {/* <WhyWe /> */}
      <Support />

      <InternetDepend />

    </>
  )
}

export default InternetMarketing
