import React, { useState, useEffect } from "react";
import Contacts from '../components/Contacts'
import ContactsHeader from '../components/ContactsHeader'
import ContactsLocation from '../components/ContactsLocation'
import { RingLoader } from "react-spinners";

const ContactsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);
    return (
        <>
        {isLoading ? (
          <div className="loader ">
            <span className="mr-4">
              <h5>CONTACTS</h5>
            </span>
            <RingLoader color="#fff" size="35" loading={isLoading} />
          </div>
        ) : (
          ""
        )}
            <ContactsHeader />
            <ContactsLocation />
            <Contacts />
        </>
    )
}

export default ContactsPage
