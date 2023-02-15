import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
/* import loop from "../../images/loop.svg"; */
import loopsmall from "../../images/loop-small.svg";
import linesearch from "../../images/line-search.svg";
import user from "../../images/user.svg";
import line1 from "../../images/line1.svg";
import Tilt from "react-tilt";
import "./Header.css";

function Header({ isLoggedIn = true, setPopupOpen, screenSize = 900 }) {
  return (
    <header
      className={`header ${
        isLoggedIn && screenSize > 837 ? "header_type_loggedin" : ""
      }  `}
    >
      <img src={line1} className="header__line" alt="линия"></img>
      {/*     <Link to="">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link> */}
      <Tilt className="Tilt" scale=" 0.95" startY=" 40">
        <div className="Tilt-inner header__logo">
          <Link to="" className=" year ">
            <span>
              <img src={logo} alt="Логотип" />
            </span>
          </Link>
        </div>
      </Tilt>
      <div>
        <p className="header__title">
          Школа подготовки к&nbsp;ЕГЭ &laquo;Дай пять!&raquo;
        </p>
      </div>
      {screenSize > 837 ? (
        <>
          <div>
            <Link to="home">
              <button className="button header__link header__frame">
                Главная
              </button>
            </Link>
            <Link to="about-us">
              <button className="button header__link ">О нас</button>
            </Link>
            <Link to="teachers">
              <button className="button header__link ">Преподаватели</button>
            </Link>
            <Link to="feedback">
              <button className="button header__link ">Отзывы</button>
            </Link>
            <Link to="all-courses">
              <button className="button header__link ">Все курсы</button>
            </Link>
          </div>
          <div className="header__sign-box">
            {/*      <div className="header__wrap">
              <button className="button">
                <img className="header__loop" src={loop} alt="Поиск"></img>
              </button>
              <input
                type="text"
                className="input"
                placeholder="Поиск по сайту"
              ></input>
            </div> */}
            <div className="header__wrap">
              <img
                className="header__loop-icon"
                src={loopsmall}
                alt="Поиск"
              ></img>
              <img
                className="header__search-line"
                src={linesearch}
                alt="Линия"
              ></img>
              <input
                type="text"
                className="header__input"
                placeholder="Поиск по сайту"
              />
            </div>
            {!isLoggedIn ? (
              <div className="header__sign-container">
                <Link to="signup">
                  <button className=" header__link header__sign">
                    Регистрация
                  </button>
                </Link>
                <Link to="signin">
                  <button className="link header__link header__sign ">
                    Войти
                  </button>
                </Link>
              </div>
            ) : (
              <div className="header__signed-box">
                <Link className="header__name" to="profile">
                  <button className="button header__button ">Имя</button>
                </Link>
                <img src={user} alt="Аватарка" />
              </div>
            )}
          </div>
        </>
      ) : screenSize < 837 ? (
        <img
          src={menu}
          className="header__sign-box header__menu"
          alt="Menu"
          onClick={setPopupOpen}
        />
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
