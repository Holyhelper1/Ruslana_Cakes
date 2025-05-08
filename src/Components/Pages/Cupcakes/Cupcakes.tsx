import { PageBuilder } from "../Components/Page-builder";
import { ICakeImage, IFlavors } from "../Cakes/Cakes";
import cupcake1 from "/src/assets/Cupcakes/cards/cupcake1.png";
import cupcake2 from "/src/assets/Cupcakes/cards/cupcake2.png";
import cupcake3 from "/src/assets/Cupcakes/cards/cupcake3.png";
import cupcake4 from "/src/assets/Cupcakes/cards/cupcake4.png";
import cupcake5 from "/src/assets/Cupcakes/cards/cupcake5.png";
import cupcake6 from "/src/assets/Cupcakes/cards/cupcake6.png";

const flavors: IFlavors[] = [
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

export const cupcakeCakeImages: ICakeImage[] = [
  { id: 11, Image: cupcake1, width: "268", height: "192" },
  { id: 12, Image: cupcake2, width: "268", height: "192" },
  { id: 13, Image: cupcake3, width: "268", height: "192" },
  { id: 14, Image: cupcake4, width: "268", height: "192" },
  { id: 15, Image: cupcake5, width: "268", height: "192" },
  { id: 16, Image: cupcake6, width: "268", height: "192" },
];

export const Cupcakes = () => {
  const tittle = "Капкейки";
  const secondTittle = "Наши вкусы";
  const price = "";

  const priceDetails: React.ReactNode = (
    <ul className="page-builder-bottom-info-list-detail">
      <li className="page-builder-bottom-info-list-detail-item">
        6 шт - &nbsp; 1500 руб
      </li>
      <li className="page-builder-bottom-info-list-detail-item">
        9 шт - &nbsp; 2100 руб
      </li>
      <li className="page-builder-bottom-info-list-detail-item">
        12 шт - 2900 руб
      </li>
    </ul>
  );

  return (
    <div className="cupcakes-container">
      <PageBuilder
        tittle={tittle}
        secondTittle={secondTittle}
        price={price}
        flavors={flavors}
        priceDetails={priceDetails}
        cakeImages={cupcakeCakeImages}
      />
    </div>
  );
};
