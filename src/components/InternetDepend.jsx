import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const InternetDepend = () => {
    return <div>
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
    </div>;
};

export default InternetDepend;
