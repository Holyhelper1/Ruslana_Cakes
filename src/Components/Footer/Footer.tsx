import { useState } from "react";
import logo from "../../assets/logo_text_light.png";
import { scrollToSection } from "../../Utils/scroll";
import { SocialLinks } from "../social_links/social_links";
import { Modal } from "../Modal/Modal";
export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const yearNow = new Date().getFullYear();
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
          <li className="footer-menu-item hover" onClick={() => setIsModalOpen(true)}>Заказать</li>
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
      <p>© {yearNow} Ruslana Cakes</p>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
