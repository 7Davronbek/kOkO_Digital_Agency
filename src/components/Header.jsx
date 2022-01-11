import React, { useEffect } from 'react';
import Aos from 'aos';
const Header = () => {

    useEffect(() => {
        Aos.init({
            once: false,
            duration: 1800,
            easing: 'ease-in-out'
        })
    })
    return (
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div  className="col-lg-8">
                        <h1 data-aos="fade-right">Discover, collect, and sell extraordinary NFTs</h1>
                        <p data-aos="fade-right" className="secondary">Explore the upcoming NFT projects, get all the info you need project for you. Don’t forget to check the addition.</p>
                        <button data-aos="fade-right" className="btn myBtn">Get started</button>
                    </div>

                    <div data-aos="fade-up-left" className="col-lg-4 position-relative">
                        <i ><img className='' src="/assets/image/headerbg.png" alt="" /></i>
                        <i  className='secondi'><img src="/assets/image/headerBg2.png" alt="" /></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
