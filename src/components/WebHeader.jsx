import React, { useEffect } from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom'

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
                        <div data-aos='fade-right'  className="col-lg-6">
                            <h1>Разработка сайтов</h1>
                            <p>Разработка сайтов или иными словами веб-разработка – это процесс создания веб-сайта или веб-приложения, где основными этапами этого  процесса являются веб-дизайн, верстка страниц, программирование на стороне клиента и сервиса, а также конфигурирование веб-сервиса. </p>
                        </div>
                        <div data-aos='fade-left'  className="col-lg-6">
                            <i><img src="/assets/image/web.png" alt="" /></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="webConsist myWebConsist">
                <div className="container">
                    <div className="row align-items-center">
                        <div data-aos='fade-right'  className="col-lg-5">
                            <i><img src="/assets/image/card2.png" alt="" className="w-100" /></i>
                        </div>
                        <div data-aos='fade-left'  className="col-lg-6 ml-auto">
                            <h1>Разработка сайтов:</h1>
                            <p>Интернет-магазин</p>
                            <p>Landing Page</p>
                            <p>Корпоративные сайты</p>
                            <p>Сложные системы</p>
                            <p>Техническая поддержка</p>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div data-aos='fade-right'  className="col-lg-6">
                            <h1>Разработка телеграм ботов</h1>
                            <h6>Телеграм бот – это программа, выполняющая различные действия, автоматически или по определенной команде. Боты «Телеграм» универсальны и выполняют множество задач на любой вкус. Найти информацию, скачать книгу, фильм, музыку, развлечь — это лишь маленький перечень возможностей ботов</h6>
                            <p>Телеграм бот</p>
                            <p>Чат бот</p>
                            <p>Автоматизация</p>
                            <p>API Программирование</p>
                        </div>
                        <div data-aos='fade-left'  className="col-lg-5 ml-auto">
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

            <div className="webWhyWe myWebWhyWe">
                <div className="container">
                    <div className="row">
                        <div data-aos='fade-up' className="col-12 text-center">
                            <h2>Почему Мы:</h2>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div data-aos='fade-right' className="col-lg-6">
                            <h1>Поисковое продвижение</h1>
                            <p> Комплексная услуга, включающая в себя SEO оптимизацию сайта, аналитику и контент-маркетинг. Выведем ваш сайт в Топ-5 в поисковых системах Яндекс и Google по запросам, которые актуальны для вашего бизнеса.</p>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <i><img src="/assets/image/card2.png" alt="" className="rounded" /></i>
                        </div>
                    </div>

                    <div className="row align-items-center mb-5">
                        <div data-aos='fade-right' className="col-lg-6">
                            <i><img src="/assets/image/card2.png" alt="" className="rounded" /></i>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <h1>Контекстная реклама</h1>
                            <p>
                                Создание и сопровождение эффективной контекстной рекламы в Яндексе и Google. Наши рекламные решения - это не действия наудачу, а точное попадание в цель.</p>
                        </div>
                    </div>

                    <div className="row align-items-center mb-5">
                        <div data-aos='fade-right' className="col-lg-6">
                            <h1>Социальные сети </h1>
                            <p>
                                Реклама в соц. сетях позволит охватить около 70% населения нашей страны и многократно повысить узнаваемость вашего бренда, продуктов и услуг.</p>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <i><img src="/assets/image/card1.png" alt="" className="rounded" /></i>
                        </div>
                    </div>

                </div>
            </div>

            <div className="webSupport myWebSupport">
                <div className="container">
                    <div className="row align-items-center">
                        <div data-aos='fade-up' className="col-2">
                            <i><img src="/assets/image/contactBg.svg" alt="" /></i>
                        </div>
                        <div data-aos='fade-up' className="col-10">
                            <h1>Нужна команда для поддержки вашего сайта?</h1>
                            <p>Коротко опишите свои задачи и узнайте, как и чем мы можем помочь в развитии вашего бизнеса</p>
                            <a className='btn myBtn' href="tel: +998943698058">Call Us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="myWebDepends">
                <div className="container">
                    <div className="row">
                        <div data-aos='fade-up' className="col-12 text-center">
                            <h1>Вам также подходят</h1>
                        </div>
                        <div data-aos='fade-up' className="col-lg-5 offset-lg-1">
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
