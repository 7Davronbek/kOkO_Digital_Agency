import React, { useEffect } from 'react';
import Aos from 'aos';

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
                    {/* <div className="my">
                        <div className={`bg2 ${hover1 ? 'hover' : ''}`}><img onMouseEnter={handleHover1} data-aos='fade-left' src="/assets/image/background/bg1.png" alt="" /></div>
                    </div>
                    <div className="my">
                        <div className={`bg3 ${hover2 ? 'hover' : ''}`}><img onMouseEnter={handleHover2} data-aos='fade-right' src="/assets/image/background/bg4.png" alt="" /></div>
                    </div> */}
                    <div className="row">
                        <div data-aos='fade-right' className="col-12 text-center">
                            <h3>Портфолио</h3>
                        </div>

                    </div>
                    <div className="row">
                        <div style={{ height: 500 }} data-aos='fade-right' className="col-lg-6 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/rkaonlineshopuz?utm_medium=copy_link">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/1.png" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM RKA Online Shop
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div style={{ height: 500 }} data-aos='fade-left' className="col-lg-6 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/ksil.uz/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port12.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM KSIL UZ
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-right' className="col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/rkaonlineshopuz?utm_medium=copy_link">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/2.png" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM RKA Online Shop
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-up' className="col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/ilpatio_tashkent?utm_medium=copy_link">
                                <div className="card">
                                    <div className="card-header h-100">
                                        <img src="/assets/image/portfolio/port10.jpg" className='w-100 h-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM IL Patio
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className="col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/classicgrandbuild?utm_medium=copy_link">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/3.png" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM CGB
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-right' className="col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/rkaonlineshopuz?utm_medium=copy_link">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port13.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM RKA Online Shop
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-up' className="col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/ilpatio_tashkent?utm_medium=copy_link">
                                <div className="card">
                                    <div className="card-header h-100">
                                        <img src="/assets/image/portfolio/port14.jpg" className='w-100 h-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM IL Patio
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className="col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/classicgrandbuild?utm_medium=copy_link">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port15.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM CGB
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-right' className="col-lg-3 p-0 col-md-6 ">
                            <div className="card  h-100">
                                <a target='_blank' rel="noreferrer" href="https://smartpackprint.uz/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/6.png" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website smartpackprint.uz
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="col-lg-3 p-0 col-md-6 ">
                            <div className="card  h-100">
                                <a target='_blank' rel="noreferrer" href="https://trustedexpressllc.com/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/7.png" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website trustedexpressllc.com
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div data-aos='fade-down' className="col-lg-3 p-0 col-md-6 ">
                            <div className="card  h-100">
                                <a target='_blank' rel="noreferrer" href="https://granitinert.uz/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/8.png" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website granitinert.uz
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div data-aos='fade-left' className="col-lg-3 p-0 col-md-6 ">
                            <div className="card">
                                <a target='_blank' rel="noreferrer" href="https://agrom.uz/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/5.png" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website agrom.uz
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* <div className="row">
                        <div className="col-lg-4 text-center mx-auto">
                            <Link to='/projects'>
                                <button data-aos='fade-right' className="btn myBtn d-block mx-auto">Посмомотреть все</button>
                            </Link>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default Portfolio
