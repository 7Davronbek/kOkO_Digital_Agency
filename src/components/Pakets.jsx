import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const Pakets = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return <>
        <div className="pakets">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Nav tabs className='justify-content-end myNavs nav-pills nav-justified'>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    START
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    SIMPLE
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    ACTIVE
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >
                                    PRO
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1" className=''>
                                <Row>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port1.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-up' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port2.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos='fade-left' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port3.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-right' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos='fade-up' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port1.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos='fade-left' className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port2.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port3.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>

                                </Row>
                            </TabPane>
                            <TabPane tabId="2" className='   '>
                                <Row>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3" className='   '>
                                <Row>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port3.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port1.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port2.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>


                                </Row>
                            </TabPane>

                            <TabPane tabId="4" className='   '>
                                <Row>  <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src="/assets/image/port4.png" className='w-100' alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h5>
                                                Spartan Art
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port1.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port2.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port3.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-12 mb-2 px-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="/assets/image/port4.png" className='w-100' alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h5>
                                                    Spartan Art
                                                </h5>
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

export default Pakets;
