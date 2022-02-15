import React from 'react'

const SocialFixed = () => {
    return (
        <>
            <div className="socialFixed">
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/kokoagency.uz/" className=' cursor'><i className={`icon icon-instagram ${localStorage.getItem('theme') === 'white' ? 'black' : ''}`}></i></a>
                <a target='_blank' rel="noreferrer" href="https://t.me/kOkOdigital/" className='cursor'><i className={`icon icon-telegram ${localStorage.getItem('theme') === 'white' ? 'black' : ''}`}></i></a>
                <a target='_blank' rel="noreferrer" href="https://www.facebook.com/kokoagency.uz/?ref=pages_you_manage" className='cursor'><i className={`icon icon-facebook ${localStorage.getItem('theme') === 'white' ? 'black' : ''}`}></i></a>

                <h6>Follow us</h6>
            </div>
        </>
    )
}

export default SocialFixed