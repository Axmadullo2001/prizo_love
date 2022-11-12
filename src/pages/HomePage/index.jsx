import React from 'react'

import { Header } from '../../components/Header'
import banner from '../../assets/images/Store/slider_image.png'
import incart_icon1 from '../../assets/images/Store/in_cart_icon1.png'
import incart_icon2 from '../../assets/images/Store/in_cart_icon2.png'

import s from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div className={s.home_page}>
      <Header />
      <div className={s.home_page__main_container}>
        <section className={s.home_page__section}>
          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_256_1978)">
                  <path d="M14.6666 9.15527e-05H9.12486C8.75826 9.15527e-05 8.24588 0.212473 7.98686 0.471299L0.389101 8.06902C-0.129685 8.58722 -0.129685 9.43683 0.389101 9.9544L6.04625 15.6114C6.56386 16.1296 7.41265 16.1296 7.93104 15.6108L15.5288 8.01422C15.7876 7.75543 16 7.24223 16 6.87641V1.33348C16 0.600283 15.3998 9.15527e-05 14.6666 9.15527e-05ZM11.9998 5.33346C11.2634 5.33346 10.6664 4.73584 10.6664 4.00007C10.6664 3.26308 11.2634 2.66668 11.9998 2.66668C12.7362 2.66668 13.3334 3.26308 13.3334 4.00007C13.3334 4.73584 12.7362 5.33346 11.9998 5.33346Z" fill="#FAA525" />
                </g>
                <defs>
                  <clipPath id="clip0_256_1978">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className={s.home_page__navbar_text}>Акции</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M12 0H4C3.26699 0 2.6666 0.600391 2.6666 1.3334V1.6668H13.3334V1.3334C13.3334 0.600391 12.733 0 12 0Z" fill="black" />
                  <path d="M2.6666 12V14.6668C2.6666 15.3998 3.26699 16 4 16H12C12.733 16 13.3334 15.3998 13.3334 14.6668V12H2.6666ZM8.66659 14.6668H7.33339C6.9648 14.6668 6.6666 14.3686 6.6666 14C6.6666 13.6316 6.9648 13.3334 7.33339 13.3334H8.66659C9.03518 13.3334 9.33339 13.6316 9.33339 14C9.33339 14.3686 9.03518 14.6668 8.66659 14.6668Z" fill="black" />
                  <path d="M13.3326 2.66679H2.6666V11H13.3326V2.66679Z" fill="black" />
                </g>
              </svg>

              <span className={s.home_page__navbar_text}>Смартфоны</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M12 2H4.00001C2.52739 2 1.3334 3.19398 1.3334 4.6666H2C3.83782 4.6666 5.33341 6.16199 5.33341 8V10H10.6666V8C10.6666 6.16219 12.1622 4.6666 14 4.6666H14.6666C14.6666 3.19398 13.4726 2 12 2Z" fill="black" />
                  <path d="M14 6C12.8958 6 12 6.89578 12 8V11.3334H4V8C4 6.89578 3.10422 6 2 6C0.895781 6 0 6.89578 0 8V12.6666H1.3334V14H2.6666V12.6666H13.3334V14H14.6666V12.6666H16V8C16 6.89578 15.1042 6 14 6Z" fill="black" />
                </g>
              </svg>

              <span className={s.home_page__navbar_text}>Товары для дома</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_256_2144)">
                  <path d="M15.3326 6.33337H0.666599V12.9994H15.3326V6.33337Z" fill="black" />
                  <path d="M0.666599 14V14.6666C0.666599 15.3998 1.26699 16 2 16H14C14.733 16 15.3334 15.3998 15.3334 14.6666V14H0.666599Z" fill="black" />
                  <path d="M14 1.3334L13.3334 0H10L9.3334 1.3334H6.6666L6 0H2.6666L2 1.3334C1.26699 1.3334 0.666599 1.93359 0.666599 2.6666V5.3334H15.3334V2.6666C15.3334 1.93359 14.733 1.3334 14 1.3334ZM4 4C3.6314 4 3.3334 3.7018 3.3334 3.3334C3.3334 2.9648 3.6314 2.6666 4 2.6666C4.36859 2.6666 4.6666 2.9648 4.6666 3.3334C4.6666 3.7018 4.36859 4 4 4ZM6.6666 4C6.2982 4 6 3.7018 6 3.3334C6 2.9648 6.2982 2.6666 6.6666 2.6666C7.03519 2.6666 7.3334 2.9648 7.3334 3.3334C7.3334 3.7018 7.03519 4 6.6666 4ZM9.3334 4C8.9648 4 8.6666 3.7018 8.6666 3.3334C8.6666 2.9648 8.9648 2.6666 9.3334 2.6666C9.7018 2.6666 10 2.9648 10 3.3334C10 3.7018 9.7018 4 9.3334 4ZM12 4C11.6314 4 11.3334 3.7018 11.3334 3.3334C11.3334 2.9648 11.6314 2.6666 12 2.6666C12.3686 2.6666 12.6666 2.9648 12.6666 3.3334C12.6666 3.7018 12.3686 4 12 4Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_256_2144">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className={s.home_page__navbar_text}>Бытовая техника</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_256_2169)">
                  <path d="M14 0V3.05199C14 3.7884 13.403 4.38539 12.6666 4.38539C11.9302 4.38539 11.3334 3.7884 11.3334 3.05199V0C10.1576 0.515 9.33341 1.68621 9.33341 3.05199C9.33341 4.13859 9.862 5.095 10.6666 5.70379V14C10.6666 15.1042 11.5624 16 12.6666 16C13.7708 16 14.6666 15.1042 14.6666 14V5.70379C15.472 5.095 16 4.13859 16 3.05199C16 1.68559 15.1764 0.515 14 0Z" fill="black" />
                  <path d="M9.33341 9.33339V6.6666H2C0.895783 6.6666 0 7.56179 0 8.66601L0.000585938 8.6666H0V13.3334H1.3334V15.3334C1.3334 15.7006 1.6334 16 2 16H3.3334C3.69981 16 4.00001 15.7006 4.00001 15.3334V13.3334H9.33341V10.6666H4.66661V9.33339H9.33341ZM2.66661 10.8334C2.207 10.8334 1.8334 10.4604 1.8334 9.99999C1.8334 9.53898 2.207 9.1666 2.66661 9.1666C3.12641 9.1666 3.50001 9.53898 3.50001 9.99999C3.50001 10.4604 3.12641 10.8334 2.66661 10.8334Z" fill="black" />
                  <path d="M8 3.05198C8 2.45038 8.12641 1.87237 8.34121 1.33319H4.20961C3.65762 1.33319 3.15762 1.55718 2.79563 1.91921C2.61203 2.10343 2.46364 2.32339 2.36282 2.5676L1.217 5.33319H8.60438C8.21422 4.64639 8 3.8678 8 3.05198Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_256_2169">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className={s.home_page__navbar_text}>Инструменты и автотовары</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_256_2196)">
                  <path d="M0 5.33331V7.11118C0.736405 7.11118 1.3334 7.90691 1.3334 8.88878V10.6666H1.33261C1.33261 12.6301 2.52683 14.2221 3.99863 14.2221V16H5.33202V14.2221H10.668V16H12.0014V14.2221C13.4732 14.2205 14.6666 12.6283 14.6666 10.6666V8.88878C14.6666 7.90691 15.2636 7.11118 16 7.11118V5.33331H0Z" fill="black" />
                  <path d="M3.3334 0C2.22918 0 1.3334 1.19438 1.3334 2.66667V4H2.6666V2.66667C2.6666 2.17521 2.96481 1.77786 3.3334 1.77786C3.7018 1.77786 4 2.17521 4 2.66667H5.3334C5.3334 1.19438 4.43801 0 3.3334 0Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_256_2196">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className={s.home_page__navbar_text}>Сантехника и ремонт</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M11.332 13.6663H4.66601V14.6663H11.332V13.6663Z" fill="black" />
                  <path d="M12 1.33371H10.1342L8 3.46769L5.86578 1.33371H4L0 8.66711L2.37359 9.9625L4 6.98148V12.6671H12V6.98148L13.6264 9.9625L16 8.66711L12 1.33371Z" fill="black" />
                </g>
              </svg>

              <span className={s.home_page__navbar_text}>Одежда и украшения</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_256_2240)">
                  <path d="M10 0H6.00001L4.66661 1.33398V2.6666H11.3334V1.3334L10 0Z" fill="black" />
                  <path d="M12 5.3334H9.99999V4H6V5.3334H4L2 7.3334V8.23102C2 10.7436 3.01961 13.0194 4.6666 14.6666L6 16H9.99999L11.3334 14.6666C12.9804 13.0196 14 10.7436 14 8.23102V7.3334L12 5.3334ZM9.99999 12.6666H6V11.3334H9.99999V12.6666ZM11.3334 10H4.6666V8.66661H11.3334V10Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_256_2240">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className={s.home_page__navbar_text}>Красота и здоровье</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_256_2262)">
                  <path d="M11.5548 0.000671387C10.3282 0.000671387 9.21734 0.497973 8.41288 1.3016V1.30264L1.30203 8.41298C0.498083 9.21692 0 10.3296 0 11.557C0 14.0099 1.98941 15.9993 4.44416 15.9993C5.6715 15.9993 6.7826 15.5028 7.58602 14.6973L7.58712 14.6989L11.5558 10.7304C12.5974 9.68891 12.5974 8.00083 11.5558 6.95904C10.5148 5.91835 8.82592 5.91835 7.78418 6.95904L3.81572 10.9283L5.0727 12.1853L9.0409 8.2168C9.38832 7.86964 9.95176 7.86964 10.2987 8.2168C10.6461 8.56396 10.645 9.1263 10.2987 9.47378L6.33045 13.4422L6.32967 13.4404C5.8468 13.923 5.18019 14.2217 4.44452 14.2217C2.97157 14.2217 1.77808 13.0274 1.77808 11.5571C1.77808 10.819 2.07644 10.1524 2.55937 9.67006L9.66986 2.55936C10.1527 2.07675 10.8199 1.77807 11.5561 1.77807C13.028 1.77807 14.2225 2.97235 14.2225 4.44451C14.2215 5.1807 13.9236 5.84731 13.4418 6.32967L14.6991 7.58664C15.5017 6.7827 15.999 5.67186 16 4.44451C15.9997 1.99009 14.0092 0.000671387 11.5548 0.000671387Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_256_2262">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className={s.home_page__navbar_text}>Канцтовары и книги</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className={s.home_page__list}>
            <p>
              <svg className={s.home_page__navbar_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_256_2281)">
                  <path d="M11.9818 8H2.6666C2.6666 10.944 5.0534 13.3334 7.99941 13.3334H10.6666C12.1386 13.3334 13.3334 12.1392 13.3334 10.6666C13.3334 9.57161 12.7974 8.60801 11.9818 8Z" fill="black" />
                  <path d="M14.3862 4.6666H16V4L14.6666 3.3334C14.6666 1.49219 13.1758 0 11.3334 0C9.49422 0 8 1.49219 8 3.3334C8 5.17578 9.49422 6.6666 11.3334 6.6666C11.629 6.6666 11.9108 6.61582 12.1836 6.54359C13.6602 7.32758 14.6666 8.87898 14.6666 10.6666C14.6666 12.8764 12.875 14.6666 10.6666 14.6666H7.99941C4.31641 14.6666 1.3334 11.6796 1.3334 8L1.33262 5.3334H0V8C0 12.4154 3.58 16 7.99941 16H10.6666C13.6114 16 16 13.612 16 10.6666C16 8.67582 15.0254 6.91461 13.5306 5.82281C13.8926 5.50398 14.19 5.1152 14.3862 4.6666ZM12 3.3334C11.6322 3.3334 11.3334 3.0352 11.3334 2.6666C11.3334 2.2982 11.6322 2 12 2C12.3686 2 12.6666 2.2982 12.6666 2.6666C12.6666 3.0352 12.3686 3.3334 12 3.3334Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_256_2281">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className={s.home_page__navbar_text}>Детские товары</span>
            </p>

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_256_1958)">
                <path d="M5.41177 3.99813L1.93533 7.47458C1.81514 7.59478 1.81514 7.78966 1.93533 7.90986C2.05555 8.03003 2.25041 8.03003 2.37061 7.90986L6.06469 4.21577C6.18486 4.09557 6.18486 3.90069 6.06469 3.78049L2.37061 0.0864049C2.24831 -0.0317052 2.05344 -0.028313 1.93533 0.0939809C1.82012 0.213281 1.82012 0.402405 1.93533 0.521687L5.41177 3.99813Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_256_1958">
                  <rect width="8" height="8" fill="white" transform="translate(8 8) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>

          </div>
        </section>
        <main className={s.home_page__main}>
          <div>
            <button>
              <svg className={s.home_page__left_direction_icon} width="24" height="76" viewBox="0 0 24 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.24718 38.4289L23.4016 5.85219C24.0637 4.72581 24.0637 2.89968 23.4016 1.7733C22.7392 0.647263 21.6655 0.647263 21.0033 1.7733L0.649732 36.3894C-0.0123537 37.5158 -0.0123537 39.3419 0.649732 40.4683L21.0033 75.0844C21.6771 76.1912 22.7508 76.1594 23.4016 75.0134C24.0363 73.8955 24.0363 72.1233 23.4016 71.0055L4.24718 38.4289Z" fill="white" />
              </svg>
            </button>

            <img className={s.home_page__banner} src={banner} alt="" />

            <button>
              <svg className={s.home_page__right_direction_icon} width="46" height="92" viewBox="0 0 46 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_256_1931)" filter="url(#filter0_d_256_1931)">
                  <path d="M15.2472 43.4289L34.4016 10.8522C35.0637 9.72581 35.0637 7.89968 34.4016 6.7733C33.7392 5.64726 32.6655 5.64726 32.0033 6.7733L11.6497 41.3894C10.9876 42.5158 10.9876 44.3419 11.6497 45.4683L32.0033 80.0844C32.6771 81.1912 33.7508 81.1594 34.4016 80.0134C35.0363 78.8955 35.0363 77.1233 34.4016 76.0055L15.2472 43.4289Z" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_256_1931" x="-7.01343" y="0.928711" width="60.0781" height="90.9655" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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

          <div className={s.home_page__in_cart}>
            <div className={s.home_page__incart_left_part}>
              <div className={s.home_page__product_item}>
                <p className={s.home_page__product_in_basket_count}>В корзине <span className={s.home_page__product_count}>2 товара</span></p>
                <p className={s.home_page__product_price}>На сумму 18 999 ₴</p>
              </div>
              <div className={s.home_page__in_basket_content}>
                <img className={s.home_page__card_border} src={incart_icon1} alt="" />
                <button className={s.home_page__remove_card}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9.5" fill="white" stroke="#F7F7F7" />
                    <g clip-path="url(#clip0_257_66)">
                      <path d="M5.84469 7.52231C5.60841 7.52231 5.4446 7.28345 5.53319 7.06441C5.84777 6.28671 6.61076 5.7366 7.49991 5.7366H7.91094C8.06422 4.92693 8.77411 4.28571 9.64277 4.28571H10.3571C11.2252 4.28571 11.9355 4.92651 12.0889 5.7366H12.4999C13.3891 5.7366 14.1521 6.28671 14.4666 7.06441C14.5552 7.28345 14.3914 7.52231 14.1551 7.52231H5.84469ZM10.3571 4.95535H9.64277C9.15393 4.95535 8.73897 5.28423 8.59928 5.7366H11.4005C11.2608 5.28423 10.8459 4.95535 10.3571 4.95535Z" fill="#676767" />
                      <path d="M13.2353 14.7812C13.1981 15.3044 12.758 15.7143 12.2334 15.7143H7.76644C7.24189 15.7143 6.80178 15.3044 6.76452 14.7812L6.29526 8.19196H13.7046L13.2353 14.7812ZM9.08432 9.98327C9.07508 9.79859 8.9176 9.65615 8.73321 9.66559C8.54852 9.67483 8.40629 9.83204 8.41553 10.0167L8.5941 13.5881C8.60305 13.7671 8.751 13.9062 8.92823 13.9062C9.12102 13.9062 9.27242 13.745 9.26292 13.5547L9.08432 9.98327ZM11.2666 9.66559C11.0822 9.65633 10.9247 9.79861 10.9155 9.98327L10.737 13.5547C10.7274 13.7451 10.879 13.9062 11.0716 13.9062C11.2489 13.9062 11.3968 13.7671 11.4058 13.5881L11.5843 10.0167C11.5936 9.83204 11.4513 9.67483 11.2666 9.66559V9.66559Z" fill="#676767" />
                    </g>
                    <defs>
                      <clipPath id="clip0_257_66">
                        <rect width="11.4286" height="11.4286" fill="white" transform="matrix(-1 0 0 1 15.7143 4.28571)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

                <img className={s.home_page__card_border} src={incart_icon2} alt="" />
                <button className={s.home_page__remove_card_second}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9.5" fill="white" stroke="#F7F7F7" />
                    <g clip-path="url(#clip0_257_66)">
                      <path d="M5.84469 7.52231C5.60841 7.52231 5.4446 7.28345 5.53319 7.06441C5.84777 6.28671 6.61076 5.7366 7.49991 5.7366H7.91094C8.06422 4.92693 8.77411 4.28571 9.64277 4.28571H10.3571C11.2252 4.28571 11.9355 4.92651 12.0889 5.7366H12.4999C13.3891 5.7366 14.1521 6.28671 14.4666 7.06441C14.5552 7.28345 14.3914 7.52231 14.1551 7.52231H5.84469ZM10.3571 4.95535H9.64277C9.15393 4.95535 8.73897 5.28423 8.59928 5.7366H11.4005C11.2608 5.28423 10.8459 4.95535 10.3571 4.95535Z" fill="#676767" />
                      <path d="M13.2353 14.7812C13.1981 15.3044 12.758 15.7143 12.2334 15.7143H7.76644C7.24189 15.7143 6.80178 15.3044 6.76452 14.7812L6.29526 8.19196H13.7046L13.2353 14.7812ZM9.08432 9.98327C9.07508 9.79859 8.9176 9.65615 8.73321 9.66559C8.54852 9.67483 8.40629 9.83204 8.41553 10.0167L8.5941 13.5881C8.60305 13.7671 8.751 13.9062 8.92823 13.9062C9.12102 13.9062 9.27242 13.745 9.26292 13.5547L9.08432 9.98327ZM11.2666 9.66559C11.0822 9.65633 10.9247 9.79861 10.9155 9.98327L10.737 13.5547C10.7274 13.7451 10.879 13.9062 11.0716 13.9062C11.2489 13.9062 11.3968 13.7671 11.4058 13.5881L11.5843 10.0167C11.5936 9.83204 11.4513 9.67483 11.2666 9.66559V9.66559Z" fill="#676767" />
                    </g>
                    <defs>
                      <clipPath id="clip0_257_66">
                        <rect width="11.4286" height="11.4286" fill="white" transform="matrix(-1 0 0 1 15.7143 4.28571)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

              </div>
            </div>

            <div className={s.home_page__incart_right_part}>
              <button className={s.home_page__add_to_basket}>В корзину</button>
              <button className={s.home_page__order_offer}>Оформить заказ</button>
              <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5" clip-path="url(#clip0_257_81)">
                    <path d="M9.46586 8.01235L15.6959 1.78208C16.1014 1.37682 16.1014 0.721584 15.6959 0.31633C15.2907 -0.0889232 14.6355 -0.0889232 14.2302 0.31633L7.99992 6.5466L1.76983 0.31633C1.36439 -0.0889232 0.709337 -0.0889232 0.304083 0.31633C-0.101361 0.721584 -0.101361 1.37682 0.304083 1.78208L6.53417 8.01235L0.304083 14.2426C-0.101361 14.6479 -0.101361 15.3031 0.304083 15.7084C0.506045 15.9105 0.771596 16.0121 1.03696 16.0121C1.30232 16.0121 1.56768 15.9105 1.76983 15.7084L7.99992 9.47809L14.2302 15.7084C14.4324 15.9105 14.6977 16.0121 14.9631 16.0121C15.2284 16.0121 15.4938 15.9105 15.6959 15.7084C16.1014 15.3031 16.1014 14.6479 15.6959 14.2426L9.46586 8.01235Z" fill="#676767" />
                  </g>
                  <defs>
                    <clipPath id="clip0_257_81">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

            </div>
          </div>

          <div className={s.home_page__best_offers}>

          </div>

        </main>
      </div>

    </div>
  )
}
