import Header from './components/Header';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Slider from './components/slider/Slider';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <ImageGallery />
        {/* <Slider /> */}
      </div>
    </>
  );
}

export default App;
