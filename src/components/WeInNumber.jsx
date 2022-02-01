import { useEffect, useState } from 'react'
import Aos from 'aos';

const WeInNumber = () => {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

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

    const handleHover3 = () => {
        setHover3(true)
        setTimeout(() => {
            setHover3(false)
        }, 8000)
    }
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])

    return (
        <div className='weInNumber'>
            <div className="container">
            <div className={`bg1 ${hover1 ? 'hover' : ''}`}><img onMouseEnter={handleHover1} data-aos='fade-right' src="/assets/image/background/bg4.png" alt=""/></div>
            <div className={`bg2 ${hover2 ? 'hover' : ''}`}><img onMouseEnter={handleHover2} data-aos='fade-right' src="/assets/image/background/bg2.png" alt=""/></div>
            <div className={`bg3 ${hover3 ? 'hover' : ''}`}><img onMouseEnter={handleHover3} data-aos='fade-left' src="/assets/image/background/bg3.png" alt=""/></div>
                <div className="row">
                    <div data-aos='fade-right' className="col-12">
                        <h1>Мы в цифрах</h1>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 d-flex align-items-center justify-content-center text-center text-lg-left mb-4 mb-lg-0 d-lg-block">
                        <div className="card">
                            <div className="card-body">
                                <h2>12+</h2>
                                <h3>сотрудника</h3>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 d-flex align-items-center justify-content-center text-center text-lg-left mb-4 mb-lg-0 d-lg-block">
                        <div className="card">
                            <div className="card-body">
                                <h2>999+</h2>
                                <h3>запущенных рекламных кампаний</h3>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 d-flex align-items-center mb-4 mb-lg-0 d-flex justify-content-end lastCard">
                        <div className="card">
                            <div className="card-body">
                                <h2>32+</h2>
                                <h3>успешных кейсов</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeInNumber
