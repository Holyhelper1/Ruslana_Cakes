import { feedbackImages } from "./feedback-db"
import feedback1 from "/src/assets/Feedback/feedback1.png";
import feedback2 from "/src/assets/Feedback/feedback2.png";
import feedback3 from "/src/assets/Feedback/feedback3.png";
import feedback4 from "/src/assets/Feedback/feedback4.png";
import feedback5 from "/src/assets/Feedback/feedback5.png";
import feedback6 from "/src/assets/Feedback/feedback6.png";
import feedback7 from "/src/assets/Feedback/feedback7.png";
import feedback8 from "/src/assets/Feedback/feedback8.png";
import feedback9 from "/src/assets/Feedback/feedback9.png";
import feedback10 from "/src/assets/Feedback/feedback10.png";
import { Slider } from "../Pages/Components/Slider";

export const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2 className="feedback-container-title">Отзывы</h2>
      <div className="feedback-container-content">
        <div className="feedback-container-content-item">
          <img src={feedback1} alt="Отзыв" />
          <img src={feedback2} alt="Отзыв" />
          <img src={feedback3} alt="Отзыв" />
        </div>
        <div className="feedback-container-content-item">
          <img src={feedback4} alt="Отзыв" />
          <img src={feedback5} alt="Отзыв" />
          <img src={feedback6} alt="Отзыв" />
        </div>
        <div className="feedback-container-content-item">
          <img src={feedback7} alt="Отзыв" />
          <img src={feedback8} alt="Отзыв" />
          <img src={feedback9} alt="Отзыв" />
        </div>
        <div className="feedback-container-content-item">
          <img src={feedback10} alt="Отзыв" />
        </div>
        <Slider images={feedbackImages} />
      </div>
    </div>
  );
};
