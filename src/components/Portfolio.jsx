import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h3>Portfolio</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/assets/image/port1.png" className='w-100' alt="" />
                                </div>
                                <div className="card-body">
                                    <h5>
                                        David Art
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center mb-5 mt-5 pt-5">Our Companies</h1>
            <h1 className="text-center mb-5">Our Contacts</h1>
            <h1 className="text-center mb-5">Footer</h1>
        </>
    )
}

export default Portfolio
