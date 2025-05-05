// import { useEffect, useState } from "react";
// import {
//   ICake,
//   IFirestoreDocument,
//   useFetchMeringueQuery,
// } from "../../../Slices/firebase-api-slice";
import { PageBuilder } from "../Components/Page-builder";
import { ICakeImage } from "../Cakes/Cakes";
import meringue1 from "/src/assets/Meringue/cards/meringue1.png";
import meringue2 from "/src/assets/Meringue/cards/meringue2.png";


const cakeImages: ICakeImage[] = [
  { id: 1, Image: meringue1, width: "268", height: "355" },
  { id: 2, Image: meringue2, width: "268", height: "355" },
];

export const Meringue = () => {
  // const [currentData, setCurrentData] = useState<ICake[]>([]);
  const tittle = "Меренговый рулет";
  const secondTittle = "классический";
  const price = "2000 руб./кг";

  // const { data: meringue } = useFetchMeringueQuery();

  // useEffect(() => {
  //   let documents: IFirestoreDocument[] = [];
  //   if (meringue !== null) {
  //     documents = Array.isArray(meringue?.documents) ? meringue.documents : [];

  //     const updatedDesserts = documents.map((doc) => ({
  //       id: doc.name,
  //       Image: doc.fields.Image.stringValue,
  //       Description: doc.fields.Description.stringValue,
  //       Price: doc.fields.Price.integerValue,
  //     }));
  //     setCurrentData(updatedDesserts);
  //   }
  // }, [meringue]);

  const details: React.ReactNode = (
    <ul className="page-builder-bottom-info-list">
      <li className="page-builder-bottom-info-list-item">
        <strong>Детали:</strong>:
      </li>
      <li className="page-builder-bottom-info-list-item">Вес: ~ 1 кг</li>
      <li className="page-builder-bottom-info-list-item">
        Декор (крем/посыпка) входит в стоимость
      </li>
    </ul>
  );

  return (
    <div className="meringue-container">
      <PageBuilder
        // data={currentData}
        tittle={tittle}
        secondTittle={secondTittle}
        price={price}
        details={details}
        cakeImages={cakeImages}
      />
    </div>
  );
};
