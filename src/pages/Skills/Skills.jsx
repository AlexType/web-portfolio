import React from 'react';

const Skills = () => {
    return (
        <article className='skills'>
            <div className="container py-5">
                <h2 className="title title_lg">
                    <span className="text-red">&lt;</span>
                    Skills
                    <span className="text-red"> /&gt;</span>
                </h2>
                <div className="row gx-5 mt-4">
                    <div className="col-4">
                        <p>
                            I am inspired by creating great work with
                            people who are as passionate as I am about
                            building something awesome.
                        </p>
                    </div>
                    <div className="col">
                        <h3 className="title">
                            <span className="text-red">[...</span>
                            Front-End Development
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
                            <span className="text-red">[...</span>
                                UI\UX Design
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
        </article>
    );
};

export default Skills;