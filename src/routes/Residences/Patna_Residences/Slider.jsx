import Img1 from '../../../assets/project-images/Residences/Patna_Residences/1.jpeg';
import Img2 from '../../../assets/project-images/Residences/Patna_Residences/2.jpeg';
import Img3 from '../../../assets/project-images/Residences/Patna_Residences/3.jpeg';
import Img4 from '../../../assets/project-images/Residences/Patna_Residences/4.jpeg';
import Img5 from '../../../assets/project-images/Residences/Patna_Residences/5.jpeg';
import Img6 from '../../../assets/project-images/Residences/Patna_Residences/6.jpeg';
import Img7 from '../../../assets/project-images/Residences/Patna_Residences/7.jpeg';
import Img8 from '../../../assets/project-images/Residences/Patna_Residences/8.jpeg';
import Img9 from '../../../assets/project-images/Residences/Patna_Residences/9.jpeg';
import ImageSlider from '../../../components/slider/ImageSlider';

const Slider = () => {
  const slides = [
    { url: Img1, title: 'An Image' },
    { url: Img2, title: 'An Image' },
    { url: Img3, title: 'An Image' },
    { url: Img4, title: 'An Image' },
    { url: Img5, title: 'An Image' },
    { url: Img6, title: 'An Image' },
    { url: Img7, title: 'An Image' },
    { url: Img8, title: 'An Image' },
    { url: Img9, title: 'An Image' },
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
