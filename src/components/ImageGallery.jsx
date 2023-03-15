import '../styles/ImageGallery.css';

import { useState, useEffect } from 'react';

import Img1 from '../assets/project-images/img1.gif';
import Img2 from '../assets/project-images/img2.jpg';
import Img3 from '../assets/project-images/img3.jpg';
import Img4 from '../assets/project-images/img4.jpg';
import Img5 from '../assets/project-images/img5.jpg';
import Img6 from '../assets/project-images/img6.jpg';
import Img7 from '../assets/project-images/img7.jpg';
import Img8 from '../assets/project-images/img8.jpg';
import Img9 from '../assets/project-images/img9.jpg';
import Img10 from '../assets/project-images/img10.jpg';
import Img11 from '../assets/project-images/img11.jpg';
import Img12 from '../assets/project-images/img12.jpg';
import Img13 from '../assets/project-images/img13.jpg';
import Img14 from '../assets/project-images/img14.jpg';
import Img15 from '../assets/project-images/img15.jpg';
import Img16 from '../assets/project-images/img16.jpg';

import Img18 from '../assets/project-images/img18.jpg';
import Img19 from '../assets/project-images/img19.jpg';
import Img20 from '../assets/project-images/img20.jpg';
import Img21 from '../assets/project-images/img21.jpg';
import Img22 from '../assets/project-images/img22.jpg';
import Img23 from '../assets/project-images/img23.jpg';
import Img24 from '../assets/project-images/img24.jpg';
import Img25 from '../assets/project-images/img25.jpg';
import Img26 from '../assets/project-images/img26.jpg';

import Img28 from '../assets/project-images/img28.jpg';
import Img29 from '../assets/project-images/img29.jpg';
import Img30 from '../assets/project-images/img30.jpg';
import Img31 from '../assets/project-images/img31.jpg';
import Img32 from '../assets/project-images/img32.jpg';

const ImageGallery = () => {
  //   const images = [
  //     {
  //       id: 1,
  //       imgSrc: Img1,
  //     },
  //     {
  //       id: 2,
  //       imgSrc: Img2,
  //     },
  //     {
  //       id: 3,
  //       imgSrc: Img3,
  //     },
  //     {
  //       id: 4,
  //       imgSrc: Img4,
  //     },
  //     {
  //       id: 5,
  //       imgSrc: Img5,
  //     },
  //     {
  //       id: 6,
  //       imgSrc: Img6,
  //     },
  //     {
  //       id: 7,
  //       imgSrc: Img7,
  //     },
  //     {
  //       id: 8,
  //       imgSrc: Img8,
  //     },
  //     {
  //       id: 9,
  //       imgSrc: Img9,
  //     },
  //     {
  //       id: 10,
  //       imgSrc: Img10,
  //     },
  //   ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Set your images to the images state
    setImages([
      { url: Img1, title: 'Some title', location: 'Location' },
      { url: Img2, title: 'Some title', location: 'Location' },
      { url: Img3, title: 'Some title', location: 'Location' },
      { url: Img4, title: 'Some title', location: 'Location' },
      { url: Img5, title: 'Some title', location: 'Location' },
      { url: Img6, title: 'Some title', location: 'Location' },
      { url: Img7, title: 'Some title', location: 'Location' },
      { url: Img8, title: 'Some title', location: 'Location' },
      { url: Img9, title: 'Some title', location: 'Location' },
      { url: Img10, title: 'Some title', location: 'Location' },
      { url: Img11, title: 'Some title', location: 'Location' },
      { url: Img12, title: 'Some title', location: 'Location' },
      { url: Img13, title: 'Some title', location: 'Location' },
      { url: Img14, title: 'Some title', location: 'Location' },
      { url: Img15, title: 'Some title', location: 'Location' },
      { url: Img16, title: 'Some title', location: 'Location' },

      { url: Img18, title: 'Some title', location: 'Location' },
      { url: Img19, title: 'Some title', location: 'Location' },
      { url: Img20, title: 'Some title', location: 'Location' },
      { url: Img21, title: 'Some title', location: 'Location' },
      { url: Img22, title: 'Some title', location: 'Location' },
      { url: Img23, title: 'Some title', location: 'Location' },
      { url: Img24, title: 'Some title', location: 'Location' },
      { url: Img25, title: 'Some title', location: 'Location' },
      { url: Img26, title: 'Some title', location: 'Location' },

      { url: Img28, title: 'Some title', location: 'Location' },
      { url: Img29, title: 'Some title', location: 'Location' },
      { url: Img30, title: 'Some title', location: 'Location', zoom: 2.2 },
      { url: Img31, title: 'Some title', location: 'Location' },
      { url: Img32, title: 'Some title', location: 'Location' },
    ]);
  }, []);

  return (
    <div className="image-thumbnails">
      {images.map((img, index) => (
        <div className="image-grid-item" key={index}>
          <img
            key={index}
            src={img.url}
            alt="Gallery Image"
            className="pic"
            style={{ transform: `scale(${img.zoom})` }}
          />
          <div className="image-text">
            <div className="project-name">{img.title}</div>
            <div className="project-location">Location</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
