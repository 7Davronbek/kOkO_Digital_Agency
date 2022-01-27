import React, {useState, useEffect} from 'react'
import { DotLoader } from "react-spinners";
import WebHeader from '../components/WebHeader';

const WebDevelopment = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setInterval(() => {
        setIsLoading(false);
      }, 500);
    }, []);
    return (
        <>
        {isLoading ? (
          <div className="loader ">
              <h5 className='mr-4'>Веб услуги</h5>
            <DotLoader color="#fff" size="35" loading={isLoading} />
          </div>
        ) : (
          ""
        )}
        <div className='webDevelopment courses'> 
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Веб услуги</h1>
                        <p>Разработка сайтов, ботов, интернет-магазинов.</p>
                        <button className="btn myBtn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
        <WebHeader />
        </>
    )
}

export default WebDevelopment
