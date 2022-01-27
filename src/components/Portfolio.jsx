import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom'

const Portfolio = () => {

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
                    <div className="bg2"><img data-aos='fade-left' src="/assets/image/background/bg2.webp" alt="" /></div>
                    <div className="bg3"><img data-aos='fade-right' src="/assets/image/background/bg3.webp" alt="" /></div>
                    <div className="row">
                        <div data-aos='fade-right' className="col-12 text-center">
                            <h3>Portfolio</h3>
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
                        <div className="col-12">
                            <Link to='/projects'>
                                <button data-aos='fade-right' className="btn myBtn d-block mx-auto">View more</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio
