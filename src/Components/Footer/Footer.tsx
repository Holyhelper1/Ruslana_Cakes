import logo from "../../assets/logo_text_light.png";
import { SocialLinks } from "../social_links/social_links";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container-up">
        <div>
          <img
            src={logo}
            alt=""
            loading="lazy"
            width={"200px"}
            height={"auto"}
          />
        </div>
        <ul className="footer-menu">
          <li>Store</li>
          <li>About us</li>
          <li>Catalog</li>
          <li>Contact us</li>
        </ul>

      </div>
        <div className="footer-container-down">
          <div></div>
          <div className="footer-social-links"><SocialLinks /></div>
        </div>
      <hr className="footer-hr"></hr>
      <p>© 2022 Ruslana Cakes</p>
    </div>
  );
};
