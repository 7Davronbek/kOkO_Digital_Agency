import React, { useState, useEffect } from "react";
import Contacts from '../components/Contacts'
import ContactsHeader from '../components/ContactsHeader'
import ContactsLocation from '../components/ContactsLocation'
import { RingLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const ContactsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1800);
    }, []);
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>kOkO Agency | Contacts | Tashkent | KOKO | koko</title>
            <link rel="canonical" href="https://www.kokoagency.uz/" />
        </Helmet>

        {isLoading ? (
          <div className="loader ">
            <span className="mr-4">
              <h5>Контакты</h5>
            </span>
            <RingLoader color="#fff" size="35" loading={isLoading} />
          </div>
        ) : (
          <ContactsHeader />
        )}
            <ContactsLocation />
            <Contacts />
        </>
    )
}

export default ContactsPage
