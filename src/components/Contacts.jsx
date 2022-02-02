import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import { useLocation } from 'react-router-dom'

const Contacts = () => {

    const [form, setForm] = useState(false)
    const [form1, setForm1] = useState(false)
    const [form3, setForm3] = useState(false)

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
    

    const location = useLocation()

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])

    return (
        <div className='contacts'>
            <div className="form position-relative">
                <div className="container position-relative">
                    <div className={`bg1 ${hover1 ? 'hover' : ''}`}><img onMouseEnter={handleHover1} data-aos='fade-right' src="/assets/image/background/1.png" alt="" /></div>
                    <div className={`bg2 ${hover2 ? 'hover' : ''}`}><img onMouseEnter={handleHover2} data-aos='fade-left' src="/assets/image/background/bg6.png" alt="" /></div>
                    <div className="row align-items-center">

                        {location.pathname === '/' ? (
                            <>
                                <div data-aos='fade-right' className="col-lg-6">
                                    <div className="i">
                                        <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/ASKLEPIY+Group/@41.352567,69.260804,15z/data=!4m5!3m4!1s0x0:0xdcf85c2d56154ebd!8m2!3d41.3526523!4d69.2640899?hl=ru">
                                            <img src="/assets/image/location.png" alt="" className="w-100" />
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-lg-6 ">
                                    <h4>Let's Talk</h4>
                                    <p>Fill up the form our team will get back to you within 24 Hours</p>

                                    <div className="row">
                                        <div className="col-md-6 mb-5">
                                            <div className="inputWrap">
                                                <input
                                                    onClick={() => setForm(true)}
                                                    type="text"
                                                    className='form-control'
                                                />
                                                <h6 className={`${form ? 'active' : ''}`}>First Name*</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-5">
                                            <div className="inputWrap">
                                                <input onClick={() => setForm1(true)} type="text" className='form-control' />
                                                <h6 className={`${form1 ? 'active' : ''}`}>Phone number*</h6>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <div className="inputWrap">
                                                <textarea onClick={() => setForm3(true)} className='form-control' />
                                                <h6 className={`last ${form3 ? 'actives' : ''}`}>Messages*</h6>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn myBtn d-block ml-auto">Оставить заявку</button>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}
                        <div className="col-lg-5 colWrap ml-auto">
                            <h1 data-aos='fade-left' >Адрес магазина и сервисного центра:</h1>

                            <div data-aos='fade-left' className="myDiv first">
                                <div className="img"><img src="/assets/icon/location.svg" alt="" /></div>
                                <div>
                                    <h3>Адрес: Город Ташкент, Яшнабадский район, Улица Тараккиёт, 2.</h3>
                                    <h2>Пн-Сб 09:00 - 18:00</h2>
                                </div>
                            </div>
                            <div data-aos='fade-left' className="myDiv second">
                                <div className="img"><img src="/assets/icon/phone.svg" alt="" /></div>
                                <div>
                                    <h2>Контакты: </h2>
                                    <h3 className='mt-1'><a href="tel: +998908232838">+998 90 823 28 38</a></h3>
                                </div>
                            </div>
                            <div data-aos='fade-left' className="myDiv third">
                                <div className="img"><img src="/assets/icon/warning.svg" alt="" /></div>
                                <div>
                                    <h3>Ориентир: улица Боткина</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
