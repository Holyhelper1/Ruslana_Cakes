import { Link } from "react-router";
import { scrollToSection } from "../../Utils/scroll";
import headerLogo from "../../assets/Full-logo.svg";
export const Header = () => {
  return (
    <header className="header">
      <div className="header-menu-list-phone">
        <p className="header-menu-item">
          <a href="tel:+79092841484"> Телефон: +7-909-284-14-84</a>
        </p>
        <p className="header-menu-item">
          <a href="https://vk.com/ruslanacakes" target="_blank">
            https://vk.com/ruslanacakes
          </a>
        </p>
      </div>
      <div className="header-logo">
        <Link to="/" onClick={() => scrollToSection("main")}>
          <img src={headerLogo} alt="Logo" title="На главную" />
        </Link>
      </div>
      <div className="header-menu-list">
        <Link to="/location" onClick={() => scrollToSection("location")}>
          Как нас найти
        </Link>
        <p className="header-menu-item">
          <a href="https://yandex.ru/maps/-/CHF8MS8v" target="_blank">
            ул. Академика Сахарова, 117
          </a>
        </p>
        <p className="header-menu-item">Жилой комплекс “Цветы”</p>
      </div>
    </header>
  );
};
