import React from 'react';
import TimeLine from '../../components/TimeLine/TimeLine';

const Home = () => {
    return (
        <article className='intro'>
            <div className="container py-5">
                <div className="row justify-content-between">
                    <div className="col-7">
                        <h2 className="title title_name">
                            <span className="text-red">#</span>
                            Alexandr Bryzgalov
                        </h2>
                        <p className='fs-2 fw-bold text-end mt-3'>
                            <span className="text-red">&lt;</span>
                            Front-End Developer
                            <span className="text-red"> /&gt;</span>
                        </p>
                    </div>
                    <div className="col-auto">
                        <h3 className="title mb-4 text-end">
                            <span className="text-red">[...</span>
                            TimeLine
                            <span className="text-red">]</span>
                        </h3>
                        <TimeLine />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Home;