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
                    <div className={`bg1 ${hover1 ? 'hover' : ''}`}><img onMouseEnter={handleHover1} data-aos='fade-right' src="/assets/image/background/3.png" alt="" /></div>
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
                        <h1 data-aos='fade-left' className='myText'>У нас выгодные цены на продукцию</h1>
                        <h3 data-aos='fade-left'>Tools for the best Designers and Developersmost popularly used in the world</h3>
                    </div>
                    <div data-aos='fade-right' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer2.svg" alt="" /></i></div>
                                <h2>5 способов оплаты</h2>
                                <p>Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer1.svg" alt="" /></i></div>
                                <h2>Х товаров в каталоге</h2>
                                <p>Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении. </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer3.svg" alt="" /></i></div>
                                <h2>Полная документация и гарантия 1 год</h2>
                                <p>При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-right' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer2.svg" alt="" /></i></div>
                                <h2>5 способов оплаты</h2>
                                <p>Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer1.svg" alt="" /></i></div>
                                <h2>Х товаров в каталоге</h2>
                                <p>Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении. </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-lg-4 col-md-6 col-12 mt-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <div><i><img src="/assets/icon/offer3.svg" alt="" /></i></div>
                                <h2>Полная документация и гарантия 1 год</h2>
                                <p>При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Offer
