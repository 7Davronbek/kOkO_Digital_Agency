import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { getText } from '../locales';
import { LANGUAGE } from '../tools/constans';
// 
// margin-top: 37px;
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [burger, setBurger] = useState(false)
    const location = useLocation();

    // const changeLanguage = (e) => {
    //     localStorage.setItem(LANGUAGE, e);
    //     document.location.reload(true);
    // }

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    return (
        <>
            <div className={`navBar ${navbar ? 'navbarActive' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-2 col-6">
                            <Link to='/' className="logo d-flex align-items-center">
                                <i><img className='w-100' src="/assets/icon/logoWhite.png" alt="" /></i>
                            </Link>
                        </div>

                        <div onClick={() => { setBurger(!burger) }} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>

                        <div className={`mobileWrap pr-lg-0 col-lg-8 ${burger ? 'burgered' : ''}`}>
                            <div className="row">

                                <div className="col-md-10 myNav d-lg-flex align-items-center justify-content-end">
                                    <ul className='d-flex align-items-center justify-content-center'>
                                        <li className={`mr-5 myLi`}><Link onClick={() => setBurger(false)} className={`myA  ${location.pathname === '/' ? 'navlinkActive' : ''}`} to='/'>Главная</Link></li>
                                        <li className={`mr-5 myLi`}><Link onClick={() => setBurger(false)} className={`myA ${location.pathname === '/about-us' ? 'navlinkActive' : ''}`} to='/about-us'>О нас</Link></li>
                                        <li className={`mr-5 myLi`}><Link onClick={() => setBurger(false)} className={`myA  ${location.pathname === '/blog' ? 'navlinkActive' : ''}`} to='/blog'>Блог</Link></li>
                                        <li className="mr-4 myLi servicesLi d-flex align-items-center position-relative">
                                            Наши услуги 
                                            <i className='ml-2'><img className='arrow' src="/assets/icon/right.svg" alt="" /></i>
                                            <div className="servicesDiv position-absolute">
                                                <div className="myLi"><Link onClick={() => setBurger(false)} className={`${location.pathname === 'web-development' ? 'navlinkActive' : ''}`} to='/web-development'>Веб услуги</Link></div>
                                                <div className="myLi"><Link onClick={() => setBurger(false)} to='/internet-marketing'>Интернет маркетинг</Link></div>
                                                <div className="myLi"><Link onClick={() => setBurger(false)} to='/design'>Дизайн</Link></div>
                                                <div className="myLi "><Link onClick={() => setBurger(false)} className='mb-0' to='/motion'>Моушн</Link></div>
                                            </div>
                                        </li>

                                        <li className={`mr-5 myLi`}><Link onClick={() => setBurger(false)} className={`myA ${location.pathname === '/contacts' ? 'navlinkActive' : ''}`} to='/contacts'>Контакты</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-2 d-lg-flex pr-lg-0 align-items-center justify-content-end langWrap">
                                    {localStorage.getItem(LANGUAGE) !== 'ru' ?
                                        <>
                                            <div className='d-flex align-items-center uz1 justify-content-center' 
                                                // onClick={(e) => changeLanguage('uz')}
                                                >
                                                <i><img src="/assets/icon/uz.svg" alt="" /></i>
                                                <b style={{ transform: 'translateY(4px)' }} className='mx-2 d-block'>UZ </b>
                                            </div>
                                            <div className='d-flex align-items-center ru1 justify-content-center' 
                                                // onClick={(e) => changeLanguage('uz')}
                                                >
                                                <i><img src="/assets/icon/ru.svg" alt="" /></i>
                                                <b style={{ transform: 'translateY(2px)' }} className='mx-2 d-block'>РУ </b>
                                            </div>
                                        </> :
                                        <>
                                            <div className='d-flex align-items-center uz1 justify-content-center' 
                                                // onClick={(e) => changeLanguage('uz')}
                                                >
                                                <i><img src="/assets/icon/uz.svg" alt="" /></i>
                                                <b style={{ transform: 'translateY(4px)' }} className='mx-2 d-block'>UZ </b>
                                            </div>
                                            <div className='d-flex align-items-center ru1 justify-content-center' 
                                                // onClick={(e) => changeLanguage('uz')}
                                                >
                                                <i><img src="/assets/icon/ru.svg" alt="" /></i>
                                                <b style={{ transform: 'translateY(2px)' }} className='mx-2 d-block'>РУ </b>
                                            </div>
                                            {/* <div className='d-flex align-items-center uz justify-content-center' onClick={(e) => changeLanguage('ru')}>
                                                <i><img src="/assets/icon/uz.svg" alt="" /></i>
                                                <b style={{ transform: 'translateY(4px)' }} className='mx-2 d-block'>UZ </b>
                                            </div>
                                            <div className='d-flex align-items-center ru justify-content-center' onClick={(e) => changeLanguage('ru')}>
                                                <i><img src="/assets/icon/ru.svg" alt="" /></i>
                                                <b style={{ transform: 'translateY(2px)' }} className='mx-2 d-block'>RU </b>
                                            </div> */}
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className={`${location.pathname === '/' ? '' : 'navbarLine'}`}></div> */}
            <div className='navbarLine'></div>
        </>
    )
}

export default Navbar
