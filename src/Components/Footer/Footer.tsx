import { Link } from "react-router";
import logo from "../../assets/logo_text_light.png";
import { scrollToSection } from "../../Utils/scroll";
import { SocialLinks } from "../social_links/social_links";
import { WeatherBlock } from "../weather-block/weather-block";
export const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-container-up">
        <div className="footer-logo">
          <Link to="/" onClick={() => scrollToSection("main")}>
            <img
              src={logo}
              alt=""
              loading="lazy"
              width={"200px"}
              height={"auto"}
            />
          </Link>
        </div>
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <a onClick={() => scrollToSection("catalog")}>Каталог</a>
          </li>
          <li className="footer-menu-item">
            <Link to="location" onClick={() => scrollToSection("location")}>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-container-down">
        <WeatherBlock />
        <div className="footer-empty"></div>
        <div className="footer-social-links">
          <SocialLinks />
        </div>
      </div>
      <hr className="footer-hr"></hr>
      <p>© {yearNow} Ruslana Cakes</p>
    </div>
  );
};
