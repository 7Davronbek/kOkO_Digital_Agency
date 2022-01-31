import React from 'react';

const DesignHeader = () => {
    return <>

        <div className='designHeader myWebHeader'>
            <div className="container">
                <div className="row align-items-center">
                    <div data-aos='fade-right' className="col-lg-6">
                        <h1>Общее понятие о Дизайне</h1>
                        <p>Дизайн (от англ. Design – проектировать; чертить; задумать; а также проект; план; рисунок. С помощью дизайна   создается определенный и запоминающийся креатив, связанный с представительством компании в сети Интернет и ее повседневной деятельностью. Необычный и яркий дизайн сайта позволяет выделить его среди других ресурсов и, тем самым, привлечь на его страницы большее количество пользователей.</p>
                    </div>
                    <div data-aos='fade-left' className="col-lg-6">
                        <i><img src="/assets/image/web.png" alt="" /></i>
                    </div>
                </div>
            </div>
        </div></>;
};

export default DesignHeader;
