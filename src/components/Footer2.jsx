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
                            <Link to='/'>
                                <i><img src="/assets/icon/logoWhite.png" alt="" /></i>
                            </Link>
                        </div>
                    </div>

                    <div className="row secondRow align-items-center">

                        <div className="col-lg-5">
                            <h4>Всё еще остались у вас вопросы?</h4>
                            <p>Оставьте заявку и получите ответы!</p>
                            <button
                                className="btn myBtn"
                                onClick={() => props.updateState({ isOpen: true })}
                            // onClick={() => setModal(true)}
                            >
                                Оставить заявку
                            </button>
                        </div>

                        <div className="col-lg-3 d-flex align-items-center mx-auto social" >
                            <a href="https://instagram.com/k0k0digital/" className=' cursor'><img src="/assets/icon/ins.svg" alt="" /></a>
                            <a href="https://t.me/kOkOdigital/" className='cursor'><img src="/assets/icon/tg.svg" alt="" /></a>
                            <a href="https://www.facebook.com/kokoagency.uz/?ref=pages_you_manage" className='cursor'><img src="/assets/image/facebook.png" alt="" /></a>
                        </div>

                        <div className="col-lg-4">
                            <a href="https://goo.gl/maps/Jxrt3TgQmxYQtSCAA">Адрес: Город Ташкент, Яшнабадский район, Улица Тараккиёт, 2
                            Пн-Сб 09:00 - 18:00
                            </a>
                            <a className="d-flex mt-2 align-items-center justify-content-center" href="tel: +998908232838">Контакты:</a>
                            <a className="d-flex  align-items-center justify-content-center" href="tel: +998908232838"> +998 90 823 28 38</a>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 text-center  mt-4 text-secondary">
                            <h6 className='d-flex align-items-center justify-content-center'>
                                <i className="mr-1"><img src="/assets/icon/g.svg" alt="" /></i> KOKO AGENCY 2019</h6>
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
