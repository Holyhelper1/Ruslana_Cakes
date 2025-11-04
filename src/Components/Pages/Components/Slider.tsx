import React, { useRef, useState, useEffect } from "react";

type Img = { id: string | number; Image: string };

export const Slider = ({ images }: { images: Img[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0); // px
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (currentSlide >= images.length) {
      setCurrentSlide(Math.max(0, images.length - 1));
    }
  }, [images.length, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (dragStartX === null) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const threshold = 50;
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }
    setDragStartX(null);
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragStartX(e.clientX);
    setIsDragging(true);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    setDragOffset(e.clientX - dragStartX);
  };
  const handleMouseUp = () => {
    handleTouchEnd();
  };
  const handleMouseLeave = () => {
    if (isDragging) handleTouchEnd();
  };

  const trackStyle: React.CSSProperties = {
    transform: `translateX(calc(${-currentSlide * 100}% + ${dragOffset}px))`,
    transition: isDragging
      ? "none"
      : "transform 320ms cubic-bezier(.22,.9,.3,1)",
  };

  return (
    <div
      className="slider-container"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-image">
        <button
          className="slider-button left"
          onClick={prevSlide}
          aria-label="Previous"
        ></button>

        <div className="slider-viewport">
          <div className="slider-track" style={trackStyle}>
            {images.map((img, idx) => (
              <div className="slide" key={img.id ?? idx}>
                <img
                  src={img.Image}
                  alt={`Slide ${idx + 1}`}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="slider-button right"
          onClick={nextSlide}
          aria-label="Next"
        ></button>
      </div>

      <div className="slider-controls">
        <div className="slider-indicators">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`slider-dot ${
                currentSlide === index ? "activeDot" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Перейти на слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
