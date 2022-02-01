import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos';

const AboutMain = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])
    return (
        <div className='aboutMain'>
            <div className="container">
                <div className="row align-items-center mt-3">
                    <div className="col-lg-6 ">
                        <h1 data-aos='fade-right' >Why choose us.</h1>
                        <p data-aos='fade-right' className='mt-5'>Lorem, ipsum dolor sit am incidunt porro! Distinctio voluptates deserunt aliquam. Veritatis molestiae suscipit aperiam illum totam cumque at rerum velit reiciendis quos! Illum porro voluptate expedita mollitia, voluptatem minus temporibus quam molestias culpa. Nesciunt quae praesentium perspiciatis soluta dicta?</p>
                        <p data-aos='fade-right' className='mt-4'><b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, velit cumque facilis dolorem blanditiis sapiente sunt eius suscipit? Aliquid, deleniti?</b></p>
                        <p data-aos='fade-right' className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit dolorum quas repudiandae recusandae distinctio facere dignissimos nam autem perspiciatis. Quidem mollitia odio nemo nesciunt magni eius repellat ullam enim.</p>
                    </div>
                    <div  data-aos='fade-left' className="col-lg-5 ml-auto mt-5 mt-lg-0">
                        <i><img src="/assets/image/card1.png" alt="" className="w-100 rounded"/></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain