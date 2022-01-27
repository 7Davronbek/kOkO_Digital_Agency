import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getText } from '../locales';
import { LANGUAGE } from '../tools/constans';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e);
        document.location.reload(true);
    }

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
                        <div className="col-md-2">
                            <Link to='/' className="logo d-flex align-items-center">
                                <i><img className='' src="/assets/icon/logoWhite.png" alt="" /></i>
                            </Link>
                        </div>

                        <div className="col-md-8">
                            <ul className='d-flex align-items-center justify-content-center'>
                                <li className={`mr-5 myLi`}><Link className={`myA  ${location.pathname === '/' ? 'navlinkActive' : ''}`} to='/'>{getText('home')}</Link></li>
                                <li className="mr-4 myLi servicesLi d-flex align-items-center position-relative">
                                    {getText('services')} <i className='ml-2'><img className='arrow' src="/assets/icon/right.svg" alt="" /></i>
                                    <div className="servicesDiv position-absolute">
                                        <div className="myLi"><Link className={`${location.pathname === 'web-development' ? 'navlinkActive' : ''}`} to='/web-development'>{getText('webService')}</Link></div>
                                        <div className="myLi"><Link to='/internet-marketing'>{getText('internetMarketing')}</Link></div>
                                        <div className="myLi"><Link to='/design'>{getText('design')}</Link></div>
                                        <div className="myLi "><Link className='mb-0' to='/motion'>{getText('motion')}</Link></div>
                                    </div>
                                </li>

                                <li className={`mr-5 myLi`}><Link className={`myA ${location.pathname === '/about-us' ? 'navlinkActive' : ''}`} to='/about-us'>{getText('aboutUs')}</Link></li>
                                <li className={`mr-5 myLi`}><Link className={`myA ${location.pathname === '/contacts' ? 'navlinkActive' : ''}`} to='/contacts'>{getText('contacts')}</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-2 d-none d-lg-flex align-items-center langWrap">
                            {localStorage.getItem(LANGUAGE) === 'ru' ?
                                <>
                                    <div className='d-flex align-items-center uz1' onClick={(e) => changeLanguage('uz')}>
                                        <i><img src="/assets/icon/uz.svg" alt="" /></i>
                                        <b style={{ transform: 'translateY(4px)' }} className='mx-2 d-block'>UZ </b>
                                    </div>
                                    <div className='d-flex align-items-center ru1' onClick={(e) => changeLanguage('uz')}>
                                        <i><img src="/assets/icon/ru.svg" alt="" /></i>
                                        <b style={{ transform: 'translateY(2px)' }} className='mx-2 d-block'>RU </b>
                                    </div>
                                </> :
                                <>
                                    <div className='d-flex align-items-center uz' onClick={(e) => changeLanguage('ru')}>
                                        <i><img src="/assets/icon/uz.svg" alt="" /></i>
                                        <b style={{ transform: 'translateY(4px)' }} className='mx-2 d-block'>UZ </b>
                                    </div>
                                    <div className='d-flex align-items-center ru' onClick={(e) => changeLanguage('ru')}>
                                        <i><img src="/assets/icon/ru.svg" alt="" /></i>
                                        <b style={{ transform: 'translateY(2px)' }} className='mx-2 d-block'>RU </b>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${location.pathname === '/' ? '' : 'navbarLine'}`}></div>
        </>
    )
}

export default Navbar
