import { PageBuilder } from "../Components/Page-builder";
import { IFlavors } from "../Cakes/Cakes";
import { bentoCakeImages } from "../Bento/Bento";
import { cupcakeCakeImages } from "../Cupcakes/Cupcakes";
import dot from "../../Elements/dot";
import donutDot from "../../Elements/donutDot";

const flavors: IFlavors[] = [
  {
    id: 3,
    name: "СНИКЕРС",
    description:
      "Шоколадные коржи + карамельный крем + ванильный чизкейк + арахисово-карамельная начинка.",
  },
  {
    id: 6,
    name: "МОРКОВНЫЙ",
    description:
      "Морковный бисквит + ванильный крем с апельсиновой цедрой + мягкая карамель. ",
  },
  {
    id: 1,
    name: "ВИШНЯ-ШОКОЛАД",
    description: "Шоколадные коржи + вишнёвая начинка + шоколадный крем ",
  },
  {
    id: 7,
    name: "КРАСНЫЙ БАРХАТ",
    description:
      "Бархатные коржи с шоколадным послевкусием + малиновая начинка + крем «cheese».",
  },
];

const extraFlavors: IFlavors[] = [
  {
    id: 1,
    name: "Бисквит:",
    description: "ванильный / шоколадный / миндальный",
  },
  {
    id: 2,
    name: "Начинка:",
    description:
      "домашняя карамель / фруктовое конфи (клубника, вишня, малина)",
  },
  {
    id: 3,
    name: "Декор:",
    description:
      "стандартный (посыпка) входит в стоимость, дополнительные украшения и свежие ягоды оплачиваются отдельно",
  },
];

export const BentoPlusCupcakes = () => {
  const title = "Набор “бенто + капкейки”";
  const secondTitle = "Бенто-торты";
  const cupcakesTitle = "Капкейки";
  const price = "";

  const bentoPlusImages = bentoCakeImages.concat(cupcakeCakeImages);

  const details: React.ReactNode = (
    <ul className="page-builder-bottom-info-list">
      <li className="page-builder-bottom-info-list-item">
        <strong>Детали:</strong>:
      </li>
      <li className="page-builder-bottom-info-list-item">Размер: ~ 13 см</li>
      <li className="page-builder-bottom-info-list-item">Вес: ~ 600-700 г</li>
    </ul>
  );
  const included: React.ReactNode = (
    <ul className="page-builder-bottom-info-list">
      <li className="page-builder-bottom-info-list-item">
        <strong>Включено в стоимость:</strong>:
      </li>
      <li className="page-builder-bottom-info-list-item">
        {dot} Покрытие любого цвета
      </li>
      <li className="page-builder-bottom-info-list-item">
        {dot} Надпись или рисунок
      </li>
      <li className="page-builder-bottom-info-list-item">
        {dot} Подарочная упаковка: коробка с лентой, ложечка, открытка
      </li>
      <li className="page-builder-bottom-info-list-item">
        {dot} Фирменный пакет с ручками
      </li>
    </ul>
  );

  const priceDetails: React.ReactNode = (
    <ul className="page-builder-bottom-info-list-detail">
      <li className="page-builder-bottom-info-list-detail-item">
        {donutDot} 2 капкейка + бенто-торт 2500 руб
      </li>
      <li className="page-builder-bottom-info-list-detail-item">
        {donutDot} 5 капкейков + бенто-торт 3200 руб
      </li>
    </ul>
  );

  const secondFlavors = (
    <>
      <h2 className="page-builder-info-card-title">{cupcakesTitle}</h2>
      <ol className="page-builder-info-card-list">
        {extraFlavors.length > 0 &&
          extraFlavors.map((item) => (
            <li key={item.id} className="page-builder-info-card-list-item">
              <h3 className="page-builder-info-card-list-item-title">
                {item.name}
              </h3>
              <p className="page-builder-info-card-list-item-description">
                {item.description}
              </p>
            </li>
          ))}
      </ol>
    </>
  );

  return (
    <div className="bento-plus-cupcakes-container">
      <PageBuilder
        secondTittle={secondTitle}
        price={price}
        tittle={title}
        flavors={flavors}
        details={details}
        included={included}
        priceDetails={priceDetails}
        secondFlavors={secondFlavors}
        cakeImages={bentoPlusImages}
      />
    </div>
  );
};
