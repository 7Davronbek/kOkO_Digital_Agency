import React from 'react'
import { Modal, ModalBody } from "reactstrap"
import { connect } from "react-redux"
import { sendEmail } from '../redux/actions/emailAction'
import { updateState } from '../redux/actions/emailAction'

const MyModal = (props) => {

    return (
        <>

            <Modal
                isOpen={props.isOpen}
                toggle={() => props.updateState({isOpen: false})}>
                <ModalBody>
                    <form onSubmit={props.sendEmail}>
                        <div className="inputWrap mb-4">
                            <label className="pl-2" htmlFor="name">Имя*</label>
                            <input
                                type="text"
                                className='form-control '
                                id="name"
                                required
                                name='name'
                            />
                        </div>
                        <div className="inputWrap mb-4">
                            <label className="pl-2" htmlFor="phone">Номер телефона*</label>
                            <input
                                type="text"
                                className='form-control mb-3'
                                id="phone"
                                required
                                name='phone'
                            />
                        </div>
                        <div className="inputWrap mb-4">
                            <label className="pl-2" htmlFor="bussiness">Вид бизнеса/деятельность*</label>
                            <input
                                type="text"
                                className='form-control mb-3'
                                id="bussiness"
                                required
                                name='message'
                            />
                        </div>
                        <button 
                            type='submit' 
                            className="btn myBtn d-block ml-auto align-items-center"
                             disabled={props.load}
                        >
                            {props.load ? <span className="spinner-border spinner-border-sm"/> : ""} Оставить заявку
                        </button>
                    </form>
                </ModalBody>
            </Modal>

            <div className={`myToast ${props.toast ? 'active' : ''}`}>
                <div className="card">
                    <div className="card-body">
                        <h2>Спасибо! Ваша заявка принята.</h2>
                        <h5>Наш менеджер скоро с вами свяжется</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isOpen: state.email.isOpen,
        load: state.email.load,
        toast: state.email.toast
    }
}

export default connect(mapStateToProps, { sendEmail, updateState })(MyModal)
