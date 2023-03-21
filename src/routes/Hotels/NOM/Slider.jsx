import Img1 from '../../../assets/project-images/Hotels/NOM/NOM_1.jpg';
import Img2 from '../../../assets/project-images/Hotels/NOM/NOM_2.jpg';
import Img3 from '../../../assets/project-images/Hotels/NOM/NOM_3.jpg';
import Img4 from '../../../assets/project-images/Hotels/NOM/NOM_4.jpg';
import Img5 from '../../../assets/project-images/Hotels/NOM/NOM_6.jpg';
import ImageSlider from '../../../components/slider/ImageSlider';

const Slider = () => {
  const slides = [
    { url: Img1, title: 'An Image' },
    { url: Img2, title: 'An Image' },
    { url: Img3, title: 'An Image' },
    { url: Img4, title: 'An Image' },
    { url: Img5, title: 'An Image' },
  ];

  const containerStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    margin: '0',
    zIndex: '3',
  };
  return (
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Slider;
