import { MainFooter } from "../Main/Main-footer/Main-footer";

export const Location = () => {
  return (
    <>
      <div className="location-container" id="location">
        <div className="location-header"></div>
        <h3 className="location-title">Как нас найти</h3>
        <div className="location-map-container">
          <div className="location-info-container">
            <div className="location-info-contacts">
              <div>
                <h4 className="location-info-title">Контакты</h4>
                <ul className="location-info-contacts-list">
                  <li className="location-info-contacts-phone">
                    <a href="tel:+79092841484">
                      {" "}
                      <svg
                        width="21"
                        height="23"
                        viewBox="0 0 21 23"
                        fill="#412540"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.143235 5.47696C0.152413 2.96138 1.0753 1.68403 2.93204 0.812886C3.46628 0.561439 4.09622 0.483457 4.69258 0.413325C4.89023 0.389596 5.20379 0.586652 5.31978 0.772524C5.96515 1.80393 6.58161 2.85391 7.1765 3.91586C7.42323 4.35646 7.58458 4.8441 7.7944 5.30634C7.95248 5.6559 7.89929 5.9726 7.62454 6.21926C7.21515 6.58721 6.78179 6.92947 6.35425 7.27727C6.03882 7.53402 5.71694 7.78084 5.39826 8.03306C5.01678 8.33438 4.90714 8.72932 5.10915 9.15711C5.42356 9.82296 5.72661 10.5057 6.13565 11.1145C7.3823 12.9681 8.8684 14.616 10.6182 16.0106C11.0465 16.3516 11.522 16.64 12.0013 16.9059C12.4484 17.1545 12.8972 17.1177 13.273 16.7244C13.6839 16.2946 14.094 15.8629 14.5057 15.4331C14.6461 15.2859 14.7831 15.136 14.9326 14.998C15.5296 14.4469 15.7054 14.4072 16.3981 14.8327C17.6447 15.5996 18.8866 16.374 20.101 17.1899C20.9123 17.735 21.0515 18.4458 20.6206 19.3425C20.086 20.4546 19.1202 21.0798 18.0678 21.6098C16.0884 22.6063 14.1427 22.2717 12.2371 21.4207C8.53918 19.7699 5.72656 17.0629 3.38402 13.8288C2.06494 12.008 0.994081 10.0474 0.488119 7.83354C0.295503 6.99161 0.206161 6.3049 0.143235 5.47696Z"
                          fill="#412540"
                        />
                      </svg>{" "}
                      +7 (909) 284-14-84
                    </a>
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
      </div>
      <MainFooter />
    </>
  );
};
