import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import { useLocation } from 'react-router-dom'

const Contacts = () => {

    const [form, setForm] = useState(false)
    const [form1, setForm1] = useState(false)
    const [form2, setForm2] = useState(false)
    const [form3, setForm3] = useState(false)

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
                <div className="container">
                    <div className="row align-items-center">

                        {location.pathname === '/' ? (
                            <>
                                <div data-aos='fade-right' className="col-lg-6">
                                    <div className="i">
                                        <img src="/assets/image/location.png" alt="" className="w-100" />
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

                                            <div className="col-md-12 mb-5">
                                                <div className="inputWrap">
                                                    <input onClick={() => setForm2(true)} type="email" className='form-control' />
                                                    <h6 className={`${form2 ? 'active' : ''}`}>Email Address*</h6>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-3">
                                                <div className="inputWrap">
                                                    <textarea onClick={() => setForm3(true)} className='form-control' />
                                                    <h6 className={`last ${form3 ? 'actives' : ''}`}>Messages*</h6>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button className="btn myBtn d-block ml-auto">Send Messages</button>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )}
                        <div className="col-lg-5 colWrap ml-auto">
                            <h1 data-aos='fade-left' >Адрес магазина и сервисного центра:</h1>

                            <div data-aos='fade-left' className="myDiv">
                                <div className="img"><img src="/assets/icon/location.svg" alt="" /></div>
                                <div>
                                    <h3>Toshkent, Chilonzor tumani, Bunyodkor shoh ko'chasi, Nakkoshlik ko'ch., 41.</h3>
                                    <h2>Пн-Сб 09:00 - 19:00</h2>
                                </div>
                            </div>
                            <div data-aos='fade-left' className="myDiv second">
                                <div className="img"><img src="/assets/icon/phone.svg" alt="" /></div>
                                <div>
                                    <h2>Сервисный центр</h2>
                                    <h3 className='mt-1'><a href="tel: +998943698058">+9989 (90) 777-77-77</a></h3>
                                </div>
                            </div>
                            <div data-aos='fade-left' className="myDiv">
                                <div className="img"><img src="/assets/icon/warning.svg" alt="" /></div>
                                <div>
                                    <h3>Mo'ljal: Shahar bojxonasi, Singapur instituti (MDIS), Mevazor Mahalla, Fabienne.</h3>
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
