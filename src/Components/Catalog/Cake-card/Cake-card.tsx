import { ICake } from "../../../Slices/firebase-api-slice";
import Cake2 from "../../../assets/Cakes/Cake2.jpg";

export const CakeCard = ({ cake }: { cake: ICake }) => {
  const { Image, Description, Price } = cake || {};

  return (
    <div className="cake-card-container">
      <img src={Image ? Image : Cake2} alt="Sweets" />
      <div className="cake-card-info">
        <p className="cake-card-description">{Description}</p>
        <p className="cake-card-price">
          <strong>{`От ${Price} руб.`}</strong>
        </p>
      </div>
    </div>
  );
};
