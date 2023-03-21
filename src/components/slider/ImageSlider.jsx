import React from 'react';
import { useState } from 'react';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgoundPostion: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: 'all 0.5s ease-in',
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '2.7rem',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    fontWeight: '800',
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '2.7rem',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    fontWeight: '800',
  };

  const dotContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    transform: 'translate(0, -100%)',
    left: '50%',
  };
  const dotStyles = {
    margib: '0 3px',
    cursor: 'pointer',
    fontSize: '2.5rem',
  };
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrev}>
        {' '}
        ◀{' '}
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        {' '}
        ▶{' '}
      </div>
      <div style={slideStyles}></div>
      <div style={dotContainerStyles}>
        {slides.map((slide, index) => {
          return (
            <div key={index} style={dotStyles} onClick={() => goToSlide(index)}>
              •
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
