import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const PaketsInternet = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return <>
        <div className="pakets paketsInternet">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Nav tabs className='justify-content-end myNavs nav-pills nav-justified'>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    STANDART
                                    <h5>4.000.000 <b>сум</b></h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    NORMAL
                                    <h5>6.000.000 <b>сум</b></h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    PRO
                                    <h5>10.000.000 <b>сум</b></h5>
                                </NavLink>
                            </NavItem>
                            <NavItem className='myItem'>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >
                                    kOkO Special
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1" className=''>
                                <Row className='myRow'>
                                    <div data-aos='fade-right' className=" col-lg-8 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className='mt-3'>Контент-план;</p>
                                                <p className='mt-3'>Бюджет на рекламу 1.000.000 сум;</p>
                                                <p className='mt-3'>Создание продающей страницы;</p>
                                                <p className='mt-3'>12 (+3) стартовых постов;</p>
                                                <p className='mt-3'>12 (+3)   сторис + иконки актуальных;</p>
                                                <p className='mt-3'>Настройка и запуск таргетинга;</p>
                                                <p className='mt-3'>Ведение социальных сетей в Instagram, Facebook, Telegram;</p>
                                                <p className='mt-3'>Анимированный дизайн для публикаций (Instagram, Facebook) или монтаж видео;</p>
                                                <p className='mt-3'>Копирайтинг (написание текстов для постов);</p>
                                                <p className='mt-3'>
                                                    Работа с сообщениями и комментариями
                                                    (Community Management);
                                                </p>
                                                <p className='mt-3'>Анализ компании и конкурентов, разработка маркетинговой стратегии</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-lg-4 col-12 mb-2 px-2">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2" className='   '>
                                <Row className='myRow'>
                                    <div data-aos='fade-right' className=" col-lg-8 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="mt-3">Контент-план;</p>
                                                <p className="mt-3">Бюджет на рекламу 2.000.000 сум;</p>
                                                <p className="mt-3">Создание продающей страницы;</p>
                                                <p className="mt-3">15 (+3) стартовых постов;</p>
                                                <p className="mt-3">15 (+3)   сторис + иконки актуальных;</p>
                                                <p className="mt-3">Настройка и запуск таргетинга;</p>
                                                <p className="mt-3">
                                                    Ведение социальных сетей в Instagram, Facebook, Telegram + видео контент Tik Tok, You Tube;
                                                </p>
                                                <p className="mt-3">3 Анимированный дизайн для публикаций (Instagram, Facebook, Tik Tok, You Tube) или монтаж видео;</p>
                                                <p className="mt-3">Копирайтинг (написание текстов для постов);</p>
                                                <p className="mt-3">
                                                    Работа с сообщениями и комментариями
                                                    (Community Management);
                                                </p>
                                                <p className="mt-3">Анализ компании и конкурентов, разработка маркетинговой стратегии</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-lg-4 col-12 mb-2 px-2">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src="/assets/image/port2.png" className='w-100' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3" className=''>
                                <Row className='myRow'>
                                    <div data-aos='fade-right' className=" col-lg-8 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="mt-3">Контент-план;</p>
                                                <p className="mt-3">Бюджет на рекламу 4.000.000 сум;</p>
                                                <p className="mt-3">Создание продающей страницы;</p>
                                                <p className="mt-3">18 (+3) стартовых постов;</p>
                                                <p className="mt-3">18 (+3)   сторис + иконки актуальных;</p>
                                                <p className="mt-3">Настройка и запуск таргетинга;</p>
                                                <p className="mt-3">Ведение социальных сетей в Instagram, Facebook, Telegram + видео контент Tik Tok, You Tube, а так же Google, Yandex;</p>
                                                <p className="mt-3">4 Анимированный дизайн для публикаций (Instagram, Facebook, Tik Tok, You Tube) или монтаж видео;</p>
                                                <p className="mt-3">Копирайтинг (написание текстов для постов);</p>
                                                <p className="mt-3">
                                                    Работа с сообщениями и комментариями
                                                    (Community Management);
                                                </p>
                                                <p className="mt-3">Анализ компании и конкурентов, разработка маркетинговой стратегии</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-lg-4 col-12 mb-2 px-2">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src="/assets/image/port1.png" className='w-100' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </TabPane>

                            <TabPane tabId="4" className='   '>
                                <Row className='myRow'>
                                    <div data-aos='fade-right' className=" col-lg-8 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="mt-3">Работа с блоггерами   от 1.000.000 сум</p>
                                                <p className="mt-3">Организация фото и видео съёмок   от 500.000 сум</p>
                                                <p className="mt-3">Создание  бренда (логобук, брендбук)    от 500.000</p>
                                                <p className="mt-3">Настройка таргетированной рекламы      от 500.000 сум</p>
                                                <p className="mt-3">Настройка контекстной рекламы     от  500.000 сум</p>
                                                <p className="mt-3">Разработка контент плана на 1 месяц     от  300.000 сум</p>
                                                <p className="mt-3">Анализ компании и ее конкурентов    от  500.000 сум</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-lg-4 col-12 mb-2 px-2">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src="/assets/image/port3.png" className='w-100' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </TabPane>

                        </TabContent>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default PaketsInternet;
