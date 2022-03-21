import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { sendEmail, sendEmail2 } from '../redux/actions/emailAction'

const Contacts = (props) => {


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
                                        <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/Koko+Digital+Agency/@41.3102038,69.3078109,15z/data=!4m5!3m4!1s0x0:0xa193c5c2e7c5a340!8m2!3d41.3101982!4d69.3078267">
                                            <img src="/assets/image/location.png" alt="" className="w-100" />
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-lg-6 ">
                                    <h4>Всё еще остались у вас вопросы?</h4>
                                    <p>Оставьте заявку и получите ответы!</p>

                                    <form onSubmit={props.sendEmail2}>

                                        <div className="row">
                                            <div className="col-md-6 mb-5">
                                                <div className="inputWrap">
                                                    <input
                                                        onClick={() => setForm(true)}
                                                        type="text"
                                                        className='form-control'
                                                        name='name'
                                                        required
                                                    />
                                                    <h6 className={`${form ? 'active' : ''}`}>Имя*</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-5">
                                                <div className="inputWrap">
                                                    <input
                                                        onClick={() => setForm1(true)}
                                                        type="text"
                                                        className='form-control'
                                                        name='phone'
                                                        required
                                                    />
                                                    <h6 className={`${form1 ? 'active' : ''}`}>Номер телефона*</h6>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mb-3">
                                                <div className="inputWrap">
                                                    <textarea
                                                        onClick={() => setForm3(true)}
                                                        className='form-control'
                                                        name='message'
                                                        required
                                                    />
                                                    <h6 className={`last ${form3 ? 'actives' : ''}`}>Сообщение*</h6>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button type='submit' className="btn myBtn d-block ml-auto">{props.load ? <span className="spinner-border spinner-border-sm"/> : ""} Оставить заявку</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </>
                        )}
                        <div className="col-lg-5 colWrap ml-auto">
                            <h1 data-aos='fade-left' >Наш адрес:</h1>

                            <div data-aos='fade-left' className="myDiv first">
                                <div className="img"><img src="/assets/icon/location.svg" alt="" /></div>
                                {/* <i className='mr-3'><img style={{width: '40px'}} src="/assets/icon/location3.png" alt="" /></i> */}
                                <div>
                                    <h3>Город Ташкент, Яшнабадский район, Улица Ташсельмаш 8.</h3>
                                    <h2>Пн-Сб 09:00 - 18:00</h2>
                                </div>
                            </div>
                            <div data-aos='fade-left' className="myDiv second">
                                <div className="img"><img src="/assets/icon/phone.svg" alt="" /></div>
                                {/* <i className='mr-3'><img style={{width: '40px'}} src="/assets/icon/location2.png" alt="" /></i> */}
                                <div>
                                    <h2>Контакты: </h2>
                                    <h3 className='mt-1'><a href="tel: +998908232838">+998 90 823 28 38</a></h3>
                                </div>
                            </div>
                            <div data-aos='fade-left' className="myDiv third">
                                <div className="img"><img src="/assets/icon/warning.svg" alt="" /></div>
                                {/* <i className='mr-3'><img style={{width: '40px'}} src="/assets/icon/location1.png" alt="" /></i> */}
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

const mapStateToProps = (state) => {
    return {
        load: state.email.load,
        send: state.email.send,
    }
}

export default connect(mapStateToProps, { sendEmail, sendEmail2 })(Contacts)
