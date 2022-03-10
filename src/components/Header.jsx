import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'

const Header = (props) => {
    return (
        <>
        <div  className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto text-center">

                        <h1 data-aos='fade-right' className="lastH1" >We are the great OWLS</h1>

                        <button data-aos='fade-left'
                            className="btn myBtn"
                            onClick={() => props.updateState({ isOpen: true })}
                        >
                            Оставить заявку
                            <div className="click"></div>
                        </button>
                    </div>
                </div>
            </div>

        </div>

        {/* <video autoplay="true" loop="true" src="/assets/video/qwe.mp4" type="video/mp4"></video> */}
        </>
    )
}

export default connect(null, { updateState })(Header)
