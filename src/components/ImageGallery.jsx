import classes from '../styles/ImageGallery.module.css';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import img1 from '../assets/project-images/Residences/Alankaram/1.jpg';
import img2 from '../assets/project-images/Residences/Patna_Residences/1.jpeg';
import img3 from '../assets/project-images/Residences/Ranchi_Colonial_Bungalow/Front.png';
import img4 from '../assets/project-images/Residences/Man_Viz/Image1.png';
import img5 from '../assets/project-images/Residences/Project_62/1.jpg';
import img6 from '../assets/project-images/Residences/Ruth/Image1.png';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Set your images to the images state
    setImages([
      { url: img1, link: '/projects/residences/alankaram', title: 'Alankaram' },
      {
        url: img2,
        link: '/projects/residences/patna-residence',
        title: 'Patna Residence',
      },
      {
        url: img3,
        link: '/projects/residences/ranchi-bungalow',
        title: 'Colinial Bungalow',
      },
      { url: img4, link: '/projects/residences/man-viz', title: 'Man Viz' },
      { url: img5, link: '/projects/residences/project-62', title: 'Jorhbagh' },
      { url: img6, link: '/projects/residences/ruth', title: 'Ruth' },
    ]);
  }, []);

  const imageClickHandler = (link) => {
    navigate(link);
  };

  return (
    <div className={classes.image__grid}>
      {images.map((img, index) => (
        <div
          className={classes.image__grid__item}
          key={index}
          onClick={() => imageClickHandler(img.link)}
        >
          <img key={index} src={img.url} alt="Gallery Image" className="pic" />
          <div className={classes.image__text}>
            <div className={classes.image__text__name}>{img.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
