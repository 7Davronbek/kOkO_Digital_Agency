import React, {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
    // const [navbar, setNavbar] = useState(false);
    
    //     const changeNavbar = () => {
    //         if(window.scrollY >= 30) {
    //             setNavbar(true);
    //         } else {
    //             setNavbar(false)
    //         }
    //     }
    
    //     window.addEventListener('scroll', changeNavbar);

    return (
        <div className="navBar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="logo">
                            <img className='w-100' src="/assets/image/logo.svg" alt="" />
                        </div>
                    </div>

                    <div className="col-md-8">
                        <ul className='d-flex align-items-center justify-content-center'>
                            <li className='mr-5'><Link to='/'>Home</Link></li>
                            <li className='mr-5'><Link to='/'>About us</Link></li>
                            <li className='mr-5'><Link to='/'>Projects</Link></li>
                            <li className='mr-5'><Link to='/'>Contacts</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 d-flex align-items-center">
                        <b className='mx-2'>UZ </b>
                        <i><img src="/assets/icon/uz.svg" alt="" /></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
