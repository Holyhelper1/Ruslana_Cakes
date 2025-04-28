import { Link } from "react-router";
import { ICake } from "../../../Slices/firebase-api-slice";
import Cake2 from "../../../assets/Cakes/Cake2.jpg";

type LinkTypeKeys = keyof typeof LinkType;

enum LinkType {
  "Торты" = "cakes",
  "Бенто-торты" = "bento",
  "Капкейки" = "cupcakes",
  "Меренговый рулет" = "meringue",
   "Бенто+Капкейки" = "bento_plus_cupcakes",
}
export const CakeCard = ({ cake, typeOfDessert  }: { cake: ICake, typeOfDessert: LinkTypeKeys },  ) => {
  const { Image, Description, Price } = cake || {};

  console.log("typeOfDessert - ", typeOfDessert);
  

  return (
    <div className="cake-card-container">
      <img src={Image ? Image : Cake2} alt="Sweets" />
      <div className="cake-card-info">
        <h3 className="cake-card-title">{typeOfDessert}</h3>
        <p className="cake-card-description">{Description}</p>
        <p className="cake-card-price">
          {`от ${Price} руб./кг`}
        </p>
      <div className="cake-card-buttons">
        <Link to={`/${LinkType[typeOfDessert]}`}>
        <button className="more-button">Подробнее</button>
        </Link>
        <button className="order-button"><a href="https://t.me/alexeevaruslana" target="_blank">Заказать</a></button>
      </div>
      </div>
    </div>
  );
};
