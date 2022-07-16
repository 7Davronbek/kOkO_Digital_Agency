import React from 'react'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import { Link } from 'react-router-dom';

const Desing5 = () => {
    return (
        <div className='desing1'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-lg-5 mb-3">
                        <Link className='d-inline-flex align-items-center text-white' to='design'><i className="icon icon-back mr-1"></i>Desing</Link>
                    </div>
                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/chaqqon1.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/chaqqon1.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/chaqqon2.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/chaqqon2.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/chaqqon3.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/chaqqon3.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/chaqqon4.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/chaqqon4.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/chaqqon5.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/chaqqon5.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/chaqqon6.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/chaqqon6.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Desing5