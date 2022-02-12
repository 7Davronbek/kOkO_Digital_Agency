import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'

const Header = (props) => {
    return (
        <div className='header'>
            {/* <div className="video">
                <img src="/assets/image/mainCover.jpg" style={{ height: '70vh', opacity: '0.3' }} alt="" />
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto text-center">
                        {/* {load ? ( */}
                            <>
                                {/* <h1 data-aos='fade-right'>Полное продвижение бизнеса</h1>
                                <h1 className="lastH1" data-aos='fade-right'> в области интернет маркетинга</h1> */}
                                <h1 className="lastH1" data-aos='fade-right'>We are the great OWLS</h1>
                                <button
                                    data-aos='fade-left'
                                    className="btn myBtn"
                                    onClick={() => props.updateState({isOpen: true})}
                                >
                                    Оставить заявку</button>
                            </>
                        {/* ) : null} */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default connect(null, { updateState })(Header)
