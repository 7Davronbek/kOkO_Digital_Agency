import React from 'react'
import { connect } from 'react-redux';
import { updateState } from '../redux/actions/emailAction';

const PaketsWeb = () => {

    return <>

        <div className="paketMini myPakets">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 d-flex flex-column  align-items-center justify-content-center">
                        <div data-aos='fade-right' className="d-flex mb-2">
                            <i className='mr-2'><img src="/assets/icon/offer3.svg" alt="" /></i>
                            <h6 style={{ lineHeight: 1.5 }}>Домен в зоне .uz в ПОДАРОК</h6>
                        </div>
                        <div data-aos='fade-left' className="d-flex mb-2">
                            <i className='mr-2'><img src="/assets/icon/offer3.svg" alt="" /></i>
                            <h6 style={{ lineHeight: 1.5 }}>Хостинг на 1 год в ПОДАРОК</h6>
                        </div>
                        <div data-aos='fade-right' className="d-flex">
                            <i className='mr-2'><img src="/assets/icon/offer3.svg" alt="" /></i>
                            <h6 style={{ lineHeight: 1.5 }}>Бесплатная техническая поддержка (2 месяца)</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">

                        <div data-aos='fade-right' className="card overflow-hidden">
                            <h2 className='paketMiniH2'>без НДС</h2>
                            <div className="card-header">
                                <h5>Landing page</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 2.900.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>4-10 дней</h6>
                                </div>

                                <a href="https://t.me/kOkOdigital" target='_blank' rel="noreferrer" className="btn myBtn"> <div className="click"></div> Написать в телеграм</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div data-aos='fade-right' className="card overflow-hidden">
                            <h2 className='paketMiniH2'>без НДС</h2>
                            <div className="card-header">
                                <h5>Малый бизнес</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 3.900.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>7-14 дней</h6>
                                </div>

                                <a href="https://t.me/kOkOdigital" target='_blank' rel="noreferrer" className="btn myBtn"> <div className="click"></div> Написать в телеграм</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div data-aos='fade-right' className="card overflow-hidden">
                            <h2 className='paketMiniH2'>без НДС</h2>
                            <div className="card-header">
                                <h5>Сайт каталог</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 4.900.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>10-20 дней</h6>
                                </div>
                                <a href="https://t.me/kOkOdigital" target='_blank' rel="noreferrer" className="btn myBtn"> <div className="click"></div> Написать в телеграм</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div data-aos='fade-right' className="card overflow-hidden">
                            <h2 className='paketMiniH2'>без НДС</h2>
                            <div className="card-header">
                                <h5>Корпоративный сайт</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 9.500.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>20-25 дней</h6>
                                </div>
                                <a href="https://t.me/kOkOdigital" target='_blank' rel="noreferrer" className="btn myBtn"> <div className="click"></div> Написать в телеграм</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div data-aos='fade-right' className="card overflow-hidden">
                            <h2 className='paketMiniH2'>без НДС</h2>
                            <div className="card-header">
                                <h5>Интернет-магазин</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 12.400.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>21-49 дней</h6>
                                </div>
                                <a href="https://t.me/kOkOdigital" target='_blank' rel="noreferrer" className="btn myBtn"> <div className="click"></div> Написать в телеграм</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 col-12 last">

                        <div data-aos='fade-right' className="card overflow-hidden">
                            <h2 className='paketMiniH2 last'>без НДС</h2>
                            <div className="card-header">
                                <h5>Уникальные проекты</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 25.000.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>&infin;</h6>
                                </div>
                                <a href="https://t.me/kOkOdigital" target='_blank' rel="noreferrer" className="btn myBtn"> <div className="click"></div> Написать в телеграм</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default connect(null, { updateState })(PaketsWeb);
