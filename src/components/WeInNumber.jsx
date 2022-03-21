import { useEffect, useState } from 'react'
import Aos from 'aos';
// import { useLocation } from 'react-router-dom';

const WeInNumber = () => {
    // const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

    const [currVal, setCurrVal] = useState(0);
    const [currVal2, setCurrVal2] = useState(0);
    const [currVal3, setCurrVal3] = useState(0);

    let val = 15
    let val2 = 44
    let val3 = 32
    let time = 10

    useEffect(() => {
        currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
        currVal2 !== val2 && setTimeout(setCurrVal2, time, currVal2 + 1);
        currVal3 !== val3 && setTimeout(setCurrVal3, time, currVal3 + 1);
    }, [val, time, currVal, currVal2, currVal3, val2, val3]);


    // const handleHover1 = () => {
    //     setHover1(true)
    //     setTimeout(() => {
    //         setHover1(false)
    //     }, 8000)
    // }

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
                <div className="my">
                    <div className={`bg2 ${hover2 ? 'hover' : ''}`}><img onMouseEnter={handleHover2} data-aos='fade-right' src="/assets/image/background/bg2.png" alt="" /></div>
                </div>
                <div className={`bg3 ${hover3 ? 'hover' : ''}`}><img onMouseEnter={handleHover3} data-aos='fade-left' src="/assets/image/background/bg5.png" alt="" /></div>

                <div className="row">
                    <div data-aos='fade-right' className={`col-12 ${' aos-init aos-animate ' ? 'lomre' : 'qweqwe'}`}>
                        <h1>Мы в цифрах</h1>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 d-flex align-items-center justify-content-center text-center text-lg-left mb-4 mb-lg-0 d-lg-block">
                        <div className="card">
                            <div className="card-body">
                                <h2>21+</h2>
                                <h3>сотрудника</h3>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 d-flex align-items-center justify-content-center text-center text-lg-left mb-4 mb-lg-0 d-lg-block">
                        <div className="card">
                            <div className="card-body text-center">
                                <h2>205+</h2>
                                <h3>довольные клиенты</h3>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 d-flex align-items-center mb-4 mb-lg-0 d-flex justify-content-end lastCard">
                        <div className="card">
                            <div className="card-body text-center">
                                <h2>302+</h2>
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
