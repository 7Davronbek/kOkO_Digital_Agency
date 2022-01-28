import React, { useEffect } from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom'
import WhyWe from './WhyWe';
import Support from './Support';

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

            <div className="webConsist myWebConsist">
                <div className="container">
                    <div className="row align-items-center">
                        <div data-aos='fade-right' className="col-lg-5">
                            <i><img src="/assets/image/card2.png" alt="" className="w-100" /></i>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6 ml-auto">
                            <h1>Разработка сайтов:</h1>
                            <p>Интернет-магазин</p>
                            <p>Landing Page</p>
                            <p>Корпоративные сайты</p>
                            <p>Сложные системы</p>
                            <p>Техническая поддержка</p>
                        </div>
                    </div>

                    <div className="row flex-lg-row flex-column-reverse align-items-center mt-4">
                        <div data-aos='fade-right' className="col-lg-6">
                            <h1>Разработка телеграм ботов</h1>
                            <h6>Телеграм бот – это программа, выполняющая различные действия, автоматически или по определенной команде. Боты «Телеграм» универсальны и выполняют множество задач на любой вкус. Найти информацию, скачать книгу, фильм, музыку, развлечь — это лишь маленький перечень возможностей ботов</h6>
                            <p>Телеграм бот</p>
                            <p>Чат бот</p>
                            <p>Автоматизация</p>
                            <p>API Программирование</p>
                        </div>
                        <div data-aos='fade-left' className="col-lg-5 ml-auto">
                            <i><img src="/assets/image/card2.png" alt="" /></i>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4 myRow">
                        <div data-aos='fade-right' className="col-lg-5">
                            <i><img src="/assets/image/card2.png" alt="" className="w-100" /></i>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6 ml-auto">
                            <h1>Разработка интернет магазинов</h1>
                            <h5>Интернет магазин- это веб страница, которая продает товары либо услуги с помощью сети Интернет. Интернет магазин- это некий способ открыть свой бизнес, но не тратя при этом деньги за аренду. Интернет-магазин можно создавать с нуля или на основе уже имеющегося бизнеса.  Благодаря интернет-магазинам люди могут совершить покупки в удобное время суток, из любой точки земного шара. Это эффективный и прибыльный канал продаж.</h5>
                        </div>
                    </div>

                </div>
            </div>

            <WhyWe />
            <Support />

            <div className="myWebDepends">
                <div className="container">
                    <div className="row">
                        <div data-aos='fade-up' className="col-12 text-center">
                            <h1>Вам также подходят</h1>
                        </div>
                        <div data-aos='fade-up' className="col-lg-5 mb-4 mb-lg-0 offset-lg-1">
                            <Link to='/design'>
                                <div className="card">
                                    <div className="card-body">
                                        <i><img src="/assets/image/card3.png" alt="" className="w-100" /></i>
                                        <h5>Дизайн</h5>
                                        <p>Разработка брендбуков, Веб-дизайн, СММ-дизайн</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div data-aos='fade-up' className="col-lg-5">
                            <Link to='/internet-marketing'>
                                <div className="card">
                                    <div className="card-body">
                                        <i><img src="/assets/image/card1.png" alt="" className="w-100" /></i>
                                        <h5>Интернет маркетинг</h5>
                                        <p>SMM, SEO, Контекстная реклама</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default WebHeader
