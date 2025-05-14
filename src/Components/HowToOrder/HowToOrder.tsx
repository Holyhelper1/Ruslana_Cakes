import cupcakesIcons1 from "../../assets/how-order-icon1.svg";
import cupcakesIcons2 from "../../assets/how-order-icon2.svg";
import dot from "../Elements/dot";
export const HowToOrder = () => {
  return (
    <div className="how-to-order-container">
      <h2 className="how-to-order-container-tittle">Как оформить заказ</h2>

      <div className="how-to-order-info-wrapper">
        <div className="how-to-order-info-left-side">
          <div className="how-to-order-info-left-side-container">
            <div className="how-to-order-info-top-container">
              <div className="how-to-order-info-step-1 mini-container">
                <h4 className="how-to-order-info-step-title">Выбор начинки</h4>
                <p className="how-to-order-info-step-text">
                  Все торты собираются индивидуально: вы можете выбрать любую
                  комбинацию из списка доступных основ и начинок в описании
                  каждого десерта
                </p>
              </div>
              <div className="how-to-order-info-step-2 mini-container">
                <h4 className="how-to-order-info-step-title">
                  Как выбрать дизайн торта:
                </h4>
                <ul className="how-to-order-info-step-list">
                  <li className="how-to-order-info-step-list-item">
                    {dot} Прислать фото торта, который вам по душе
                  </li>
                  <li className="how-to-order-info-step-list-item">
                    {dot} Опираться на мои работы
                  </li>
                  <li className="how-to-order-info-step-list-item">
                    {dot} Обсудить свою идею со мной
                  </li>
                </ul>
              </div>
            </div>

            <div className="how-to-order-info-bottom-container">
              <div className="how-to-order-info-step-3 mini-container-fill">
                <h4 className="how-to-order-info-step-title">Способ связи:</h4>
                <p className="how-to-order-info-step-text">
                  Напишите мне в любом мессенджере по телефону:
                </p>
                <div>
                  <a href="https://t.me/alexeevaruslana" target="_blank">
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
                    </svg>
                    &nbsp; +7-909-284-14-84
                  </a>
                </div>
              </div>

              <div className="how-to-order-info-step-4 mini-container-fill">
                <h4 className="how-to-order-info-step-title">Сроки заказа:</h4>
                <ul className="how-to-order-info-step-list">
                  <li className="how-to-order-info-step-list-item">
                    {dot} От 3-5 дней до нужной даты
                  </li>
                  <li className="how-to-order-info-step-list-item">
                    {dot} Срочный заказ (1-2 дня) – <br></br> +20% к стоимости
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img src={cupcakesIcons1} alt="cupcakes" />
        </div>
        <div className="how-to-order-info-right-side">
          <img src={cupcakesIcons2} alt="cupcakes" />
          <div className="how-to-order-info-right-side-info-container-step-5">
            <div>
              <h4>Доставка</h4>
              <p>
                {" "}
                {dot} Самовывоз – г. Н. Новгород, ул. Академика Сахарова, 117
                (ЖК Цветы”)
              </p>
              <p>
                {" "}
                {dot} Доставка через сервис Яндекс-курьер, оплачивается
                заказчиком
              </p>
            </div>
            <div>
              <h4>Время</h4>
              <p>
                {" "}
                Время самовывоза или доставки обговаривается за день до
                получения заказа
              </p>
            </div>
            <div>
              <h4>Важно:</h4>
              <p>
                {" "}
                {dot} Торты – это ручная работа, поэтому точные копии с фото из
                интернета невозможны.{" "}
              </p>
              <p> {dot} Заказ подтверждается после предоплаты (50%)</p>
              <p>
                {" "}
                {dot} При отмене заказа за 3 дня или менее предоплата не
                возвращается
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
