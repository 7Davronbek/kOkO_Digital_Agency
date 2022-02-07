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
                    <div className="row align-items-center flex-wrap-reverse">
                        <div data-aos='fade-right' className="col-lg-6">
                            <h1>Разработка сайтов</h1>
                            <p>Разработка сайтов – это создания веб-сайта где основными этапами этого процесса являются веб-дизайн, верстка страниц и  конфигурирование.</p>
                            <p>С помощью сайта вы с лёгкостью сможете показать свой продукт или компанию пользователям интернета. При заказе веб услуг в нашем агентстве, вы станете свидетелями качественной и быстрой работы нашей команды. Мы уверенны, что результаты будут вам по душе.</p>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <i><img style={{borderRadius: '20px'}} className='w-100' src="/assets/image/web4.png " alt="" /></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WebHeader
