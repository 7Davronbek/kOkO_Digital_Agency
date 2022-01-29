import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import { DotLoader } from "react-spinners";
import { Link } from 'react-router-dom'
import WhyWe from '../components/WhyWe';
import Support from '../components/Support';

const InternetMarketing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
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
              <p>SMM, SEO, Контекстная реклама</p>
              <button className="btn myBtn">Get Started</button>
            </div>
          </div>
        </div>
      </div>



      <div className='webHeader myWebHeader'>
        <div className="container">
          <div className="row align-items-center">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Понятие об интернет маркетинге</h1>
              <p>Интернет-маркетинг — область маркетинга, которая объединяет  все способы маркетинговой коммуникации, используемые с помощью Интернет-канала. Основной целью Интернет-маркетинга является превращение посетителя сайта в покупателя и увеличить прибыль компании.</p>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <i><img src="/assets/image/web.png" alt="" /></i>
            </div>
          </div>
        </div>
      </div>

      <div className="webConsist myWebConsist">
        <div className="container">
          <div className="row align-items-center">
            <div data-aos='fade-right' className="col-lg-5">
              <i><img src="/assets/image/card1.png" alt="" className="w-100" /></i>
            </div>
            <div data-aos='fade-left' className="col-lg-6 ml-auto">
              <h1>Понятие об интернет маркетинге:</h1>
              <p>контент-маркетинг</p>
              <p>мобильный маркетинг</p>
              <p>social media marketing и таргетированная реклама</p>
              <p>e-mail маркетинг</p>
              <p>контекстная реклама и SEO</p>
              <p>реклама на прайсовых площадках</p>
              <p>медийная реклама</p>
              <p>партизанский маркетинг</p>
            </div>
          </div>

          <div className="row flex-lg-row flex-column-reverse align-items-center mt-4">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>SMM</h1>
              <h6>SMM (с англ "social media marketing") – это маркетинг в социальных медиа для того, чтобы привлечь внимание к бренду или товару.  Для этого могут использоваться различные социальные сети. </h6>
              <p>Маркетинг</p>
              <p>Креатив</p>
              <p>Таргетинг</p>
              <p>Дизайн</p>
              <p>Сбор аудитории</p>
            </div>
            <div data-aos='fade-left' className="col-lg-5 ml-auto">
              <i><img src="/assets/image/card1.png" alt="" /></i>
            </div>
          </div>

          <div className="row align-items-center mt-4 ">
            <div data-aos='fade-right' className="col-lg-5">
              <i><img src="/assets/image/card1.png" alt="" className="w-100" /></i>
            </div>
            <div data-aos='fade-left' className="col-lg-6 ml-auto">
              <h1>SEO</h1>
              <h5>SEO (Search Engine Optimization, поисковая оптимизация) – это всестороннее развитие и продвижение сайта для его выхода на первые позиции в результатах выдачи поисковых систем по выбранным запросам с целью увеличения посещаемости и дальнейшего получения дохода.</h5>
              <p>анализ текущего спроса</p>
              <p>внутренняя оптимизация)</p>
              <p>(внешняя оптимизация)</p>
              <p>улучшение поведенческих факторов</p>
              <p>отслеживание результатов</p>
            </div>
          </div>

          <div className="row flex-lg-row flex-column-reverse align-items-center mt-4 myRow">
            <div data-aos='fade-right' className="col-lg-6 ml-auto">
              <h1>Контестная реклама</h1>
              <h5>Контекстная реклама — это различные объявления (текстовые, графические, видео), которые показываются пользователям в соответствии с их поисковыми запросами, интересами или поведением в интернете. Контекстная реклама показывается в поисковых системах, на различных сайтах, в мобильных приложениях и на других ресурсах.</h5>
              <h5>Существует два сервиса размещения рекламы в интернете — Яндекс. Директа и Google Ads</h5>
              <h5>Варианты контекстной рекламы:</h5>
              <p>Поисковая</p>
              <p>Баннерная</p>
              <p>Товарная</p>
              <p>Видеореклама</p>
              <p>Кампании для мобильных приложениях</p>
            </div>
            <div data-aos='fade-left' className="col-lg-5">
              <i><img src="/assets/image/card1.png" alt="" className="w-100" /></i>
            </div>
          </div>

        </div>
      </div>

        <WhyWe />
        <Support />

      <div className="myWebDepends">
        <div className="container">
          <div className="row">
            <div data-aos='fade-up' className="col-12 text-center">
              <h1>Вам также подходят</h1>
            </div>
            <div data-aos='fade-up' className="col-lg-5 offset-lg-1 mb-4 mb-lg-0 ">
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
              <Link to='/motion'>
                <div className="card">
                  <div className="card-body">
                    <i><img src="/assets/image/card4.png" alt="" className="w-100" /></i>
                    <h5>Моушн</h5>
                    <p>Создание моушн видео, создание анимационных видео роликов</p>
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

export default InternetMarketing
