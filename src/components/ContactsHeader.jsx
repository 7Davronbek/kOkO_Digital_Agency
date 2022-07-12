import { useEffect } from 'react'
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
                        <h1 data-aos='fade-down'>Контакты</h1>
                    </div>
                    <div className="col-12 flex-column flex-lg-row d-flex align-items-center justify-content-center">
                        <div data-aos='fade-right' className="d-flex align-items-center flex-column mr-lg-5 mb-lg-0 mb-4">
                            <a href="tel: +998908232838">+998 90 823 28 38</a>
                            <a href='tel: +998908232838' className="btn myBtn first">Бесплатная консультация</a>
                        </div>
                        <div data-aos='fade-left' className="d-flex align-items-center flex-column">
                            <a target='_blank' rel="noreferrer" href="https://t.me/kOkOdigital">@kOkOdigital</a>
                            <a target='_blank' rel="noreferrer" href="https://t.me/kOkOdigital" className="btn myBtn">Написать в телеграм</a>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="col-12 text-center mt-5 pt-5">
                        <i><a target='_blank' rel="noreferrer"
                            // href="https://www.instagram.com/kokoagency.uz/"
                            className=' cursor mr-3'><img src="/assets/icon/ins.svg" alt="" /></a></i>
                        <a target='_blank' rel="noreferrer" href="https://t.me/kOkOdigital/" className='cursor mr-3'><img src="/assets/icon/tg.svg" alt="" /></a>
                        <a target='_blank' rel="noreferrer"
                            // href="https://www.facebook.com/kokoagency.uz/?ref=pages_you_manage"
                            className='cursor mb-1'><img src="/assets/image/facebook.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsHeader
