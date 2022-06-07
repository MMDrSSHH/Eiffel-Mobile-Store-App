import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


// Css styles
import styles from "./Slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Contexts
import { ThemeContext } from '../contexts/ThemeContextProvider';



const Slider = () => {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={`${styles.swiper} ${darkTheme ? styles.dark : ""}`}
        >
            <SwiperSlide
                className={styles.swiperSlide}
            >
                <h1>Slide 1</h1>
            </SwiperSlide>
            <SwiperSlide
                className={styles.swiperSlide}
            >
                <h1>Slide 2</h1>
            </SwiperSlide>
            <SwiperSlide
                className={styles.swiperSlide}
            >
                <h1>Slide 3</h1>
            </SwiperSlide>
            <SwiperSlide
                className={styles.swiperSlide}
            >
                <h1>Slide 4</h1>
            </SwiperSlide>
            <SwiperSlide
                className={styles.swiperSlide}
            >
                <h1>Slide 5</h1>
            </SwiperSlide>
            <SwiperSlide
                className={styles.swiperSlide}
            >
                <h1>Slide 6</h1>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;