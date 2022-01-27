import { Link } from "react-router-dom"

const Footer2 = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-4 d-flex align-items-center justify-content-center">
                            <Link to='/'>
                                <i><img src="/assets/icon/logoWhite.png" alt="" /></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 d-flex align-items-center mx-auto justify-content-center position-relative social" >
                        <i className='mr-4 cursor'><img src="/assets/icon/ins.svg" alt="" /></i>
                        <i className='mr-4 cursor'><img src="/assets/icon/tg.svg" alt="" /></i>
                        <i className='cursor'><img src="/assets/image/facebook.png" alt="" /></i>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center  mt-4 text-secondary">
                            <h6 className='d-flex align-items-center justify-content-center'><i className="mr-1"><img src="/assets/icon/g.svg" alt="" /></i> KOKO AGENCY 2022</h6>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer2
