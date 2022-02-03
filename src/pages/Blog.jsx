import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners';
import Aos from 'aos';

const Blog = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 700);
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return <>
        {isLoading ? (
            <div className="loader ">
                <h5 className='mr-4'>Blog</h5>
                <RingLoader color="#fff" size="35" loading={isLoading} />
            </div>
        ) : (
            ""
        )}
        <div className="blog">
            <div className="container">
                {/* <div className="row">
                <div className="col-12">
                    <h1>Blog</h1>
                </div>
            </div> */}
                <div className="row">
                    <div data-aos='fade-right' className="col-lg-4 col-md-6 h-100 mb-4">
                        <div className="card">
                            <div className="card-header p-0">
                                <img src="/assets/image/card1.png" alt="" className="w-100" />
                            </div>
                            <div className="card-body p-3">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ur  neque suscipit aliquam.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 col-md-6 h-100 mb-4">
                        <div className="card">
                            <div className="card-header p-0">
                                <img src="/assets/image/card2.webp" alt="" className="w-100" />
                            </div>
                            <div className="card-body p-3">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ur  neque suscipit aliquam.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-lg-4 col-md-6 h-100 mb-4">
                        <div className="card">
                            <div className="card-header p-0">
                                <img src="/assets/image/card3.png" alt="" className="w-100" />
                            </div>
                            <div className="card-body p-3">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ur  neque suscipit aliquam.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-right' className="col-lg-4 col-md-6 h-100 mb-4">
                        <div className="card">
                            <div className="card-header p-0">
                                <img src="/assets/image/card3.png" alt="" className="w-100" />
                            </div>
                            <div className="card-body p-3">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ur  neque suscipit aliquam.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 col-md-6 h-100 mb-4">
                        <div className="card">
                            <div className="card-header p-0">
                                <img src="/assets/image/card4.png" alt="" className="w-100" />
                            </div>
                            <div className="card-body p-3">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ur  neque suscipit aliquam.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-lg-4 col-md-6 h-100 mb-4">
                        <div className="card">
                            <div className="card-header p-0">
                                <img src="/assets/image/card1.png" alt="" className="w-100" />
                            </div>
                            <div className="card-body p-3">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ur  neque suscipit aliquam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Blog;
