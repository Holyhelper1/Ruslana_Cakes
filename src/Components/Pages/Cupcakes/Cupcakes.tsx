// import { useEffect, useState } from "react";
// import {
//   ICake,
//   IFirestoreDocument,
//   useFetchCupcakesQuery,
// } from "../../../Slices/firebase-api-slice";
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
  { id: 1, Image: cupcake1, width: "268", height: "192" },
  { id: 2, Image: cupcake2, width: "268", height: "192" },
  { id: 3, Image: cupcake3, width: "268", height: "192" },
  { id: 4, Image: cupcake4, width: "268", height: "192" },
  { id: 5, Image: cupcake5, width: "268", height: "192" },
  { id: 6, Image: cupcake6, width: "268", height: "192" },
];

export const Cupcakes = () => {
  // const [currentData, setCurrentData] = useState<ICake[]>([]);

  const tittle = "Капкейки";
  const secondTittle = "Наши вкусы";
  const price = "";

  // const { data: cupcakes } = useFetchCupcakesQuery();

  // useEffect(() => {
  //   let documents: IFirestoreDocument[] = [];
  //   if (cupcakes !== null) {
  //     documents = Array.isArray(cupcakes?.documents) ? cupcakes.documents : [];

  //     const updatedDesserts = documents.map((doc) => ({
  //       id: doc.name,
  //       Image: doc.fields.Image.stringValue,
  //       Description: doc.fields.Description.stringValue,
  //       Price: doc.fields.Price.integerValue,
  //     }));
  //     setCurrentData(updatedDesserts);
  //   }
  // }, [cupcakes]);

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
        // data={currentData}
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
