import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    CONTACTS_ROUTE,
    EDUCATION_ROUTE,
    EXPERIENCE_ROUTE,
    PORTFOLIO_ROUTE,
    SKILLS_ROUTE
} from '../../../../utils/consts';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink className='nav-link' to={SKILLS_ROUTE}>Skills</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={EXPERIENCE_ROUTE}>Experience</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={PORTFOLIO_ROUTE}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={EDUCATION_ROUTE}>Education</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to={CONTACTS_ROUTE}>Contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;