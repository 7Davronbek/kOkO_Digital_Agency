import React, { useState, useEffect } from 'react'
import { RingLoader } from "react-spinners";
import Aos from 'aos';
// import WhyWe from '../components/WhyWe';
import Support from '../components/Support';
import MotionDepends from '../components/MotionDepends';

import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'
import { Helmet } from 'react-helmet';

const Moushen = (props) => {
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
        <title>kOkO Agency | Motion | Tashkent | KOKO | koko</title>
        <link rel="canonical" href="https://www.kokoagency.uz/" />
      </Helmet>
      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Моушн</h5>
          <RingLoader color={`${localStorage.getItem('theme') === 'white' ? '#000' : '#fff'}`} size="35" loading={isLoading} />
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

      {/* < WhyWe /> */}

      <div className='motionHeader myWebHeader myWebConsist'>
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
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
              <h5>2D и 3D Анимация в Ташкенте с маркетинговым подходом.</h5>
              <p>Моушн графика;</p>
              <p> Промо-ролики для SMM;</p>
              <p> Рекламные ролики для TV;</p>
              <p> Видео обзор товаров или услуг;</p>
              <p>2D и 3D Анимация;</p>
            </div>
          </div>

          <div className="row flex-lg-row flex-column-reverse align-items-center mt-4">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Наша команда </h1>
              <h5 className='mt-5 myH5'>Мы создаем анимационные ролики, которые используются в самых разных областях – маркетинге, киноиндустрии, телевидении, образовании, индустрии развлечений. Они помогают бизнесу рассказать о себе, рекламировать свои товары и услуги, доступно объяснить сложную информацию, оживить интерфейсы сайтов и приложений. Это универсальный формат для большинства компаний.</h5>
              <h5 className='mt-2 myH5'>В короткий ролик помещается большое количество систематизированной информации в простой и понятной форме, цепляющей и удерживающей внимание зрителя. Сегодня моушн анимация – это тренд.</h5>
            </div>
            <div data-aos='fade-left' className="col-lg-5 ml-auto">
              <i><img src="/assets/image/card4.png" alt="" /></i>
            </div>
          </div>

        </div>
      </div>

      <Support />
      <MotionDepends />

    </>
  )
}

export default connect(null, { updateState })(Moushen)
