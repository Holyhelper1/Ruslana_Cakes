import { useState } from "react";
import { ICakeImage } from "../Cakes/Cakes";
import { IFeedbackImages } from "../../Feedback/feedback-db";

export const Slider = ({ images }: { images: ICakeImage[] | IFeedbackImages[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;

    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="slider-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-image">
        <button onClick={prevSlide} className="slider-button"></button>
        <img
          src={images[currentSlide].Image}
          alt={`Cake ${currentSlide + 1}`}
        />
        <button onClick={nextSlide} className="slider-button"></button>
      </div>
      <div className="slider-controls">
        {/* <button onClick={prevSlide} className="slider-button">◀</button> */}
        <div className="slider-indicators">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`slider-dot ${
                currentSlide === index ? "activeDot" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        {/* <button onClick={nextSlide} className="slider-button">▶</button> */}
      </div>
    </div>
  );
};
