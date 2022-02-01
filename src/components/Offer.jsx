import { useEffect } from 'react'
import Aos from 'aos';

const Offer = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return (
        <div className='offer'>
            <div className="container">
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
