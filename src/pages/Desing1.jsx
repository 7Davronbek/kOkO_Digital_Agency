import React from 'react'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";

const Desing1 = () => {
    return (
        <div className='desing1'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/alpa1.jpg" data-fancybox="gallery" >
                                <img alt='kOkO' src="/assets/image/desingPortfolio/alpa1.jpg" className='w-100 ' />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cards">
                            <a href="/assets/image/desingPortfolio/alpa1.jpg" data-fancybox="gallery" ><img alt='kOkO' src="/assets/image/desingPortfolio/alpa1.jpg" className='w-100 ' /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desing1