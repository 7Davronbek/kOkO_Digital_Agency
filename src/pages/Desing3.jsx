import React from 'react'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import { Link } from 'react-router-dom';

const Desing3 = () => {
    return (
        <div className='desing1'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-lg-5 mb-3">
                        <Link className='d-inline-flex align-items-center text-white' to='design'><i className="icon icon-back mr-1"></i>Desing</Link>
                    </div>
                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/bio1.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/bio1.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/bio2.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/bio2.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/bio3.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/bio3.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/bio4.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/bio4.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/bio5.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/bio5.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/bio6.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/bio6.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/bio7.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/bio7.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/bio8.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/bio8.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Desing3