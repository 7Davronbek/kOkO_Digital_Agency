import AboutMain from '../components/AboutMain'
// import Personal from '../components/Personal'
import Portfolio from '../components/Portfolio'
import React, {useState, useEffect} from 'react'
import { RingLoader } from "react-spinners";
// import Questions from '../components/Questions'
import WeInNumber from '../components/WeInNumber';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>kOkO Agency | About Us | Tashkent | KOKO | koko</title>
            <link rel="canonical" href="https://www.kokoagency.uz/" />
        </Helmet>
        {isLoading ? (
          <div className="loader ">
              <h5 className='mr-4'>О нас</h5>
            <RingLoader color="#fff" size="35" loading={isLoading} />
          </div>
        ) : (
          ""
        )}
         <AboutMain /> 
         <Portfolio />
         {/* <Personal /> */}
         {/* <Questions /> */}
         <WeInNumber />
        </>
    )
}

export default AboutUs
