import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners';
import Aos from 'aos';
import { Modal, ModalBody } from "reactstrap"

const Blog = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [modal3, setModal3] = useState(false)
    const [modal4, setModal4] = useState(false)
    const [modal5, setModal5] = useState(false)
    const [modal6, setModal6] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1700);
        Aos.init({
            once: true,
            duration: 1700,
        })
    }, [])

    return <>
        {isLoading ? (
            <div className="loader ">
                <h5 className='mr-4'>Blog</h5>
                <RingLoader color="#fff" size="35" loading={isLoading} />
            </div>
        ) : (
            <>
                <div className="blog">
                    <div className="container">
                        <div className="row">
                            <div data-aos='fade-right' className="col-lg-4 col-md-6 h-100 mb-4">
                                <div onClick={() => setModal1(true)} className="card">
                                    <div className="card-header p-0">
                                        <img src="/assets/image/card2.png" alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-3">
                                        <h3>Веб услуги</h3>
                                        <p className="mt-3">Веб услуги – это создание, продвижение<span>...подробнее</span></p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='fade-up' className="col-lg-4 col-md-6 h-100 mb-4">
                                <div onClick={() => setModal2(true)} className="card">
                                    <div className="card-header p-0">
                                        <img src="/assets/image/card1.png" alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-3">
                                        <h3>Интернет-маркетинг </h3>
                                        <p className='mt-3'>Интернет-маркетинг — область маркетинга, которая <span>...подробнее</span></p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='fade-left' className="col-lg-4 col-md-6 h-100 mb-4">
                                <div onClick={() => setModal3(true)} className="card">
                                    <div className="card-header p-0">
                                        <img src="/assets/image/card4.png" alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-3">
                                        <h3>Создание моушн видео</h3>
                                        <p className='mt-3'> Приведем
                                            несколько примеров из списка навыков<span>...подробнее</span></p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='fade-right' className="col-lg-4 col-md-6 h-100 mb-4">
                                <div onClick={() => setModal4(true)} className="card">
                                    <div className="card-header p-0">
                                        <img src="/assets/image/smm/smm3.jpg" alt="" className="h-100 w-100" />
                                    </div>
                                    <div className="card-body p-3">
                                        <h3>Разработка брендбуков</h3>
                                        <p className='mt-3'>Разработка брендбука (brand book) – это совмещение
                                            работ по формированию<span>...подробнее</span></p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='fade-up' className="col-lg-4 col-md-6 h-100 mb-4">
                                <div onClick={() => setModal5(true)} className="card">
                                    <div className="card-header p-0">
                                        <img src="/assets/image/card4.png" alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-3">
                                        <h3>Анимационные ролики</h3>
                                        <p className='mt-3'>Анимационный видео ролик - оригинальный инструмент
                                            для рекламного продвижения товаров<span>...подробнее</span></p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='fade-left' className="col-lg-4 col-md-6 h-100 mb-4">
                                <div onClick={() => setModal6(true)} className="card">
                                    <div className="card-header p-0">
                                        <img src="/assets/image/card1.png" alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-3">
                                        <h3>Контестная реклама</h3>
                                        <p className='mt-3'>Контекстная реклама — это различные объявления (текстовые,
                                            графические, видео), которые показываются<span>...подробнее</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}




        <Modal
            isOpen={modal1}
            toggle={() => setModal1(false)}
            className='modal-lg blogModal'
        >
            <ModalBody>
                <i onClick={() => setModal1(false)} className="i">x</i>
                <h3>Понятие о веб услугах</h3>
                <h5>
                    Веб услуги – это создание, продвижение и поддержание
                    интернет-площадок в рабочем состоянию Это очень
                    распространенный и широко развитый бизнес, поэтому его
                    не сложно заказать за кратчайший срок.
                </h5>

                <h6>Веб-услуги:</h6>
                <div className="d-flex align-items-center myFlex">
                    <div>
                        <p>Создание корпоративных сайтов;</p>
                        <p>Разработка посадочных страниц (лендингов);</p>
                        <p>Оптимизация страниц под мобильные устройства;</p>
                        <p>Создание и настройка мобильных приложений;</p>
                        <p>Создание рекламной стратегии интернет-продвижения;</p>
                        <p>Разработка чат-ботов;</p>
                        <p>SEO-оптимизация и продвижение сайтов;</p>
                        <p>Контекстная и баннерная реклама;</p>
                        <p> Настройка и администрирование серверов;</p>
                        <p>Продвижение страниц бренда в соцсетях;</p>
                    </div>
                    <div className='imgWrap'><i><img src="/assets/image/card2.png" alt="" /></i></div>
                </div>
            </ModalBody>
        </Modal>

        <Modal
            isOpen={modal2}
            toggle={() => setModal2(false)}
            className='modal-lg blogModal'
        >
            <ModalBody>
                <i onClick={() => setModal2(false)} className="i">x</i>
                <h3>Понятие об интернет маркетинге</h3>
                <h5>Интернет-маркетинг — область маркетинга, которая
                    объединяет все способы маркетинговой коммуникации,
                    используемые с помощью Интернет-канала. Основной
                    целью Интернет-маркетинга является превращение
                    посетителя сайта в покупателя и увеличить прибыль
                    компании
                </h5>

                {/* <h6>Веб-услуги:</h6>
                <div className="d-flex align-items-center">
                    <div>
                        <p>Создание корпоративных сайтов;</p>
                        <p>Разработка посадочных страниц (лендингов);</p>
                        <p>Оптимизация страниц под мобильные устройства;</p>
                        <p>Создание и настройка мобильных приложений;</p>
                        <p>Создание рекламной стратегии интернет-продвижения;</p>
                        <p>Разработка чат-ботов;</p>
                        <p>SEO-оптимизация и продвижение сайтов;</p>
                        <p>Контекстная и баннерная реклама;</p>
                        <p> Настройка и администрирование серверов;</p>
                        <p>Продвижение страниц бренда в соцсетях;</p>
                    </div>
                    <div className='imgWrap'><i><img src="/assets/image/card1.png" alt="" /></i></div>
                </div> */}
            </ModalBody>
        </Modal>

        <Modal
            isOpen={modal3}
            toggle={() => setModal3(false)}
            className='modal-lg blogModal'
        >
            <ModalBody>
                <i onClick={() => setModal3(false)} className="i">x</i>
                <h3>Создание моушн видео</h3>


                <h6 className='mt-3'>Для того, чтобы создать моушн видео необходимо владеть
                    определенными навыками моушн дизайнера. Приведем
                    несколько примеров из списка навыков:
                </h6>
                <div className="d-flex align-items-center mt-5">
                    <div>
                        <p>
                            Композиция. Дизайнер должен уметь гармонично
                            расположить графические элементы. Результат живого
                            и интересного моушн-видео это правильная
                            композиция;
                        </p>
                        <p>Типографика. Художественно оформленные
                            цепляющие текста с эмоциональностью и
                            выразительностью. Очень важно знать и использовать
                            правильные шрифты, которые всесторонне подходят к
                            общей картинке;
                        </p>
                        <p>Колористика. Один из самых быстрых инструментов на
                            воздействия человека – это цвет. Во-первых, моушн дизайнер должен правильно подбирать цвета, а во вторых, разбираться в психологии цветов;
                        </p>
                    </div>
                </div>
            </ModalBody>
        </Modal>

        <Modal
            isOpen={modal4}
            toggle={() => setModal4(false)}
            className='modal-lg blogModal'
        >
            <ModalBody>
                <i onClick={() => setModal4(false)} className="i">x</i>
                <h3>Разработка брендбуков</h3>
                <h5>Разработка брендбука (brand book) – это совмещение
                    работ по формированию основного документа, который
                    состоит из важнейших информаций о бренде, правил
                    использования, рекомендации и графического стиля.
                </h5>

                <h6>Разработка брендбуков:</h6>
                <div className="d-flex align-items-center">
                    <div>
                        <p> Стратегия позиционирования бренда;</p>
                        <p>Логотип и фирменный стиль бренда;</p>
                        <p>Фотостиль;</p>
                        <p> Деловая документация;</p>
                        <p>Коммуникационные материалы бренда;</p>
                        <p> Дизайн упаковки бренда (при наличии)</p>
                    </div>
                    <div className='imgWrap'><i><img src="/assets/image/smm/smm3.jpg" alt="" /></i></div>
                </div>
            </ModalBody>
        </Modal>

        <Modal
            isOpen={modal5}
            toggle={() => setModal5(false)}
            className='modal-lg blogModal'
        >
            <ModalBody>
                <i onClick={() => setModal5(false)} className="i">x</i>
                <h3>Создание анимационных видео роликов</h3>
                <h5>Анимационный видео ролик - оригинальный инструмент
                    для рекламного продвижения товаров и услуг. Считается
                    что, анимационный ролик всегда более зрелищный, так как
                    здесь практически отсутствуют ограничения в сценарии и
                    анимированные персонажи вызывают более теплый
                    отклик, чем герои классической видео рекламы.
                </h5>

                <div className="d-flex align-items-center">
                    <div>
                        <p>Разработка сценария;</p>
                        <p>Визуализация (цветная раскадровка);</p>
                        <p> Монтаж анимационного видео;</p>
                        <p>Подбор диктора и музыкального ряда;</p>
                    </div>
                    {/* <div className='imgWrap'><i><img src="/assets/image/card4.png" alt="" /></i></div> */}
                </div>
            </ModalBody>
        </Modal>

        <Modal
            isOpen={modal6}
            toggle={() => setModal6(false)}
            className='modal-lg blogModal'
        >
            <ModalBody>
                <i onClick={() => setModal6(false)} className="i">x</i>
                <h3>Контестная реклама</h3>
                <h5>Контекстная реклама — это различные объявления (текстовые,
                    графические, видео), которые показываются пользователям
                    в соответствии с их поисковыми запросами, интересами или
                    поведением в интернете. Контекстная реклама показывается
                    в поисковых системах, на различных сайтах, в мобильных
                    приложениях и на других ресурсах.
                </h5>
                <h5 className="mt-3">Существует два сервиса размещения рекламы
                    в интернете — Яндекс. Директа и Google Ads
                </h5>

                <h6>Варианты контекстной рекламы:</h6>
                <div className="d-flex align-items-center">
                    <div>
                        <p>Поисковая;</p>
                        <p>Баннерная;</p>
                        <p> Товарная;</p>
                        <p>Видеореклама;</p>
                        <p>Кампании для мобильных приложениях;</p>
                    </div>
                    {/* <div className='imgWrap'><i><img src="/assets/image/card1.png" alt="" /></i></div> */}
                </div>
            </ModalBody>
        </Modal>


    </>;
};

export default Blog;
