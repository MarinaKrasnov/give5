import vk from "../../images/vk.svg";
import telegram from "../../images/telegram.svg";
import whatsup from "../../images/whatsup.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={vk} alt="в контакте" />
        <img src={telegram} alt="телеграм" />
        <img src={whatsup} alt="ватсап" />
      </div>
      <div className="footer__box">
        <p className="footer__text">Договор оферты</p>
        <p className="footer__text">Политика конфедициальности</p>
      </div>
    </footer>
  );
}
export default Footer;
