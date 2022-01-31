import React, { useEffect } from 'react'
import Aos from 'aos';

const WebHeader = () => {

    useEffect(() => {
        Aos.init({
            once: false,
            duration: 1700,
        })
    })

    return (
        <>

            <div className='webHeader myWebHeader'>
                <div className="container">
                    <div className="row align-items-center">
                        <div data-aos='fade-right' className="col-lg-6">
                            <h1>Разработка сайтов</h1>
                            <p>Разработка сайтов или иными словами веб-разработка – это процесс создания веб-сайта или веб-приложения, где основными этапами этого  процесса являются веб-дизайн, верстка страниц, программирование на стороне клиента и сервиса, а также конфигурирование веб-сервиса. </p>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <i><img src="/assets/image/web.png" alt="" /></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WebHeader
