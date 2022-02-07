import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const PaketsWeb = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return <>
        <div className="pakets paketsWeb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Nav tabs className='justify-content-end myNavs nav-pills nav-justified'>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Малый бизнес
                                    <h5><b>от </b> 4.000.000 <b>сум</b></h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    Сайт каталог
                                    <h5><b>от </b> 4.900.000<b>сум</b></h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    Корпоративный сайт
                                    <h5><b>от </b>  9.500.000 <b>сум</b></h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >
                                    Уникальные проекты
                                    <h5><b>от </b>  25.000.000  <b>сум</b></h5>
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1" className=''>
                                <Row className='myRow'>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-8 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur officiis illo unde, totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur officiis illo unde, totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur officiis illo unde, totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src="/assets/image/port4.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2" className='   '>
                                <Row className='myRow'>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-8 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident  repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident  repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident  repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src="/assets/image/port2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3" className='   '>
                                <Row className='myRow'>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-8 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className='mt-3'>Lornemo officia consequuntur officiis illo unde, totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                                <p className='mt-3'>Lornemo officia consequuntur officiis illo unde, totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                                <p className='mt-3'>Lornemo officia consequuntur officiis illo unde, totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src="/assets/image/port1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </TabPane>

                            <TabPane tabId="4" className='   '>
                                <Row className='myRow'>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-8 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className='mt-3'>Lorem ipsum dolor sit  totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                                <p className='mt-3'>Lorem ipsum dolor sit  totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                                <p className='mt-3'>Lorem ipsum dolor sit  totam molestias suscipit deleniti repellat quis similique, aspernatur, nisi eligendi a aliquid quod minus nulla.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <img src="/assets/image/port3.png" alt="" />
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

        <div className="paketMini">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">

                        <div className="card">
                            <div className="card-header">
                                <h5>Landing page</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 3.800.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Srok sozdaniya</p>
                                    <h6>4-6 day</h6>
                                </div>
                                <button className="btn myBtn">Get Started</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">

                        <div className="card">
                            <div className="card-header">
                                <h5>Landing page</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 3.800.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Srok sozdaniya</p>
                                    <h6>4-6 day</h6>
                                </div>
                                <button className="btn myBtn">Get Started</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">

                        <div className="card">
                            <div className="card-header">
                                <h5>Landing page</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 3.800.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Srok sozdaniya</p>
                                    <h6>4-6 day</h6>
                                </div>
                                <button className="btn myBtn">Get Started</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">

                        <div className="card">
                            <div className="card-header">
                                <h5>Landing page</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 3.800.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Srok sozdaniya</p>
                                    <h6>4-6 day</h6>
                                </div>
                                <button className="btn myBtn">Get Started</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">

                        <div className="card">
                            <div className="card-header">
                                <h5>Landing page</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 3.800.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Srok sozdaniya</p>
                                    <h6>4-6 day</h6>
                                </div>
                                <button className="btn myBtn">Get Started</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default PaketsWeb;
