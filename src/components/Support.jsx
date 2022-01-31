import React from 'react';

const Support = () => {
    return <>
        <div className="webSupport myWebSupport">
            <div className="container">
                <div className="row align-items-center text-center text-lg-left">
                    <div data-aos='fade-up' className="col-lg-2 mb-lg-0 mb-4">
                        <i><img src="/assets/image/contactBg.svg" alt="" /></i>
                    </div>
                    <div data-aos='fade-up' className="col-lg-10">
                        <h1>Коротко опишите свой проект и оставьте заявку.</h1>
                        <p>Наш менеджер свяжется с вами в ближайшее время.</p>
                        <a className='btn myBtn' href="tel: +998943698058">Call Us</a>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Support;
