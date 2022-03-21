import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'

const Header = (props) => {
    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto text-center">

                            <h1 data-aos='fade-right' className="lastH1" >Нам важны ваши цели!</h1>

                            <a
                                href="https://t.me/kOkOdigital"
                                target='_blank' rel="noreferrer"
                                className="btn myBtn"
                                data-aos='fade-left'
                            // onClick={() => props.updateState({ isOpen: true })}
                            // onClick={() => setModal(true)}
                            >
                                <div className="click"></div>
                                Бесплатная консультация
                            </a>
                            {/* 
                        <button data-aos='fade-left'
                            className="btn myBtn"
                            onClick={() => props.updateState({ isOpen: true })}
                        >
                            Оставить заявку
                            <div className="click"></div>
                        </button> */}
                        </div>
                    </div>
                </div>

            </div>

            {/* <video autoplay="true" loop="true" src="/assets/video/qwe.mp4" type="video/mp4"></video> */}
        </>
    )
}

export default connect(null, { updateState })(Header)
