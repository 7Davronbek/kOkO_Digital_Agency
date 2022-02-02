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
            </div>
            <div className="map">
                <iframe className='w-100' title='Location' style={{ height: '440px' }} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8471.111438576505!2d69.26080398780638!3d41.35256736051691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JDQu9C80LDQt9Cw0YDRgdC60LjQuSDRgNCw0LnQvtC9LCDRg9C7LtCR0LDQudGA0L7QutGC0L7QuywgMTU!5e0!3m2!1sru!2s!4v1622650579454!5m2!1sru!2s"  loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ContactsLocation
