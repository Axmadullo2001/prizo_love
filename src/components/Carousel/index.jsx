import React from 'react'
import { useSwiper } from 'swiper/react'

import banner from '../../assets/images/Store/slider_image.png'
import s from '../../pages/HomePage/HomePage.module.scss'

export const Carousel = () => {
    const swiperNext = useSwiper()
    return (
        <div className={s.home_page__carousel}>
            <button onClick={() => swiperNext.slidePrev()}>
                <svg className={s.home_page__left_direction_icon} width="24" height="76" viewBox="0 0 24 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.24718 38.4289L23.4016 5.85219C24.0637 4.72581 24.0637 2.89968 23.4016 1.7733C22.7392 0.647263 21.6655 0.647263 21.0033 1.7733L0.649732 36.3894C-0.0123537 37.5158 -0.0123537 39.3419 0.649732 40.4683L21.0033 75.0844C21.6771 76.1912 22.7508 76.1594 23.4016 75.0134C24.0363 73.8955 24.0363 72.1233 23.4016 71.0055L4.24718 38.4289Z" fill="white" />
                </svg>
            </button>

            <img className={s.home_page__banner} src={banner} alt="" />

            <button onClick={() => swiperNext.slideNext()}>
                <svg className={s.home_page__right_direction_icon} width="46" height="92" viewBox="0 0 46 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_256_1931)" filter="url(#filter0_d_256_1931)">
                        <path d="M15.2472 43.4289L34.4016 10.8522C35.0637 9.72581 35.0637 7.89968 34.4016 6.7733C33.7392 5.64726 32.6655 5.64726 32.0033 6.7733L11.6497 41.3894C10.9876 42.5158 10.9876 44.3419 11.6497 45.4683L32.0033 80.0844C32.6771 81.1912 33.7508 81.1594 34.4016 80.0134C35.0363 78.8955 35.0363 77.1233 34.4016 76.0055L15.2472 43.4289Z" fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_d_256_1931" x="-7.01343" y="0.928711" width="60.0781" height="90.9655" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="4" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.145098 0 0 0 0 0.709804 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_256_1931" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_256_1931" result="shape" />
                        </filter>
                        <clipPath id="clip0_256_1931">
                            <rect width="44.0781" height="74.9655" fill="white" transform="translate(0.986572 5.92871)" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    )
}
