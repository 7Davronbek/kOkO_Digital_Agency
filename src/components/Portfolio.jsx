import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom'

const Portfolio = () => {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    
    const handleHover1 = () => {
        setHover1(true)
        setTimeout(() => {
            setHover1(false)
        }, 8000)
    }

    const handleHover2 = () => {
        setHover2(true)
        setTimeout(() => {
            setHover2(false)
        }, 8000)
    }

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    })
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="my">
                        <div className={`bg2 ${hover1 ? 'hover' : ''}`}><img onMouseEnter={handleHover1} data-aos='fade-left' src="/assets/image/background/bg1.png" alt="" /></div>
                    </div>
                    <div className="my">
                        <div className={`bg3 ${hover2 ? 'hover' : ''}`}><img onMouseEnter={handleHover2} data-aos='fade-right' src="/assets/image/background/bg4.png" alt="" /></div>
                    </div>
                    <div className="row">
                        <div data-aos='fade-right' className="col-12 text-center">
                            <h3>Портфолио</h3>
                        </div>

                    </div>
                    <div className="row">
                        <div data-aos='fade-right' className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">
                                    <img src="/assets/image/portfolio/port1.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                    Смм продвижение проекта по производству  нерудных материалов
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">
                                    <img src="/assets/image/portfolio/port2.jpg" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                    Смм продвижение интернет магазина
                                    </h5>
                                </div>
                            </div>

                        </div>

                        <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">
                                    <img src="/assets/image/portfolio/port5.jpg" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                    Смм продвижение интернет магазина
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-left' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/portfolio/port4.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                    Смм продвижение итальянского ресторана
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-right' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/portfolio/port10.jpg" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        Фотосессия для итальянского ресторана
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4">
                            <div className="card  h-100">
                                <div className="card-header">
                                    <img src="/assets/image/portfolio/port6.jpg" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        Смм дизайн для интернет магазина
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4">
                            <div className="card  h-100">
                                <div className="card-header">
                                    <img src="/assets/image/portfolio/port9.jpg" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                    Фотосессия для итальянского ресторана
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-left' className="col-lg-3 col-md-6 mb-4">
                            <div className="card  h-100">
                                <div className="card-header">
                                    <img src="/assets/image/portfolio/port8.jpg" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        Смм дизайн для проекта по производству  нерудных материалов
                                    </h5>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-4 text-center mx-auto">
                            <Link to='/projects'>
                                <button data-aos='fade-right' className="btn myBtn d-block mx-auto">Посмомотреть все</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio
