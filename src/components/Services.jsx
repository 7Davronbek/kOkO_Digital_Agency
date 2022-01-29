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
                    <div className="d-flex align-items-center flex-lg-nowrap flex-wrap">
                        <div className="card">
                            <Link to='/web-development'>
                                <div  data-aos='fade-right' className="card-body position-relative">
                                    <i> <img src="/assets/image/card2.png" alt="" className="w-100" /></i>
                                    <h5>Web services</h5>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/motion'>
                                <div data-aos='fade-up' className="card-body position-relative">
                                    <i> <img src="/assets/image/card3.png" alt="" className="w-100" /></i>
                                    <h5>Motion</h5>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/internet-marketing'>
                                <div data-aos='fade-up' className="card-body position-relative">
                                    <i> <img src="/assets/image/card1.png" alt="" className="w-100" /></i>
                                    <h5>Internet marketing</h5>
                                </div>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to='/design'>
                                <div data-aos='fade-left' className="card-body position-relative">
                                    <i> <img src="/assets/image/card4.png" alt="" className="w-100" /></i>
                                    <h5>Design</h5>
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
