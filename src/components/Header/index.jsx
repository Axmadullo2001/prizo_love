import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/Header/logo.svg'
import task from '../../assets/images/Header/task-icon.svg'
import trash from '../../assets/images/Header/trash.svg'
import victories from '../../assets/images/Header/victories.svg'
import business from '../../assets/images/Header/business.svg'
import sertificate from '../../assets/images/Header/sertificate.svg'
import notification from '../../assets/images/Header/notifications.svg'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__left_block}>
        <Link to="/"><img src={logo} alt="" /></Link>
        <ul className={s.header__navbar}>
          <li className={s.header__navbar_list}>
            <Link to="/" className={`${s.header__task_item} ${s.header__navbar_link}`}>
              <img className={s.header__nav_img} src={task} alt="" />
              <p>Задания</p>
            </Link>
          </li>
          <li className={s.header__navbar_list}>
            <Link to="/" className={s.header__navbar_link}>
              <img className={s.header__nav_img} src={trash} alt="" />
              <p>Витрина</p>
            </Link>
          </li>
          <li className={s.header__navbar_list}>
            <Link to="/" className={s.header__navbar_link}>
              <img className={s.header__nav_img} src={victories} alt="" />
              <p>Розыгрыши</p>
            </Link>
          </li>
          <li className={s.header__navbar_list}>
            <Link to="/" className={`${s.header__navbar_link} ${s.header__navbar_hypertext}`}>
              <img className={s.header__nav_img} src={business} alt="" />
              <p>Бизнес</p>
            </Link>
          </li>

        </ul>
      </div>

      <div className={s.header__help_part}>
        <button className={s.header__add_task}>Добавить задание</button>
        <Link to="/"><img className={s.header__sertificate} src={sertificate} alt="" /></Link>
        <Link to="/"><img className={s.header__notification} src={notification} alt="" /></Link>
        <button className={s.header__user_profile}>NV</button>
        <div className={s.header__burger_menu}>
          <div className={s.header__menu_items}></div>
          <div className={s.header__menu_items}></div>
          <div className={s.header__menu_items}></div>
        </div>
      </div>
    </div>
  )
}
