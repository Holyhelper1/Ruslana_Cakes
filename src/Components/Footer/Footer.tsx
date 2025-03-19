import logo from "../../assets/logo_text_light.png";
import { scrollToSection } from "../../Utils/scroll";
import { SocialLinks } from "../social_links/social_links";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container-up">
        <div className="footer-logo">
          <img
            src={logo}
            alt=""
            loading="lazy"
            width={"200px"}
            height={"auto"}
          />
        </div>
        <ul className="footer-menu">
          <li>Заказать</li>
          {/* <li>About us</li> */}
          <li className="footer-menu-item"><a onClick={() => scrollToSection("catalog")}>Каталог</a></li>
          <li className="footer-menu-item"><a onClick={() => scrollToSection("location")}>Контакты</a></li>
        </ul>

      </div>
        <div className="footer-container-down">
          <div className="footer-empty"></div>
          <div className="footer-social-links"><SocialLinks /></div>
        </div>
      <hr className="footer-hr"></hr>
      <p>© 2022 Ruslana Cakes</p>
    </div>
  );
};
