import React from 'react';

const Portfolio = () => {
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
                        <div data-aos='fade-right' className="col-lg-6 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/rkaonlineshopuz?utm_medium=copy_link">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port2.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM RKA Online Shop
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className="col-lg-6 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/hayotwater.uz/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio1.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Hayotwater
                                        </h5>
                                    </div>
                                </div>
                            </a>

                        </div>


                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
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

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/moneybek.uz/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio2.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM MoneyBek
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/uzbek_invest_assistance/">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio3.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Uzbekinvest Assistance
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/chinorkent_uz/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio7.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Chinorkent
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/hayotwater.uz/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio8.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Hayotwater
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/chinorkent_uz/">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio9.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Chinorkent
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/nls_arenda.uz/">
                                <div style={{ height: '377px' }} className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/22.jpg" className='w-100 ' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM NLS
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/ilpatio_tashkent/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/23.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM IL Patio
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/midea.brand.uz/">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/24.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Midea
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/dastyor.uz/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio4.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Dastyor UZ
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/uzbek_invest_assistance/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio5.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Uzbekinvest Assistance
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/chinorkent_uz/">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/portfolio6.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Chinorkent
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/ilpatio_tashkent?utm_medium=copy_link">
                                <div style={{ height: '377px' }} className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port10.jpg" className='w-100 ' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM IL Patio
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/biostep.organica/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port15.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM BIOSTEP
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/classicgrandbuild?utm_medium=copy_link">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port16.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM CGB
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/midea.brand.uz/">
                                <div style={{ height: '377px' }} className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/25.jpg" className='w-100 ' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM Midea
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/nls_arenda.uz/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/26.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM NLS
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/ilpatio_tashkent/">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/27.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM IL Патио
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/biostep.organica/">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port13.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM BIOSTEP
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://instagram.com/rkaonlineshopuz?utm_medium=copy_link">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/port5.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM RKA Online Shop
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/biostep.organica/">
                                <div className="card h-100">
                                    <div className="card-header h-100">
                                        <img src="/assets/image/portfolio/port14.jpg" className='w-100 h-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            SMM BIOSTEP
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
                            <div className="card  h-100">
                                <a target='_blank' rel="noreferrer" href="https://ekofrukt.uz/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/17.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website ekofrukt.uz
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <div className="card  h-100">
                                <a target='_blank' rel="noreferrer" href="https://ideal.uz/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/18.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website ideal.uz
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <div className="card h-100">
                                <a target='_blank' rel="noreferrer" href="https://southgroup.uz/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/19.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website southgroup.uz
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
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

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
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

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <div className="card h-100">
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

                        <div data-aos='fade-right' className=" col-lg-4 p-0 col-md-6 ">
                            <div className="card  h-100">
                                <a target='_blank' rel="noreferrer" href="https://mix-techno.uz/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/20.jpg" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website mix-techno.uz
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div data-aos='fade-up' className=" col-lg-4 p-0 col-md-6 ">
                            <div className="card  h-100">
                                <a target='_blank' rel="noreferrer" href="https://yunusobodtxtb.uz/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/12.webp" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website yunusobodtxtb.uz
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div data-aos='fade-left' className=" col-lg-4 p-0 col-md-6 ">
                            <div className="card  h-100">
                                <a target='_blank' rel="noreferrer" href="https://basaltuzb.com/">
                                    <div className="card-header">
                                        <img src="/assets/image/portfolio/13.webp" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Website basaltuzb.com
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
