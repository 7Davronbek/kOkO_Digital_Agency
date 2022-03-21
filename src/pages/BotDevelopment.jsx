import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners';
import Aos from 'aos';
import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'

const BotDevelopment = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1800);
    Aos.init({
      once: true,
      duration: 1700,
    })
  }, [])
  return (
    <>
      {isLoading ? (
        <div className="loader ">
          <h5 className='mr-4'>Телеграм-бот</h5>
          <RingLoader color={`${localStorage.getItem('theme') === 'white' ? '#000' : '#fff'}`} size="35" loading={isLoading} />
        </div>
      ) : (<>

        <div className="botDevelopment courses text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Телеграм-боты</h1>
                <button data-aos='fade-left' className="btn myBtn"onClick={() => props.updateState({isOpen: true})}>Оставить заявку</button>
              </div>
            </div>
          </div>
        </div>


        <div className="botConsist myWebConsist">
          <div className="container">

            <div className="row flex-lg-row flex-column-reverse align-items-center mt-5">
              <div data-aos='fade-right' className="col-lg-6">
                <h1>Разработка телеграм ботов</h1>
                <h6>Телеграм бот – это программа, выполняющая различные действия, автоматически или по определенной команде. Боты «Телеграм» универсальны и выполняют множество задач на любой вкус. Найти информацию, скачать книгу, фильм, музыку, развлечь — это лишь маленький перечень возможностей ботов. Мы поможем вам создать свой уникальный бот в телеграме</h6>
                <p>Телеграм бот</p>
                <p>Чат бот</p>
                <p>Автоматизация</p>
                <p>API Программирование</p>
              </div>
              <div data-aos='fade-left' className="col-lg-5 ml-auto">
                <i><img src="/assets/image/web/web1.png" className='w-100' alt="" /></i>
              </div>
            </div>

          </div>
        </div>
      </>)}

    </>
  )
}

export default connect(null, { updateState })(BotDevelopment)