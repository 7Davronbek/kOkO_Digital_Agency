import React from 'react';

const WhyWe = () => {
    return (
        <>
            <div className="webWhyWe myWebWhyWe">
                <div className="container">
                    <div className="row">
                        <div data-aos='fade-up' className="col-12 text-center">
                            <h2>Почему Мы:</h2>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div data-aos='fade-right' className="col-lg-6">
                            <h1>Поисковое продвижение</h1>
                            <p> Комплексная услуга, включающая в себя SEO оптимизацию сайта, аналитику и контент-маркетинг. Выведем ваш сайт в Топ-5 в поисковых системах Яндекс и Google по запросам, которые актуальны для вашего бизнеса.</p>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <i><img src="/assets/image/card2.png" alt="" className="rounded" /></i>
                        </div>
                    </div>

                    <div className="row align-items-center mb-5">
                        <div data-aos='fade-right' className="col-lg-6">
                            <i><img src="/assets/image/card2.png" alt="" className="rounded" /></i>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <h1>Контекстная реклама</h1>
                            <p>
                                Создание и сопровождение эффективной контекстной рекламы в Яндексе и Google. Наши рекламные решения - это не действия наудачу, а точное попадание в цель.</p>
                        </div>
                    </div>

                    <div className="row align-items-center mb-5">
                        <div data-aos='fade-right' className="col-lg-6">
                            <h1>Социальные сети </h1>
                            <p>
                                Реклама в соц. сетях позволит охватить около 70% населения нашей страны и многократно повысить узнаваемость вашего бренда, продуктов и услуг.</p>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <i><img src="/assets/image/card1.png" alt="" className="rounded" /></i>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default WhyWe;
