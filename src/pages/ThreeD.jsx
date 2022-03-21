import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners';
import Aos from 'aos';
import { connect } from "react-redux";
import { updateState } from '../redux/actions/emailAction'
import Support from '../components/Support';
import WebDepends from '../components/WebDepends';

const ThreeD = (props) => {
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
          <h5 className='mr-4'>3D Моделирование</h5>
          <RingLoader color={`${localStorage.getItem('theme') === 'white' ? '#000' : '#fff'}`} size="35" loading={isLoading} />
        </div>
      ) : (<>

        <div className="threeDevelopment courses text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 data-aos='fade-right'>3<span>D</span> Моделирование</h1>
                <button data-aos='fade-left' className="btn myBtn"onClick={() => props.updateState({isOpen: true})}>Оставить заявку</button>
              </div>
            </div>
          </div>
        </div>


        <div className="thereeConsist myWebConsist">
          <div className="container">

            <div className="row flex-lg-row flex-column-reverse align-items-center mt-5">
              <div data-aos='fade-right' className="col-lg-6">
                <h1>3D Моделирование</h1>
                <h6>Подготовить эффектный рекламный ролик, сконструировать проект интерьера, создать анимацию для приложения или просто яркую презентацию — всё это позволяет делать 3D-графика. Чтобы создать качественную объемную визуализацию, понадобятся специальные программы. Ниже мы перечислили наиболее популярные программы для 3D-моделирования. Они подойдут как новичкам — например, для быстрой визуализации своего дизайна интерьера, так и продвинутым специалистам, которые хотят отрисовать видео с максимальной реалистичностью. Выбирать программу для изучения советуем по своему уровню:</h6>
                <p>Телеграм бот</p>
                <p>Чат бот</p>
                <p>Автоматизация</p>
                <p>API Программирование</p>
              </div>
              <div data-aos='fade-left' className="col-lg-6 ml-auto">
                <i><img src="/assets/image/three/1.webp" className='w-100' alt="" /></i>
              </div>
            </div>

          </div>
        </div>

        <Support />
        <WebDepends />
      </>)}

    </>
  )
}

export default connect(null, { updateState })(ThreeD)