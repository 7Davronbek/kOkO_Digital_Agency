import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const WebDepends = () => {
    return <>

        <div className="myWebDepends">
            <div className="container">
                <div className="row">
                    <div data-aos='fade-up' className="col-12 text-center">
                        <h1>Вам также подходят</h1>
                    </div>
                    <div data-aos='fade-up' className="col-lg-5 mb-4 mb-lg-0 offset-lg-1">
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
    </>;
};

export default WebDepends;
