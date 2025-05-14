import logo from "../../../assets/Full-logo.svg";
import Instagram from "../../../assets/Footer/icons/instagram.svg";
import VK from "../../../assets/Footer/icons/VK.svg";
import Telegram from "../../../assets/Footer/icons/Telegram.svg";
import { Link, useLocation } from "react-router";
import { ICakeImage, IFlavors } from "../Cakes/Cakes";
import { Slider } from "./Slider";
import { scrollToSection } from "../../../Utils/scroll";
import dot from "../../Elements/dot";

export const PageBuilder = ({
  tittle,
  secondTittle,
  price,
  flavors = [],
  extraInfo = "",
  priceDetails = "",
  details = "",
  included = "",
  secondFlavors = "",
  cakeImages = [],
}: {
  tittle: string;
  secondTittle: string;
  price: string;
  flavors?: IFlavors[];
  extraInfo?: React.ReactNode;
  priceDetails?: React.ReactNode;
  details?: React.ReactNode;
  included?: React.ReactNode;
  secondFlavors?: React.ReactNode;
  cakeImages?: ICakeImage[];
}) => {
  const { pathname } = useLocation();

  return (
    <div className="page-builder-wrapper">
      <div className="page-builder-container">
        <div className="page-builder-header"></div>
        <ul className="page-builder-nav-list">
          <Link to="/cakes">
            <li
              className={`page-builder-nav-list-item ${
                pathname === "/cakes" ? "active" : ""
              }`}
            >
              Торты
            </li>
          </Link>
          <Link to="/cupcakes">
            <li
              className={`page-builder-nav-list-item ${
                pathname === "/cupcakes" ? "active" : ""
              }`}
            >
              Капкейки
            </li>
          </Link>
          <Link to="/bento">
            <li
              className={`page-builder-nav-list-item ${
                pathname === "/bento" ? "active" : ""
              }`}
            >
              Бенто-торты
            </li>
          </Link>
          <Link to="/meringue">
            <li
              className={`page-builder-nav-list-item ${
                pathname === "/meringue" ? "active" : ""
              }`}
            >
              Меренговый рулет
            </li>
          </Link>
          <Link to="/bento_plus_cupcakes">
            <li
              className={`page-builder-nav-list-item ${
                pathname === "/bento_plus_cupcakes" ? "active" : ""
              }`}
            >
              Бенто+капкейки
            </li>
          </Link>
        </ul>
        <h1 className="page-builder-title">{tittle}</h1>
        <div className="page-builder-content">
          <div className="page-builder-info-card">
            <h2 className="page-builder-info-card-title">{secondTittle}</h2>
            <ol className="page-builder-info-card-list">
              {flavors.length > 0 &&
                flavors.map((item) => (
                  <li
                    key={item.id}
                    className="page-builder-info-card-list-item"
                  >
                    <h3 className="page-builder-info-card-list-item-title">
                      {item.name}
                    </h3>
                    <p className="page-builder-info-card-list-item-description">
                      {item.description}
                    </p>
                  </li>
                ))}
            </ol>
            {extraInfo}
            {details}
            {included}
            {secondFlavors}
            <div className="page-builder-bottom-info-container">
              <ul className="page-builder-bottom-info-list">
                <li className="page-builder-bottom-info-list-item">
                  <strong>Напишите нам, чтобы</strong>:
                </li>
                <li className="page-builder-bottom-info-list-item">
                {dot}  Выбрать вкус и размер
                </li>
                <li className="page-builder-bottom-info-list-item">
                {dot}   Обсудить дизайн
                </li>
                <li className="page-builder-bottom-info-list-item">
                {dot}   Уточнить детали доставки
                </li>
              </ul>
              <div className="page-builder-price-container">
                <h3 className="page-builder-price">
                  Стоимость <br></br>
                  {price}
                </h3>
                {priceDetails}
              </div>
            </div>
          </div>
          <div className="page-builder-images-card">
            {cakeImages.map((item) => (
              <img
                key={item.id}
                className="page-builder-images-item"
                src={item.Image}
                width={item.width}
                height={item.height}
                alt="cake"
              />
            ))}
            <Slider images={cakeImages} />
          </div>
        </div>
      </div>
      <div className="page-builder-footer">
        <div className="page-builder-footer-tittle-container">
          <h3 className="page-builder-footer-tittle-text">
            Готовы оформить заказ?
          </h3>
          <a href="https://t.me/alexeevaruslana" target="_blank">
            <button className="order-button">Написать </button>
          </a>
        </div>
        <h3 className="mobile-title">Создаю сладкие моменты с любовью</h3>
        <Link to="/" onClick={() => scrollToSection("main")}>
          <img
            className="page-builder-footer-logo"
            src={logo}
            alt="logo"
            title="На главную"
          />
        </Link>
        <div className="page-builder-footer-social">
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
    </div>
  );
};
