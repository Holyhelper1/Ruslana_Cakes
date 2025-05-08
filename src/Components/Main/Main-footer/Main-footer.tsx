import logo from "../../../assets/Full-logo.svg";
import Instagram from "../../../assets/Footer/icons/instagram.svg";
import VK from "../../../assets/Footer/icons/VK.svg";
import Telegram from "../../../assets/Footer/icons/Telegram.svg";
import { Link } from "react-router";
import { scrollToSection } from "../../../Utils/scroll";
export const MainFooter = () => {
  return (
    <div className="main-footer-footer">
      <h2 className="main-footer-footer-tittle">
        Создаю сладкие моменты <br></br> с любовью
      </h2>
      <Link to="/" onClick={() => scrollToSection("main")}>
        <img
          className="main-footer-footer-logo"
          src={logo}
          alt="logo"
          title="На главную"
        />
      </Link>
      <Link to="/location" onClick={() => scrollToSection("location")}>
        Как нас найти
      </Link>
      <div className="main-footer-footer-social">
        <a href="https://www.instagram.com/ruslanacakes/" target="blank">
          <img src={Instagram} alt="instagram" />
        </a>
        <a href="https://vk.com/ruslanacakes" target="blank">
          <img src={VK} alt="VK" />
        </a>
        <a href="https://t.me/ruslanacakes" target="blank">
          <img src={Telegram} alt="Telegram" />
        </a>
      </div>
    </div>
  );
};
