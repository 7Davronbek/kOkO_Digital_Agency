import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom'

const Portfolio = () => {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)

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
    
    const handleHover3 = () => {
        setHover3(true)
        setTimeout(() => {
            setHover3(false)
        }, 8000)
    }
    
    const handleHover4 = () => {
        setHover4(true)
        setTimeout(() => {
            setHover4(false)
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
                    <div  className={`bg2 ${hover1 ? 'hover' : ''}`}><img onMouseEnter={handleHover1} data-aos='fade-left' src="/assets/image/background/bg1.png" alt="" /></div>
                    <div className={`bg3 ${hover2 ? 'hover' : ''}`}><img onMouseEnter={handleHover2} data-aos='fade-right' src="/assets/image/background/bg4.png" alt="" /></div>
                    {/* <div className={`bg4 ${hover3 ? 'hover' : ''}`}><img onMouseEnter={handleHover3} data-aos='fade-right' src="/assets/image/background/bg1.png" alt="" /></div> */}
                    {/* <div className={`bg2 ${hover4 ? 'hover' : ''}`}><img onMouseEnter={handleHover4} data-aos='fade-right' src="/assets/image/background/bg4.png" alt="" /></div> */}
                    
    {/* transform: scale(0.3);
    bottom: inherit;
    top: -77px;
    left: -350px; */}
                    <div className="row">
                        <div data-aos='fade-right' className="col-12 text-center">
                            <h3>Портфолио</h3>
                        </div>

                    </div>
                    <div className="row">
                        <div data-aos='fade-right' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port1.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        David Art
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port2.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        Spartan Art
                                    </h5>
                                </div>
                            </div>

                        </div>

                        <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port3.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        Balance Stone
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-left' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port4.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        Ghost Art
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-right' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port5.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        Astronous Art
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port4.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        David Art
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port1.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        Blood Face
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-left' className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port3.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        David Art
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
