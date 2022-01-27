import React, { useState, useEffect } from 'react'
import { DotLoader } from "react-spinners";
import Aos from 'aos';
import { Link } from 'react-router-dom'

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
          <h5 className='mr-4'>Моушн</h5>
          <DotLoader color="#fff" size="35" loading={isLoading} />
        </div>
      ) : (
          ""
        )}
      <div className='moushen courses'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Моушн</h1>
              <p>Создание моушн видео, создание анимационных видео роликов</p>
              <button className="btn myBtn">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="webWhyWe mt-5 myWebWhyWe">
        <div className="container">
          <div className="row">
            <div data-aos='fade-up' className="col-12 text-center">
              <h2>Почему Мы:</h2>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Поисковое продвижение</h1>
              <p> Комплексная услуга, включающая в себя SEO оптимизацию сайта, аналитику и контент-маркетинг. Выведем ваш сайт в Топ-5 в поисковых системах Яндекс и Google по запросам, которые актуальны для вашего бизнеса.</p>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <i><img src="/assets/image/card2.png" alt="" className="rounded" /></i>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div data-aos='fade-right' className="col-lg-6">
              <i><img src="/assets/image/card2.png" alt="" className="rounded" /></i>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <h1>Контекстная реклама</h1>
              <p>
                Создание и сопровождение эффективной контекстной рекламы в Яндексе и Google. Наши рекламные решения - это не действия наудачу, а точное попадание в цель.</p>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Социальные сети </h1>
              <p>
                Реклама в соц. сетях позволит охватить около 70% населения нашей страны и многократно повысить узнаваемость вашего бренда, продуктов и услуг.</p>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <i><img src="/assets/image/card1.png" alt="" className="rounded" /></i>
            </div>
          </div>

        </div>
      </div>

      <div className="webSupport myWebSupport">
        <div className="container">
          <div className="row align-items-center">
            <div data-aos='fade-up' className="col-2">
              <i><img src="/assets/image/contactBg.svg" alt="" /></i>
            </div>
            <div data-aos='fade-up' className="col-10">
              <h1>Нужна команда для поддержки вашего сайта?</h1>
              <p>Коротко опишите свои задачи и узнайте, как и чем мы можем помочь в развитии вашего бизнеса</p>
              <a className='btn myBtn' href="tel: +998943698058">Call Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="myWebDepends">
        <div className="container">
          <div className="row">
            <div data-aos='fade-up' className="col-12 text-center">
              <h1>Вам также подходят</h1>
            </div>
            <div data-aos='fade-up' className="col-lg-5 offset-lg-1">
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
