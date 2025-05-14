import { PageBuilder } from "../Components/Page-builder";
import cake1 from "/src/assets/Cakes/cards/cake1.png";
import cake2 from "/src/assets/Cakes/cards/cake2.png";
import cake3 from "/src/assets/Cakes/cards/cake3.png";
import cake4 from "/src/assets/Cakes/cards/cake4.png";
import cake5 from "/src/assets/Cakes/cards/cake5.png";
import cake6 from "/src/assets/Cakes/cards/cake6.png";

export interface IFlavors {
  id: number;
  name: string;
  description: string;
}

export interface ICakeImage {
  id: number;
  Image: string;
  width: string;
  height: string;
}

const flavors: IFlavors[] = [
  {
    id: 1,
    name: "МОЛОЧНАЯ ДЕВОЧКА",
    description:
      "Нежные коржи на сгущённом молоке + сливочный крем с  маскарпоне.  Доп.: ягодная начинка (вишня/малина/клубника)",
  },
  {
    id: 2,
    name: "ЧЕРНЫЙ ЛЕС",
    description:
      "Шоколадные коржи + шоколадный крем + прослойка шоколадного чизкейка с вишнёвым конфи.",
  },
  {
    id: 3,
    name: "СНИКЕРС",
    description:
      "Шоколадные коржи + карамельный крем + ванильный чизкейк + арахисово-карамельная начинка.",
  },
  {
    id: 4,
    name: "БАНАНОВЫЙ ТОРТ",
    description:
      "Коричневый бисквит на тростниковом сахаре + ванильный крем + хрустящий кокосовый слой + бананы с карамелью.",
  },
  {
    id: 5,
    name: "МЕДОВИК",
    description:
      "Классические медовые коржи + сметанный крем + карамельная начинка.",
  },
  {
    id: 6,
    name: "МОРКОВНЫЙ",
    description:
      "Морковный бисквит + ванильный крем с апельсиновой цедрой + мягкая карамель. ",
  },
  {
    id: 7,
    name: "КРАСНЫЙ БАРХАТ",
    description:
      "Бархатные коржи с шоколадным послевкусием + малиновая начинка + крем «cheese».",
  },
];

const cakeImages: ICakeImage[] = [
  { id: 1, Image: cake1, width: "266", height: "346" },
  { id: 2, Image: cake2, width: "266", height: "346" },
  { id: 3, Image: cake3, width: "266", height: "346" },
  { id: 4, Image: cake4, width: "266", height: "346" },
  { id: 5, Image: cake5, width: "266", height: "346" },
  { id: 6, Image: cake6, width: "266", height: "346" },
];

export const Cakes = () => {
  const tittle = "Торты";
  const price = "от 2200 руб./кг";
  const secondTittle = "Наши вкусы";

  const extraInfo = (
    <div className="page-builder-extra-info-container">
      <p className="page-builder-extra-info-text">
        Все торты готовятся из натуральных ингредиентов. Возможны адаптации под
        ваш вкус!
      </p>
      <p className="page-builder-extra-info-text">
        <strong>Минимальный вес заказа</strong>: 2 кг <br></br>{" "}
        <strong>Декор</strong>: стоимость рассчитывается индивидуально (ягоды,
        шоколадные фигурки, топперы и др.)
      </p>
    </div>
  );

  return (
    <div className="cakes-container">
      <PageBuilder
        tittle={tittle}
        secondTittle={secondTittle}
        price={price}
        flavors={flavors}
        extraInfo={extraInfo}
        cakeImages={cakeImages}
      />
    </div>
  );
};
