import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { updateState } from '../redux/actions/emailAction'

const Footer2 = (props) => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center d-flex align-items-center justify-content-center">
                            <Link to='/' className="footerLogo">
                                <i><img style={{ width: '160px' }} src="/assets/icon/logo.png" alt="" /></i>
                            </Link>
                        </div>
                    </div>

                    <div className="row secondRow align-items-center">

                        <div className="col-lg-5">
                            <h4>Всё еще остались у вас вопросы?</h4>
                            <p>Оставьте заявку и получите ответы!</p>

                            <a
                                href="https://t.me/kOkOdigital"
                                target='_blank' rel="noreferrer"
                                className="btn myBtn"
                            // onClick={() => props.updateState({ isOpen: true })}
                            // onClick={() => setModal(true)}
                            >
                                <div className="click"></div>
                                Бесплатная консультация
                            </a>

                        </div>

                        <div className="col-lg-3 d-flex align-items-center mx-auto social" >
                            <a target='_blank' rel="noreferrer"
                                // href="https://www.instagram.com/kokoagency.uz/"
                                className=' cursor'><img src="/assets/icon/ins.svg" alt="" /></a>
                            <a target='_blank' rel="noreferrer" href="https://t.me/kOkOdigital/" className='cursor'><img src="/assets/icon/tg.svg" alt="" /></a>
                            <a target='_blank' rel="noreferrer"
                                // href="https://www.facebook.com/kokoagency.uz/?ref=pages_you_manage"
                                className='cursor'><img src="/assets/image/facebook.png" alt="" /></a>
                        </div>

                        <div className="col-lg-4">
                            <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/Koko+Digital+Agency/@41.3102038,69.3078109,15z/data=!4m5!3m4!1s0x0:0xa193c5c2e7c5a340!8m2!3d41.3101982!4d69.3078267">Адрес: Город Ташкент, Яшнабадский район, Улица Ташсельмаш 8.
                                Пн-Сб 09:00 - 18:00
                            </a>
                            <a className="d-flex mt-2 align-items-center justify-content-center" href="tel: +998908232838">Контакты:</a>
                            <a className="d-flex  align-items-center justify-content-center" href="tel: +998908232838"> +998 90 823 28 38</a>
                            <a className="d-flex  align-items-center justify-content-center" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@kokoagency.uz">info@kokoagency.uz</a>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 text-center  mt-4 text-secondary">
                            <h6 className='d-flex align-items-center justify-content-center'>
                                <i className="mr-1"><img src="/assets/icon/g.svg" alt="" /></i> kOkO digital agency | All Rights Reserved</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isOpen: state.email.isOpen
    }
}

export default connect(mapStateToProps, { updateState })(Footer2)
