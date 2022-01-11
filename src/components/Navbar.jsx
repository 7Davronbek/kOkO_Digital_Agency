import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const history = useHistory()

        const changeNavbar = () => {
            if(window.scrollY >= 30) {
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
                            <img className='' src="/assets/image/miniLogo.svg" alt="" />
                            <h6>
                                Koko Agency
                            </h6>
                        </Link>
                    </div>

                    <div className="col-md-8">
                        <ul className='d-flex align-items-center justify-content-center'>
                            <li className={`mr-5 myLi`}><Link className={`myA  ${history.location.pathname === '/' ? 'navlinkActive' : ''}`} to='/'>Home</Link></li>
                            <li className={`mr-5 myLi`}><Link className={`myA ${history.location.pathname === '/about-us' ? 'navlinkActive' : ''}`} to='/about-us'>About us</Link></li>
                            <li className={`mr-5 myLi`}><Link className={`myA ${history.location.pathname === '/projects' ? 'navlinkActive' : ''}`} to='/projects'>Projects</Link></li>
                            <li className={`mr-5 myLi`}><Link className={`myA ${history.location.pathname === '/contacts' ? 'navlinkActive' : ''}`} to='/contacts'>Contacts</Link></li>
                            <li className={`mr-5 myLi`}><Link className={`myA ${history.location.pathname === '/services' ? 'navlinkActive' : ''}`} to='/services'>Services</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 d-flex align-items-center">
                        <b className='mx-2'>UZ </b>
                        <i><img src="/assets/icon/uz.svg" alt="" /></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="navbarLine"></div>
        </>
    )
}

export default Navbar
