import React, { useState, useEffect } from 'react'
import { RingLoader } from "react-spinners";
import Aos from 'aos';
// import WhyWe from '../components/WhyWe';
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
          <RingLoader color="#fff" size="35" loading={isLoading} />
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

      {/* < WhyWe /> */}

      <div className='motionHeader myWebHeader myWebConsist'>
        <div className="container">
          <div className="row align-items-center">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Моушн</h1>
              <p>Моушн-дизайн — это процесс создания анимационной графики</p>
              <p className='secondP'>Анимационная графика, она же моушн-графика — это визуальное оформление, которое оживляет статическое изображение. Интернет, медиа и реклама, телевидение, кино, мобильные приложения, видеоигры — без нее не обходится ни одна из этих сфер.</p>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <i><img src="/assets/image/design.png" className='w-100' alt="" /></i>
            </div>
          </div>
        </div>
      </div>

      <div className="motionConsist myWebConsist">
        <div className="container">
          <div className="row align-items-center">
            <div data-aos='fade-right' className="col-lg-5">
              <i><img src="/assets/image/card3.png" alt="" className="w-100" /></i>
            </div>
            <div data-aos='fade-left' className="col-lg-6 ml-auto">
              <h1>Наши услуги:</h1>
              <h5>2д и 3д Анимация в Ташкенте с маркетинговым подходом.</h5>
              <p>Моушн графика;</p>
              <p> Промо-ролики для SMM;</p>
              <p> Рекламные ролики для TV;</p>
              <p> Видео обзор товаров или услуг;</p>
              <p>2д и 3д Анимация;</p>
            </div>
          </div>
          
    {/* margin-bottom: 7px !important; */}
    {/* margin-bottom: 41px !important; */}

          <div className="row flex-lg-row flex-column-reverse align-items-center mt-4">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Веб дизайн</h1>
              <h6>Веб-дизайн (от англ. Web design)  - это направление веб разработки и разные виды дизайна.  Основной целью веб-дизайна является проектирование пользовательских  веб-интерфейсов для сайтов или веб-приложений.</h6>
              <p>Дизайн основной и типовых страниц сайта</p>
            </div>
            <div data-aos='fade-left' className="col-lg-5 ml-auto">
              <i><img src="/assets/image/card3.png" alt="" /></i>
            </div>
          </div>

        </div>
      </div>

      <Support />

      <MotionDepends />

    </>
  )
}

export default Moushen
