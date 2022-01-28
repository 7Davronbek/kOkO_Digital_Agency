import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Companies = () => {
    return (
        <>
            <div className="companies">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>Trusted more than 150+ brand</h1>
                        </div>
                    </div>
                    <div className="row flex-nowrap">
                        <AliceCarousel className='myCarousel' responsive={{
                            // 450: {
                            //     items: 1
                            // },
                            // 480: {
                            //     items: 2
                            // },
                            // 800: {
                            //     items: 2
                            // },
                            0: {
                                items: 1
                            },
                            370: {
                                items: 2
                            },
                            550: {
                                items: 3
                            },
                            767: {
                                items: 4
                            },
                            1000: {
                                items: 5
                            },
                            1400: {
                                items: 7
                            }
                        }}  
                            mouseTracking={true} 
                            animationEasingFunction={'linear'} 
                            disableButtonsControls={true} 
                            touchTracking={true} 
                            autoPlay={true} 
                            autoPlayInterval={500} 
                            disableDotsControls={true} 
                            infinite={true}>


                            <div className="carouselWrap ">
                                <div><img src="/assets/image/header1.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header2.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header3.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header4.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header2.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header1.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header3.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header1.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header4.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/header2.png" alt="" /></div>
                            </div>
                        </AliceCarousel>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies
