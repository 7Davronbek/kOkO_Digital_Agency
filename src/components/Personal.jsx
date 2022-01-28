import React from 'react'
import AliceCarousel from 'react-alice-carousel';

const Personal = () => {
    return (
        <div className='personal'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h6>Personal</h6>
                        <h5>Our Managers</h5>
                    </div>
                </div>
                <div className="row">
                    <AliceCarousel responsive={{
                        350: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }} animationType='slide'  
                        mouseTracking 
                        // autoPlay={true} 
                        autoPlayInterval={3500} 
                        infinite={true} 
                        className=''>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal1.jpg" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Elvilra <span>Muhamedjanova</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal2.png" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Farxod <span>Eshonov</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal3.jpg" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Elvilra <span>Muhamedjanova</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal2.png" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Elvilra <span>Muhamedjanova</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal3.jpg" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Elvilra <span>Muhamedjanova</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal2.png" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Farxod <span>Eshonov</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal1.jpg" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Elvilra <span>Muhamedjanova</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal2.png" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Farxod <span>Eshonov</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal1.jpg" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Elvilra <span>Muhamedjanova</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal2.png" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Farxod <span>Eshonov</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carouserWrap">
                            <div className="card">
                                <div className="card-header position-relative">
                                    <img src="/assets/image/personal3.jpg" alt="" className="w-100" />

                                    <div className="iconWrap">
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                        <i className='icon icon-instagram'></i>
                                        <i className='icon icon-telegram'></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4>Elvilra <span>Muhamedjanova</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        
                    </AliceCarousel>
                </div>
            </div>
        </div>
    )
}

export default Personal
