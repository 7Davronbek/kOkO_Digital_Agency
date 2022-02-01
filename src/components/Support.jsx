import React from 'react';

const Support = () => {
    return <>
        <div className="webSupport myWebSupport">
            <div className="container">
                <div className="row align-items-center text-center text-lg-left justify-content-center">
                    <div data-aos='fade-right' className="col-lg-2 mb-lg-0 mb-4">
                        <i><img src="/assets/image/contactBg.svg" alt="" /></i>
                    </div>
                    <div data-aos='fade-up' className="col-lg-4 text-center">
                        <h1>Звоните прямо сейчас </h1>
                        <p>Наш менеджер вас проконсультирует</p>
                        <a className='btn myBtn' href="tel: +998943698058">Позвонить</a>
                    </div>
                    <div data-aos='fade-left' className="col-lg-2 mb-lg-0 mb-4">
                        <i><img src="/assets/image/contactBg.svg" alt="" /></i>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Support;
