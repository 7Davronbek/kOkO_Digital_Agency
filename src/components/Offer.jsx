import { useEffect, useState } from 'react'
import Aos from 'aos';

const Offer = () => {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)

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

    const handleHover4 = () => {
        setHover4(true)
        setTimeout(() => {
            setHover4(false)
        }, 8000)
    }

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return (
        <div className='offer'>
            <div className="container position-relative">
                <div className="my">
                    <div className={`bg1 ${hover1 ? 'hover' : ''}`}><img onMouseEnter={handleHover1} data-aos='fade-right' src="/assets/image/3dLogo.png" alt="" /></div>
                </div>
                <div className="my">
                    <div className={`bg2 ${hover2 ? 'hover' : ''}`}><img onMouseEnter={handleHover2} data-aos='fade-left' src="/assets/image/background/bg5.png" alt="" /></div>
                </div>
                <div className="my">
                    <div className={`bg3 ${hover3 ? 'hover' : ''}`}><img onMouseEnter={handleHover3} data-aos='fade-up' src="/assets/image/background/4.png" alt="" /></div>
                </div>
                <div className="my">
                    <div className={`bg4 ${hover4 ? 'hover' : ''}`}><img onMouseEnter={handleHover4} data-aos='fade-right' src="/assets/image/background/bg6.png" alt="" /></div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 data-aos='fade-left' className='myText'>У нас выгодные цены на все услуги</h1>
                        <h3 data-aos='fade-left'>Работая с нами вы получите</h3>
                    </div>
                    <div data-aos='fade-right' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer2.svg" alt="" /></i></div>
                                <h2>Cпособ оплаты</h2>
                                <p>Вы можете оплатить услугу наличными, картой или перечеслением.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer1.svg" alt="" /></i></div>
                                <h2>Почему мы?</h2>
                                <p>Наша команда уже на протяжении нескольких лет занимается  услугами в сфере разработки сайтов и интернет магазинов любой сложности. Полное продвижение в области SEO и СММ для вашего бизнеса.  </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer3.svg" alt="" /></i></div>
                                <h2>Гарантия</h2>
                                <p>Наша команда выполняет проекты с нуля и «под ключ». Мы полностью даём гарантию на все наши услуги</p>
                            </div>
                        </div>
                    </div>

               

                </div>
            </div>
        </div>
    )
}

export default Offer
