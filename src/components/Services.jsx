import React from 'react'

const Services = () => {
    return (
        <>
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4>Our Services</h4>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="card">
                            <div className="card-body position-relative">
                                <i> <img src="/assets/image/card2.webp" alt="" className="w-100" /></i>
                                <h5>Web Programming</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body position-relative">
                                <i> <img src="/assets/image/card1.webp" alt="" className="w-100" /></i>
                                <h5>SMM Targeting</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body position-relative">
                                <i> <img src="/assets/image/card3.webp" alt="" className="w-100" /></i>
                                <h5>Marketing</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body position-relative">
                                <i> <img src="/assets/image/card4.webp" alt="" className="w-100" /></i>
                                <h5>Pro design</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="servicesLine"></div>
{/* 
            <div className="div mt-5 pt-5">
                <ul className='d-flex align-items-center'>
                    <li><img src="/assets/image/card1.webp" alt="" /></li>
                    <li><img src="/assets/image/card1.webp" alt="" /></li>
                    <li><img src="/assets/image/card1.webp" alt="" /></li>
                    <li><img src="/assets/image/card1.webp" alt="" /></li>
                    <li><img src="/assets/image/card1.webp" alt="" /></li>
                    <li><img src="/assets/image/card1.webp" alt="" /></li>
                </ul>
            </div> */}
        </>
    )
}

export default Services
