import { useEffect, useState } from "react"

const Header = () => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, 700)
    }, [])
    return (
        <div className='header'>
            <div className="video">
                {/* <video 
                    style={{ opacity: '0.5' }}
                    className='' autoPlay loop muted src="/assets/image/bg3.mp4" 
                    type="video/mp4"
                /> */}
                <img src="/assets/image/web.webp" style={{ height: '70vh', opacity: '0.3' }} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto text-center">
                        {load ? (
                            <>
                                <h1 data-aos='fade-right'>Полное продвижение бизнеса в области интернет маркетинга</h1>
                                <button data-aos='fade-left' className="btn myBtn">Оставить заявку</button>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
