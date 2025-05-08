// import {
//   ICake,
//   IFirestoreDocument,
//   useFetchBentoQuery,
// } from "../../../Slices/firebase-api-slice";
// import { useEffect, useState } from "react";
import { ICakeImage, IFlavors } from "../Cakes/Cakes";
import { PageBuilder } from "../Components/Page-builder";
import bento1 from "/src/assets/Bento/cards/bento1.png";
import bento2 from "/src/assets/Bento/cards/bento2.png";
import bento3 from "/src/assets/Bento/cards/bento3.png";
import bento4 from "/src/assets/Bento/cards/bento4.png";
import bento5 from "/src/assets/Bento/cards/bento5.png";
import bento6 from "/src/assets/Bento/cards/bento6.png";
import bento7 from "/src/assets/Bento/cards/bento7.png";
import bento8 from "/src/assets/Bento/cards/bento8.png";

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

export const bentoCakeImages: ICakeImage[] = [
  { id: 1, Image: bento1, width: "268", height: "208" },
  { id: 2, Image: bento2, width: "268", height: "208" },
  { id: 3, Image: bento3, width: "268", height: "208" },
  { id: 4, Image: bento4, width: "268", height: "208" },
  { id: 5, Image: bento5, width: "268", height: "208" },
  { id: 6, Image: bento6, width: "268", height: "208" },
  { id: 7, Image: bento7, width: "268", height: "208" },
  { id: 8, Image: bento8, width: "268", height: "208" },
];
export const Bento = () => {
  // const [currentData, setCurrentData] = useState<ICake[]>([]);

  const tittle = "Бенто-торты";
  const secondTittle = "Наши вкусы";
  const price = "2000 руб./кг";

  // const {
  //   data: bento,
  //   // isFetching: bentoFetching,
  //   // error: bentoError,
  // } = useFetchBentoQuery();

  // useEffect(() => {

  //   let documents: IFirestoreDocument[] = [];
  //   if (bento !== null) {
  //     documents = Array.isArray(bento?.documents) ? bento.documents : [];

  //     const updatedDesserts = documents.map((doc) => ({
  //       id: doc.name,
  //       Image: doc.fields.Image.stringValue,
  //       Description: doc.fields.Description.stringValue,
  //       Price: doc.fields.Price.integerValue,
  //     }));
  //     setCurrentData(updatedDesserts);
  //   }

  // }, [bento]);

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
        Покрытие любого цвета
      </li>
      <li className="page-builder-bottom-info-list-item">
        Надпись или рисунок
      </li>
      <li className="page-builder-bottom-info-list-item">
        Подарочная упаковка: коробка с лентой, ложечка, открытка
      </li>
      <li className="page-builder-bottom-info-list-item">
        Фирменный пакет с ручками
      </li>
    </ul>
  );

  return (
    <div className="bento-container">
      <PageBuilder
        tittle={tittle}
        secondTittle={secondTittle}
        price={price}
        flavors={flavors}
        details={details}
        included={included}
        cakeImages={bentoCakeImages}
      />
    </div>
  );
};
