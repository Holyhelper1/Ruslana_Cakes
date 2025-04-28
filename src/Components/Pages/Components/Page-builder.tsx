import cake from "../../../assets/Cakes/page_cake.jpg";
import logo from "../../../assets/Full-logo.svg";
import Instagram from "../../../assets/Footer/icons/instagram.svg";
import VK from "../../../assets/Footer/icons/VK.svg";
import Telegramm from "../../../assets/Footer/icons/Telegramm.svg";
export const PageBuilder = () => {
  return (
    <div className="page-builder-wrapper">
      <div className="page-builder-container">
        <div className="page-builder-header"></div>
        <h1 className="page-builder-title">Торты</h1>

        <div className="page-builder-content">
          <div className="page-builder-info-card">
            <h2 className="page-builder-info-card-title">Наши вкусы</h2>
            <div>
              <ol className="page-builder-info-card-list">
                <li className="page-builder-info-card-list-item">
                  <h3 className="page-builder-info-card-list-item-title">
                    Молочная девочка
                  </h3>
                  <p className="page-builder-info-card-list-item-description">
                    Нежные коржи на сгущённом молоке + сливочный крем с
                    маскарпоне. <br></br>
                    <strong>Доп</strong>.: ягодная начинка
                    (вишня/малина/клубника)
                  </p>
                </li>
                <li className="page-builder-info-card-list-item">
                  <h3 className="page-builder-info-card-list-item-title">
                    Молочная девочка
                  </h3>
                  <p className="page-builder-info-card-list-item-description">
                    Нежные коржи на сгущённом молоке + сливочный крем с
                    маскарпоне. <br></br>
                    <strong>Доп</strong>.: ягодная начинка
                    (вишня/малина/клубника)
                  </p>
                </li>
                <li className="page-builder-info-card-list-item">
                  <h3 className="page-builder-info-card-list-item-title">
                    Молочная девочка
                  </h3>
                  <p className="page-builder-info-card-list-item-description">
                    Нежные коржи на сгущённом молоке + сливочный крем с
                    маскарпоне. <br></br>
                    <strong>Доп</strong>.: ягодная начинка
                    (вишня/малина/клубника)
                  </p>
                </li>
                <li className="page-builder-info-card-list-item">
                  <h3 className="page-builder-info-card-list-item-title">
                    Молочная девочка
                  </h3>
                  <p className="page-builder-info-card-list-item-description">
                    Нежные коржи на сгущённом молоке + сливочный крем с
                    маскарпоне. <br></br>
                    <strong>Доп</strong>.: ягодная начинка
                    (вишня/малина/клубника)
                  </p>
                </li>
                <li className="page-builder-info-card-list-item">
                  <h3 className="page-builder-info-card-list-item-title">
                    Молочная девочка
                  </h3>
                  <p className="page-builder-info-card-list-item-description">
                    Нежные коржи на сгущённом молоке + сливочный крем с
                    маскарпоне. <br></br>
                    <strong>Доп</strong>.: ягодная начинка
                    (вишня/малина/клубника)
                  </p>
                </li>
                <li className="page-builder-info-card-list-item">
                  <h3 className="page-builder-info-card-list-item-title">
                    Молочная девочка
                  </h3>
                  <p className="page-builder-info-card-list-item-description">
                    Нежные коржи на сгущённом молоке + сливочный крем с
                    маскарпоне. <br></br>
                    <strong>Доп</strong>.: ягодная начинка
                    (вишня/малина/клубника)
                  </p>
                </li>
                <li className="page-builder-info-card-list-item">
                  <h3 className="page-builder-info-card-list-item-title">
                    Молочная девочка
                  </h3>
                  <p className="page-builder-info-card-list-item-description">
                    Нежные коржи на сгущённом молоке + сливочный крем с
                    маскарпоне. <br></br>
                    <strong>Доп</strong>.: ягодная начинка
                    (вишня/малина/клубника)
                  </p>
                </li>
              </ol>

              <div className="page-builder-extra-info-container">
                <p className="page-builder-extra-info-text">
                  Все торты готовятся из натуральных ингредиентов. Возможны
                  адаптации под ваш вкус!
                </p>
                <p className="page-builder-extra-info-text">
                  <strong>Минимальный вес заказа</strong>: 2 кг <br></br>{" "}
                  <strong>Декор</strong>: стоимость рассчитывается индивидуально
                  (ягоды, шоколадные фигурки, топперы и др.)
                </p>
              </div>

              <div className="page-builder-bottom-info-container">
                <ul className="page-builder-bottom-info-list">
                  <li className="page-builder-bottom-info-list-item">
                    <strong>Напишите нам, чтобы</strong>:
                  </li>
                  <li className="page-builder-bottom-info-list-item">
                    Выбрать вкус и размер
                  </li>
                  <li className="page-builder-bottom-info-list-item">
                    Обсудить дизайн
                  </li>
                  <li className="page-builder-bottom-info-list-item">
                    Уточнить детали доставки
                  </li>
                </ul>
                <div>
                  <h3 className="page-builder-price">
                    Стоимость <br></br> от 2200 руб./кг
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="page-builder-images-card">
            <img className="page-builder-images-item" src={cake} alt="cake" />
            <img className="page-builder-images-item" src={cake} alt="cake" />
            <img className="page-builder-images-item" src={cake} alt="cake" />
            <img className="page-builder-images-item" src={cake} alt="cake" />
            <img className="page-builder-images-item" src={cake} alt="cake" />
            <img className="page-builder-images-item" src={cake} alt="cake" />
          </div>
        </div>
      </div>

      <div className="page-builder-footer">
        <div className="page-builder-footer-tittle-container">
          <h3 className="page-builder-footer-tittle-text">
            Готовы оформить заказ?
          </h3>
          <button className="order-button">
            <a href="https://t.me/alexeevaruslana" target="_blank">
              Написать{" "}
            </a>
          </button>
        </div>
        <img className="page-builder-footer-logo" src={logo} alt="logo" />
        <div className="page-builder-footer-social">
          <a href="https://www.instagram.com/ruslanacakes/" target="blank">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://vk.com/ruslanacakes" target="blank">
            <img src={VK} alt="VK" />
          </a>
          <a href="https://t.me/ruslanacakes" target="blank">
            <img src={Telegramm} alt="Telegram" />
          </a>
        </div>
      </div>
    </div>
  );
};
