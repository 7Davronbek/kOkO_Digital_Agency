import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';

const Services = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return (
        <>
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4 data-aos='fade-right'>Our Services</h4>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="card">
                            <Link to='/web-development'>
                                <div  data-aos='fade-right' className="card-body position-relative">
                                    <i> <img src="/assets/image/card2.png" alt="" className="w-100" /></i>
                                    <h5>Веб услуги</h5>
                                    <p>Это  создание, продвижение и поддержание интернет-площадок в рабочем состоянию</p>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/motion'>
                                <div data-aos='fade-up' className="card-body position-relative">
                                    <i> <img src="/assets/image/card3.png" alt="" className="w-100" /></i>
                                    <h5>Моушн</h5>
                                    <p>Это создание динамической графики, которая представляет собой 2D и  3D графику в движении. Подобный графики создаются моушн-дизайнерами.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/internet-marketing'>
                                <div data-aos='fade-up' className="card-body position-relative">
                                    <i> <img src="/assets/image/card1.png" alt="" className="w-100" /></i>
                                    <h5>Интернет маркетинг</h5>
                                    <p> Oбласть маркетинга, которая объединяет  все способы маркетинговой коммуникации, используемые с помощью Интернет-канала.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/design'>
                                <div data-aos='fade-left' className="card-body position-relative">
                                    <i> <img src="/assets/image/card4.png" alt="" className="w-100" /></i>
                                    <h5>Дизайн</h5>
                                    <p>Дизайн в себя включает SMM-дизайн, Веб-дизайн и Брендинг</p>
                                </div>
                            </Link>
                        </div>
                    
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services
