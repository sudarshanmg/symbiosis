import Img1 from '../../../assets/project-images/Residences/Project_62/1.jpg';
import Img2 from '../../../assets/project-images/Residences/Project_62/2.jpg';
import Img3 from '../../../assets/project-images/Residences/Project_62/3.jpg';
import Img4 from '../../../assets/project-images/Residences/Project_62/4.jpg';
import Img5 from '../../../assets/project-images/Residences/Project_62/5.jpg';
import Img6 from '../../../assets/project-images/Residences/Project_62/6.jpg';
import Img7 from '../../../assets/project-images/Residences/Project_62/7.jpg';
import Img8 from '../../../assets/project-images/Residences/Project_62/8.jpg';
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
