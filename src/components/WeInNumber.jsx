import { useEffect } from 'react'
import Aos from 'aos';

const WeInNumber = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return (
        <div className='weInNumber'>
            <div className="container">
            <div className="bg1"><img data-aos='fade-left' src="/assets/image/background/bg1.webp" alt=""/></div>
            <div className="bg2"><img data-aos='fade-right' src="/assets/image/background/bg2.webp" alt=""/></div>
            <div className="bg3"><img data-aos='fade-left' src="/assets/image/background/bg3.webp" alt=""/></div>
                <div className="row">
                    <div data-aos='fade-right' className="col-12">
                        <h1>We are in numbers</h1>
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
