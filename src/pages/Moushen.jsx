import React, { useState, useEffect } from 'react'
import { DotLoader } from "react-spinners";
import Aos from 'aos';
import { Link } from 'react-router-dom'
import WhyWe from '../components/WhyWe';
import Support from '../components/Support';

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

      <div className="myWebDepends">
        <div className="container">
          <div className="row">
            <div data-aos='fade-up' className="col-12 text-center">
              <h1>Вам также подходят</h1>
            </div>
            <div data-aos='fade-up' className="col-lg-5 offset-lg-1  mb-4 mb-lg-0 ">
              <Link to='/design'>
                <div className="card">
                  <div className="card-body">
                    <i><img src="/assets/image/card3.png" alt="" className="w-100" /></i>
                    <h5>Дизайн</h5>
                    <p>Разработка брендбуков, Веб-дизайн, СММ-дизайн</p>
                  </div>
                </div>
              </Link>
            </div>

            <div data-aos='fade-up' className="col-lg-5">
              <Link to='/internet-marketing'>
                <div className="card">
                  <div className="card-body">
                    <i><img src="/assets/image/card1.png" alt="" className="w-100" /></i>
                    <h5>Интернет маркетинг</h5>
                    <p>SMM, SEO, Контекстная реклама</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Moushen
