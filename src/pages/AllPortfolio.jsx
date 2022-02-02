import React, { useEffect, useState } from 'react'
// import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
// import classnames from 'classnames';
import { DotLoader } from 'react-spinners';
import Aos from 'aos';
import Companies from '../components/Companies';

const AllPortfolio = () => {
    // const [activeTab, setActiveTab] = useState('1');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 700);
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])

    // const toggle = tab => {
    //     if (activeTab !== tab) setActiveTab(tab);
    // }
    return (
        <>
            {isLoading ? (
                <div className="loader ">
                    <h5 className='mr-4'>Portfolio</h5>
                    <DotLoader color="#fff" size="35" loading={isLoading} />
                </div>
            ) : (
                ""
            )}

            <div className="allPortfolio">
                <div className="container">
                    <div className="row">
                        <>
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
                                        <img src="/assets/image/port3.png" className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Spartan Art
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        
                        </>
                        {/* <div className="col-12 ">
                            <div>
                                <div className="row">
                                    <div className="col-lg-7  mx-auto mb-4">
                                        <Nav tabs className='justify-content-end myNavs nav-pills nav-justified'>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '1' })}
                                                    onClick={() => { toggle('1'); }}
                                                >
                                                    All
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '2' })}
                                                    onClick={() => { toggle('2'); }}
                                                >
                                                    LOREMIPSUM
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '3' })}
                                                    onClick={() => { toggle('3'); }}
                                                >
                                                    WATERFRONT
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '4' })}
                                                    onClick={() => { toggle('4'); }}
                                                >
                                                    CONTEMPORARY
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                </div>
                                <TabContent  activeTab={activeTab}>
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
                                    <TabPane  tabId="3" className='   '>
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

                                    <TabPane  tabId="4" className='   '>
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
                        </div> */}
                    </div>
                </div>
            </div>

            <Companies />


        </>
    )
}

export default AllPortfolio
