import { Link } from "react-router-dom";
import pen from "../../images/pen.svg";
/* import books from "../../images/books.svg"; */
import Tilt from "react-tilt";

import "./Main.css";
function Main() {
  return (
    <main className="main">
      <div className="main__title-box">
        <h1 className="main__title">Русский язык</h1>
        <img className="main__title-img" src={pen} alt="ручка" />
      </div>
      <p className="main__text">
        Текст, текст, текст, текст, текст, текст, текст, текст, текст, текст,
        текст, текст, текст, текст, текст, текст, текст, текст, текст, текст,
        текст, текст, текст, текст, текст, текст, текст, текст, текст, текст,
        текст, текст, текст, текст.
      </p>
      <div>
        {/*   <img className="main__books" src={books} alt="изображение книг" /> */}
        <div className="main__grid">
          <Tilt className="Tilt" scale=" 0.95" startY=" 40">
            <div className="Tilt-inner card main__grid-element ">
              <Link to="1" className="main__link year ">
                <span>1-4 класс</span>
              </Link>
            </div>
          </Tilt>
          <Tilt className="Tilt" scale=" 0.95" startY=" 40">
            <div className="Tilt-inner card main__grid-element ">
              <Link to="1" className="main__link year ">
                <span>5 класс</span>
              </Link>
            </div>
          </Tilt>
          <Tilt className="Tilt" scale=" 0.95" startY=" 40">
            <div className="Tilt-inner card main__grid-element ">
              <Link to="1" className="main__link year ">
                <span>6 класс</span>
              </Link>
            </div>{" "}
          </Tilt>
          <Tilt className="Tilt" scale=" 0.95" startY=" 40">
            <div className="Tilt-inner card main__grid-element ">
              <Link to="1" className="main__link year ">
                <span>7 класс</span>
              </Link>
            </div>{" "}
          </Tilt>
          <Tilt className="Tilt" scale=" 0.95" startY=" 40">
            <div className="Tilt-inner card main__grid-element ">
              <Link to="1" className="main__link year ">
                <span>8 класс</span>
              </Link>
            </div>{" "}
          </Tilt>
          <Tilt className="Tilt" scale=" 0.95" startY=" 40">
            <div className="Tilt-inner card main__grid-element ">
              <Link to="1" className="main__link year ">
                <span>9 класс</span>
              </Link>
            </div>{" "}
          </Tilt>
          <Tilt className="Tilt" scale=" 0.95" startY=" 40">
            <div className="Tilt-inner card main__grid-element ">
              <Link to="1" className="main__link year ">
                <span>ОГЭ</span>
              </Link>
            </div>{" "}
          </Tilt>
          <Tilt className="Tilt" scale=" 0.95" startY=" 40">
            <div className="Tilt-inner card main__grid-element ">
              <Link to="1" className="main__link year ">
                <span>ЕГЭ</span>
              </Link>
            </div>
          </Tilt>
          {/*  <Link className="main__grid-element" to="1">
              5 класс
              </Link>
            <Link className="main__grid-element" to="1">
            6 класс
            </Link>
            <Link className="main__grid-element" to="1">
            7 класс
            </Link>
            <Link className="main__grid-element" to="1">
            8 класс
            </Link>
            <Link className="main__grid-element" to="1">
              9 класс
            </Link>
            <Link className="main__grid-element" to="1">
              ОГЭ
            </Link>
            <Link className="main__grid-element" to="1">
              ЕГЭ
            </Link> */}
        </div>
      </div>
    </main>
  );
}
export default Main;
