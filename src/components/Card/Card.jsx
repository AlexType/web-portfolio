import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        <div className="card">
            <div className="card__head">
                <img src="img/portfolio/logistica.png" alt="Логистика+" />
            </div>
            <div className="card__body">
                <h6 className="card__title mb-4">ЛогистикаПлюс</h6>
                <p className="mb-4">
                    Вёрстка нового дизайна для логистической компании "ЛогистикаПлюс". <br />
                    <span className="text-red">Из основного функционала</span> - поэкранное переключение. <br />
                </p>
                <a href='https://angryfisher.s-vl.site/logistika-plus/' className="card__link">
                    <i className="bi bi-eye-fill"></i>
                    <span>Посетить сайт</span>
                </a>
            </div>
        </div>
    );
};

export default Card;