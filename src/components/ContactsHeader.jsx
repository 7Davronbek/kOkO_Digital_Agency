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
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div data-aos='fade-right' className="d-flex align-items-center flex-column mr-5">
                            <a href="tel: +998943698058">+99897 777 77 07</a>
                            <button className="btn myBtn first">Bepul Konsultatsiya</button>
                        </div>
                        <div data-aos='fade-left' className="d-flex align-items-center flex-column">
                            <a href="tel: +998943698058">@k0k0_agency</a>
                            <button className="btn myBtn">Telegramdan Yozish</button>
                        </div>
                    </div>

                    <div className="col-12 text-center mt-5 pt-5">
                        <i data-aos='fade-up' className="icon icon-instagram mr-3"></i>
                        <i data-aos='fade-up' className="icon icon-telegram mr-3"></i>
                        <i data-aos='fade-up' className="icon icon-telegram mr-3"></i>
                        <i data-aos='fade-up' className="icon icon-instagram "></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsHeader
