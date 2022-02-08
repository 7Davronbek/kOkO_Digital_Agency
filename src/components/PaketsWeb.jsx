import React from 'react'
import { connect } from 'react-redux';
import { updateState } from '../redux/actions/emailAction';

const PaketsWeb = (props) => {

    return <>

        <div className="paketMini">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">

                        <div data-aos='fade-right' className="card">
                            <div className="card-header">
                                <h5>Landing page</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 3.800.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>4-10 дней</h6>
                                </div>
                                <button onClick={() => props.updateState({isOpen: true})} className="btn myBtn">Оставить заявку</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">

                        <div data-aos='fade-right' className="card">
                            <div className="card-header">
                                <h5>Малый бизнес</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 4.000.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>7-14 дней</h6>
                                </div>
                                <button onClick={() => props.updateState({isOpen: true})}className="btn myBtn">Оставить заявку</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">

                        <div data-aos='fade-right' className="card">
                            <div className="card-header">
                                <h5>Сайт каталог</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 4.900.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>10-20 дней</h6>
                                </div>
                                <button onClick={() => props.updateState({isOpen: true})} className="btn myBtn">Оставить заявку</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">

                        <div data-aos='fade-right' className="card">
                            <div className="card-header">
                                <h5>Интернет-магазин</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 12.400.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>21-49 дней</h6>
                                </div>
                                <button onClick={() => props.updateState({isOpen: true})} className="btn myBtn">Оставить заявку</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">

                        <div data-aos='fade-right' className="card">
                            <div className="card-header">
                                <h5>Корпоративный сайт</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 9.500.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>20-25 дней</h6>
                                </div>
                                <button onClick={() => props.updateState({isOpen: true})} className="btn myBtn">Оставить заявку</button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-lg-3">

                        <div data-aos='fade-right' className="card">
                            <div className="card-header">
                                <h5>Уникальные проекты</h5>
                            </div>
                            <div className="card-body">
                                <h4><span>от</span> 25.000.000 <span>сум</span> </h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Срок создания</p>
                                    <h6>30-45 дней</h6>
                                </div>
                                <button onClick={() => props.updateState({isOpen: true})} className="btn myBtn">Оставить заявку</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default connect(null, {updateState})(PaketsWeb);
