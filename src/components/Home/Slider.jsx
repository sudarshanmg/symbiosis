import Img1 from '../../assets/project-images/Hotels/Lepakshi/img1.jpg';
import Img2 from '../../assets/project-images/Hotels/Krishna_Palace/Image2_000.png';
import Img3 from '../../assets/project-images/Hotels/NOM/NOM_1.jpg';
import Img4 from '../../assets/project-images/Hotels/Rangbhoomi/Image1.jpg';
import Img5 from '../../assets/project-images/Hotels/Lepakshi/img5.png';
import ImageSlider from './ImageSlider';

const Slider = () => {
  const slides = [
    { url: Img4, title: 'An Image', text: 'Aanandam Designs' },
    { url: Img2, title: 'An Image', text: 'analyse. simulate. design.' },
    { url: Img3, title: 'An Image', text: 'creating a sustainable tomorrow' },
    { url: Img1, title: 'An Image', text: 'amalgamate landscape and built' },
    { url: Img5, title: 'An Image', text: 'performance driven design' },
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
