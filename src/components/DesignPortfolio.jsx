import React from 'react'
import { Link } from 'react-router-dom'

const DesignPortfolio = () => {
    return (
        <div className='designPortfolio'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="cards">
                            <Link to="./AAA"><img className='w-100' src="/assets/image/desingPortfolio/alpa1.jpg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <Link to="./AAA"><img className='w-100' src="/assets/image/desingPortfolio/ayran1.jpg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <Link to="./AAA"><img className='w-100' src="/assets/image/desingPortfolio/bio1.jpg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <Link to="./AAA"><img className='w-100' src="/assets/image/desingPortfolio/centra1.jpg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <Link to="./AAA"><img className='w-100' src="/assets/image/desingPortfolio/chaqqon1.jpg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <Link to="./AAA"><img className='w-100' src="/assets/image/desingPortfolio/kulcha1.jpg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <Link to="./AAA"><img className='w-100' src="/assets/image/desingPortfolio/texno1.jpg" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignPortfolio