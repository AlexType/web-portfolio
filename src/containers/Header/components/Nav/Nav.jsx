import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {
    CONTACTS_ROUTE,
    EDUCATION_ROUTE,
    EXPERIENCE_ROUTE,
    HOME_ROUTE,
    PORTFOLIO_ROUTE,
    SKILLS_ROUTE
} from '../../../../utils/consts';
import './Nav.scss';

const Nav = () => {
    const { t } = useTranslation();
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink className='nav-link' to={HOME_ROUTE}>{t("menu.home")}</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={SKILLS_ROUTE}>{t("menu.skills")}</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={EXPERIENCE_ROUTE}>{t("menu.experience")}</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={PORTFOLIO_ROUTE}>{t("menu.portfolio")}</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={EDUCATION_ROUTE}>{t("menu.education")}</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={CONTACTS_ROUTE}>{t("menu.contacts")}</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;