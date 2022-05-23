import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { RingLoader } from 'react-spinners'
import MobileConsist from '../components/MobileConsist'
import MobileHeader from '../components/MobileHeader'
import Support from '../components/Support'
import WebDepends from '../components/WebDepends'

const MobileDevelopment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setLoad(true);
        }, 1800);
    }, []);
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>kOkO Agency | Web Development | Tashkent | KOKO | koko</title>
                <link rel="canonical" href="https://www.kokoagency.uz/" />
            </Helmet>
            {isLoading ? (
                <div className="loader ">
                    <h5 className='mr-4'>Разработка приложенний</h5>
                    <RingLoader color={`${localStorage.getItem('theme') === 'white' ? '#000' : '#fff'}`} size="35" loading={isLoading} />
                </div>
            ) : (
                ""
            )}
            <div className='mobileDevelopment courses'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {load ? (
                                <>
                                    <h1 data-aos='fade-right'>App developing</h1>

                                    <a
                                        href="https://t.me/kOkOdigital"
                                        target='_blank' rel="noreferrer"
                                        className="btn myBtn"
                                        data-aos='fade-left'
                                    // onClick={() => props.updateState({ isOpen: true })}
                                    // onClick={() => setModal(true)}
                                    >
                                        <div className="click"></div>
                                        Бесплатная консультация
                                    </a>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <MobileHeader />
            <MobileConsist />
            <Support />

            <WebDepends />
        </>
    )
}

export default MobileDevelopment