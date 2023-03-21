import Img1 from '../../assets/project-images/Hotels/Lepakshi/img1.jpg';
import Img2 from '../../assets/project-images/Hotels/Lepakshi/img2.jpg';
import Img3 from '../../assets/project-images/Hotels/Lepakshi/img3.png';
import Img4 from '../../assets/project-images/Hotels/Lepakshi/img4.png';
import Img5 from '../../assets/project-images/Hotels/Lepakshi/img5.png';
import ImageSlider from './ImageSlider';

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
