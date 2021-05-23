import React from 'react';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Card from '../../components/Card/Card';

const Portfolio = () => {
    const { t } = useTranslation();
    return (
        <article className='skills'>
            <div className="container py-5">
                <h2 className="title title_lg mb-5">
                    <span className="text-red">&lt;</span>
                    {t("menu.portfolio")}
                    <span className="text-red"> /&gt;</span>
                </h2>
                <div className="substrate p-5">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </article>
    );
};

export default Portfolio;