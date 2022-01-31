import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const DesignDepends = () => {
  return <>
  <div className="myWebDepends">
    <div className="container">
      <div className="row">
        <div data-aos='fade-up' className="col-12 text-center">
          <h1>Вам также подходят</h1>
        </div>
        <div data-aos='fade-up' className="col-lg-5 offset-lg-1  mb-4 mb-lg-0 ">
          <Link to='/web-development'>
            <div className="card">
              <div className="card-body">
                <i><img src="/assets/image/card2.png" alt="" className="w-100" /></i>
                <h5>Веб услуги</h5>
                <p>Разработка сайтов, ботов, интернет-магазинов</p>
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
  </>;
};

export default DesignDepends;
