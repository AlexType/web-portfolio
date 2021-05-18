
import React from 'react';
import './ButtonIco.scss';

const ButtonIco = ({ icoType, click }) => {
    return (
        <button onClick={click} className="btn btn_ico">
            <i className={`bi bi-${icoType}`}></i>
        </button>
    );
};

export default ButtonIco;


ButtonIco.defaultProps = {
    click: () => { },
};
