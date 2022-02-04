import { useState } from "react"
import { Link } from "react-router-dom"
import { Modal, ModalBody } from "reactstrap"

const Footer2 = () => {
    const [modal, setModal] = useState(false)
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
                                onClick={() => setModal(true)}
                            >Оставить заявку</button>
                        </div>

                        <div className="col-lg-3 d-flex align-items-center mx-auto social" >
                            <i className=' cursor'><img src="/assets/icon/ins.svg" alt="" /></i>
                            <i className=' cursor'><img src="/assets/icon/tg.svg" alt="" /></i>
                            <i className='cursor'><img src="/assets/image/facebook.png" alt="" /></i>
                        </div>

                        <div className="col-lg-4">
                            <a>Адрес: Город Ташкент, Яшнабадский район, Улица Тараккиёт, 2
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

            <Modal isOpen={modal} toggle={() => setModal(false)}>
                <ModalBody>
                    <form>
                        <div className="inputWrap mb-4">
                            <label className="pl-2" htmlFor="name">Имя*</label>
                            <input
                                type="text"
                                className='form-control '
                                id="name"
                                required
                            />
                        </div>
                        <div className="inputWrap mb-4">
                            <label className="pl-2" htmlFor="phone">Номер телефона*</label>
                            <input
                                type="text"
                                className='form-control mb-3'
                                id="phone"
                                required
                            />
                        </div>
                        <div className="inputWrap mb-4">
                            <label className="pl-2" htmlFor="bussiness">Вид бизнеса/деятельность*</label>
                            <input
                                type="text"
                                className='form-control mb-3'
                                id="bussiness"
                                required
                            />
                        </div>
                        <button className="btn myBtn d-block ml-auto">Оставить заявку</button>
                    </form>
                </ModalBody>
            </Modal>

        </>
    )
}

export default Footer2
