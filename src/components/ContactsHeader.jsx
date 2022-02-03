import { useEffect  } from 'react'
import Aos from 'aos';

const ContactsHeader = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return (
        <div className='contactsHeader'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 data-aos='fade-down'>Contacts</h1>
                    </div>
                    <div className="col-12 flex-column flex-lg-row d-flex align-items-center justify-content-center">
                        <div data-aos='fade-right' className="d-flex align-items-center flex-column mr-lg-5 mb-lg-0 mb-4">
                            <a href="tel: +998908232838">+998 90 823 28 38</a>
                            <a href='tel: +998908232838' className="btn myBtn first">Bepul Konsultatsiya</a>
                        </div>
                        <div data-aos='fade-left' className="d-flex align-items-center flex-column">
                            <a target='_blank' rel="noreferrer" href="https://t.me/kOkOdigital">@kOkOdigital</a>
                            <a target='_blank' rel="noreferrer" href="https://t.me/kOkOdigital" className="btn myBtn">Telegramdan Yozish</a>
                        </div>
                    </div>

                    <div className="col-12 text-center mt-5 pt-5">
                        <i data-aos='fade-up' className="icon icon-instagram mr-3"></i>
                        <i data-aos='fade-up' className="icon icon-telegram mr-3"></i>
                        <i data-aos='fade-up' className="icon icon-facebook  mb-1"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsHeader
