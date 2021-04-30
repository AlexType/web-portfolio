
import React from 'react';
import './ButtonIco.scss';

const ButtonIco = ({ icoType }) => {
    return (
        <button className="btn btn_ico">
            <i class={`bi bi-${icoType}`}></i>
        </button>
    );
};

export default ButtonIco;