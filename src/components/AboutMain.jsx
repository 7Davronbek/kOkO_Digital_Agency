import React, { useState, useEffect } from 'react'
import Aos from 'aos';

const AboutMain = () => {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const handleHover1 = () => {
        setHover1(true)
        setTimeout(() => {
            setHover1(false)
        }, 8000)
    }

    const handleHover2 = () => {
        setHover2(true)
        setTimeout(() => {
            setHover2(false)
        }, 8000)
    }

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return (
        <div className='aboutMain'>
            <div className="container position-relative">
                <div className={`bg1 ${hover1 ? 'hover' : ''}`}><img onMouseEnter={handleHover1} data-aos='fade-right' src="/assets/image/background/1.png" alt="" /></div>
                <div className={`bg2 ${hover2 ? 'hover' : ''}`}><img onMouseEnter={handleHover2} data-aos='fade-right' src="/assets/image/background/bg2.png" alt="" /></div>
                <div className="row align-items-center">
                    <div className="col-lg-7 ">
                        <h1 data-aos='fade-right' >Почему мы?</h1>
                        <p data-aos='fade-right' className='mt-5'><b>Наша команда уже на протяжении нескольких лет занимается  услугами в сфере разработки сайтов и интернет магазинов любой сложности. Полное продвижение в области SEO и СММ для вашего бизнеса.</b></p>
                        <p data-aos='fade-right' className='mt-4'><b>Опытные специалисты нашей компании готовы указать вам услуги по разработке брендбуков ( логотипов ) и разработке телеграм ботов. Более того, у нас отдельная команда для контекстной и других видов реклам. Если вы ищете тех, кому можно доверить WEB, SMM и Digital услуги, то обращайтесь в нашу компанию «kOkO». </b></p>
                    </div>
                    <div data-aos='fade-left' className="col-lg-4 ml-auto ">
                        <i><img src="/assets/image/why3.png" alt="" className="w-100 rounded" /></i>
                    </div>
                </div><div className="row align-items-center myRow">
                    <div data-aos='fade-right' className="col-lg-5 mt-5 mt-lg-0 d-none d-lg-block">
                        <i><img src="/assets/image/card1.png" alt="" className="w-100 rounded" /></i>
                    </div>
                    <div className="col-lg-6 ml-auto">
                        <h1 data-aos='fade-left' >Работая с нами вы получите:</h1>
                        <p data-aos='fade-left' className='mt-5'><b>Полный цикл услуг;</b></p>
                        <p data-aos='fade-left' className='mt-5'><b>Наша команда уже на протяжении нескольких лет занимается  услугами в сфере разработки сайтов и интернет магазинов любой сложности. Полное продвижение в области SEO и SMM для вашего бизнеса.</b></p>
                        <p data-aos='fade-left' className='mt-4'><b>Опытные специалисты нашей компании готовы указать вам услуги по разработке брендбуков ( логотипов ) и разработке телеграм ботов. Более того, у нас отдельная команда для контекстной и других видов реклам. Если вы ищете тех, кому можно доверить WEB, SMM и Digital услуги, то обращайтесь в нашу компанию «kOkO». </b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain