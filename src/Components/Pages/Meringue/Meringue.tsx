import { PageBuilder } from "../Components/Page-builder";
import { ICakeImage } from "../Cakes/Cakes";
import meringue1 from "/src/assets/Meringue/cards/meringue1.png";
import meringue2 from "/src/assets/Meringue/cards/meringue2.png";


const cakeImages: ICakeImage[] = [
  { id: 1, Image: meringue1, width: "268", height: "355" },
  { id: 2, Image: meringue2, width: "268", height: "355" },
];

export const Meringue = () => {
  const tittle = "Меренговый рулет";
  const secondTittle = "классический";
  const price = "2000 руб.";

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
        tittle={tittle}
        secondTittle={secondTittle}
        price={price}
        details={details}
        cakeImages={cakeImages}
      />
    </div>
  );
};
