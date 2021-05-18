import React from 'react';
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    return (
        <article className='skills'>
            <div className="container py-5">
                <h2 className="title title_lg mb-5">
                    <span className="text-red">&lt;</span>
                    {t("menu.skills")}
                    <span className="text-red"> /&gt;</span>
                </h2>
                <div className="substrate p-5">
                    <div className="row gx-5">
                        <div className="col-4">
                            <p>{t("skillsPage.intro")}</p>
                        </div>
                        <div className="col">
                            <h3 className="title">
                                <span className="text-red">[... </span>
                            Front-End {t("words.development")}
                                <span className="text-red">]</span>
                            </h3>
                            <ul className="skills-list mt-2">
                                <li>HTML5,&ensp;</li>
                                <li>CSS3,&ensp;</li>
                                <li>SASS/SCSS,&ensp;</li>
                                <li>JavaScript ES6+,&ensp;</li>
                                <li>React,&ensp;</li>
                                <li>Redux,&ensp;</li>
                                <li>MobX,&ensp;</li>
                                <li>Git,&ensp;</li>
                                <li>Node.js,&ensp;</li>
                            </ul>
                            <h3 className="title mt-4">
                                <span className="text-red">[... </span>
                                UI\UX {t("words.design")}
                                <span className="text-red">]</span>
                            </h3>
                            <ul className="skills-list mt-2">
                                <li>Photoshop,&ensp;</li>
                                <li>Illustrator,&ensp;</li>
                                <li>XMind,&ensp;</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Skills;