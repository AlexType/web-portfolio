import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { HOME_ROUTE } from '../../utils/consts';
import ButtonIco from '../../UI/Buttons/ButtonIco/ButtonIco';
import Nav from './components/Nav/Nav';
import './Header.scss';

const Header = () => {
    const { i18n } = useTranslation(),
        [lang, setLang] = useState('ru');

    const changeLanguage = () => {
        if (lang === 'en') setLang('ru');
        else if (lang === 'ru') setLang('en');
    };

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [i18n, lang]);


    return (
        <header className="header py-4">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="logo">
                            <NavLink className='nav-link' to={HOME_ROUTE}><span>[A|B]</span></NavLink>
                        </div>
                    </div>
                    <div className="col-auto">
                        <Nav />
                    </div>
                    <div className="col-auto">
                        <div className="row">
                            <div className="col-auto">
                                <ButtonIco icoType="house-fill" />
                            </div>
                            <div className="col-auto p-0">
                                <ButtonIco icoType="lightbulb-fill" />
                            </div>
                            <div className="col-auto">
                                <ButtonIco icoType="globe2" click={changeLanguage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;