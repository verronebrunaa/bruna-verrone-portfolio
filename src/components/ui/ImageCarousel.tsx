"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  showControls?: boolean;
  autoPlay?: boolean;
  interval?: number; 
}

export default function ImageCarousel({
  images,
  showControls = true,
  autoPlay = false,
  interval = 3000,
}: Readonly<ImageCarouselProps>) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length, nextSlide]);

  if (images.length === 0) {
    return <div className="project-image-container">No images available</div>;
  }

  if (images.length === 1) {
    return (
      <div className="project-image-container">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="project-image"
          priority
        />
      </div>
    );
  }

  return (
    <div className="project-carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-item">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="project-image"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button className="carousel-control prev" onClick={prevSlide}>
            <GrCaretPrevious />
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            <GrCaretNext />
          </button>
        </>
      )}

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}