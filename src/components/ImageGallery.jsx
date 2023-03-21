import classes from '../styles/ImageGallery.module.css';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Img1 from '../assets/project-images/Hotels/Lepakshi/img1.jpg';
import Img2 from '../assets/project-images/Hotels/Lepakshi/img2.jpg';
import Img3 from '../assets/project-images/Hotels/Lepakshi/img3.png';
import Img4 from '../assets/project-images/Hotels/Lepakshi/img4.png';
import Img5 from '../assets/project-images/Hotels/Lepakshi/img5.png';
import Img6 from '../assets/project-images/Hotels/Lepakshi/img6.jpg';
import Img7 from '../assets/project-images/Hotels/Krishna_Palace/Image2_000.png';
import Img8 from '../assets/project-images/Hotels/Krishna_Palace/Image3_000.png';
import Img9 from '../assets/project-images/Hotels/Krishna_Palace/Image4_000.png';
import Img10 from '../assets/project-images/Hotels/Krishna_Palace/Image5_000.png';
import Img11 from '../assets/project-images/Hotels/Krishna_Palace/Image6_000.png';
import Img12 from '../assets/project-images/Hotels/Rangbhoomi/Image1.jpg';
import Img13 from '../assets/project-images/Hotels/Rangbhoomi/Image5_000.jpg';
import Img14 from '../assets/project-images/Hotels/Rangbhoomi/Image8.jpg';
import Img15 from '../assets/project-images/Hotels/Rangbhoomi/Image11.jpg';
import Img16 from '../assets/project-images/Hotels/Rangbhoomi/Image5.jpg';
import Img17 from '../assets/project-images/Hotels/NOM/NOM_1.jpg';
import Img18 from '../assets/project-images/Hotels/NOM/NOM_2.jpg';
import Img19 from '../assets/project-images/Hotels/NOM/NOM_3.jpg';
import Img20 from '../assets/project-images/Hotels/NOM/NOM_4.jpg';
import Img21 from '../assets/project-images/Hotels/NOM/NOM_6.jpg';
import Img22 from '../assets/project-images/Hotels/Lepakshi/img6.jpg';
import Img23 from '../assets/project-images/Hotels/Lepakshi/img6.jpg';
import Img24 from '../assets/project-images/Hotels/Lepakshi/img6.jpg';
import Img25 from '../assets/project-images/Hotels/Lepakshi/img6.jpg';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Set your images to the images state
    setImages([
      { url: Img1, link: '/projects/hotels/lepakshi' },
      { url: Img2, link: '/projects/hotels/lepakshi' },
      { url: Img3, link: '/projects/hotels/lepakshi' },
      { url: Img1, link: '/projects/hotels/lepakshi' },
      { url: Img4, link: '/projects/hotels/lepakshi' },
      { url: Img5, link: '/projects/hotels/lepakshi' },
      { url: Img6, link: '/projects/hotels/lepakshi' },
      { url: Img7, link: '/projects/hotels/krishna-palace' },
      { url: Img8, link: '/projects/hotels/krishna-palace' },
      { url: Img9, link: '/projects/hotels/krishna-palace' },
      { url: Img10, link: '/projects/hotels/krishna-palace' },
      { url: Img11, link: '/projects/hotels/krishna-palace' },
      { url: Img12, link: '/projects/hotels/rangbhoomi' },
      { url: Img13, link: '/projects/hotels/rangbhoomi' },
      { url: Img14, link: '/projects/hotels/rangbhoomi' },
      { url: Img15, link: '/projects/hotels/rangbhoomi' },
      { url: Img16, link: '/projects/hotels/rangbhoomi' },
      { url: Img17, link: '/projects/hotels/nom' },
      { url: Img18, link: '/projects/hotels/nom' },
      { url: Img19, link: '/projects/hotels/nom' },
      { url: Img20, link: '/projects/hotels/nom' },
      { url: Img21, link: '/projects/hotels/nom' },
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
            <div className={classes.image__text__name}>
              View Project Details
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
