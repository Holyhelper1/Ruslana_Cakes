import { SocialLinks } from "../social_links/social_links";

export const Location = () => {
  return (
    <div className="location-container" id="location">
      <h3 className="location-title">Как нас найти</h3>
      <div className="location-map-container">
        <div className="location-info-container">
          <div className="location-info-contacts">
            <div>
              <h4 className="location-info-title">Контакты</h4>
              <ul className="location-info-contacts-list">
                <li className="location-info-contacts-phone">
                  <a href="tel:+79092841484">📞 +7 (909) 284-14-84</a>
                </li>
                <li className="location-info-contacts-phone">
                  {" "}
                  <a href="https://t.me/ruslanacakes" target="_blank">
                    📧 https://t.me/ruslanacakes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="location-info-title">Адрес</h4>
              <ul className="location-info-contacts-list">
                <li className="location-info-contacts-phone">
                  <a href="https://yandex.ru/maps/-/CHF8MS8v" target="_blank">
                    Нижний Новгород, улица Академика Сахарова, 117
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="location-info-title">Важная информация!</h4>
            <ul>
              <li>
                {" "}
                🍰 Я домашний кондитер, испеку для вас на заказ торт, капкейки,
                бенто.
              </li>
              <li>🛑 С мастикой не работаю!</li>
              <li> ❗ Работаю исключительно по предоплате 50%</li>
            </ul>
          </div>
        </div>
        <div className="location-map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7af66d2a8d5f484f1c3620262fab411684d5663752ff04adff718f50dfbb1f4&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <div className="location-links-container">
        <h3 className="location-title">Мы в социальных сетях</h3>
        <SocialLinks />
      </div>
    </div>
  );
};
