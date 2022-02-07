import React from 'react'

const ContactsLocation = () => {
    return (
        <div className='contactsLocation'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1>Наш адрес</h1>
                    </div>
                    <div className="row align-items-center ">
                        <div className="col-lg-6 ml-auto">
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe className='w-100' title='Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11987.753575795668!2d69.3078109!3d41.3102038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa193c5c2e7c5a340!2sKoko%20Digital%20Agency!5e0!3m2!1sru!2s!4v1644222387048!5m2!1sru!2s" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactsLocation
