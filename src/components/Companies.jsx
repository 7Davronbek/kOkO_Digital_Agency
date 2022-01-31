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
                            <h1 style={{textTransform: 'uppercase'}}>Нам доверяют</h1>
                        </div>
                    </div>
                    <div className="row flex-nowrap">
                        <AliceCarousel className='myCarousel' responsive={{
                            0: {
                                items: 1
                            },
                            330: {
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
                                <div><img src="/assets/image/company/comp1.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp2.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp3.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp4.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp5.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp6.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp7.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp8.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp9.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp10.png" alt="" /></div>
                            </div>
                            <div className="carouselWrap">
                                <div><img src="/assets/image/company/comp11.png" alt="" /></div>
                            </div>
                        </AliceCarousel>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies
