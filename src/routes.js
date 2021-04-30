import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";
import Contacts from "./pages/Contacts/Contacts";
import {
    HOME_ROUTE,
    SKILLS_ROUTE,
    EXPERIENCE_ROUTE,
    PORTFOLIO_ROUTE,
    EDUCATION_ROUTE,
    CONTACTS_ROUTE
} from "./utils/consts";


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SKILLS_ROUTE,
        Component: Skills
    },
    {
        path: EXPERIENCE_ROUTE,
        Component: Experience
    },
    {
        path: PORTFOLIO_ROUTE,
        Component: Portfolio
    },
    {
        path: EDUCATION_ROUTE,
        Component: Education
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    }
];