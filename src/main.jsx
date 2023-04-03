import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Rangbhoomi from './routes/Hotels/Rangbhoomi/Slider';
import Lepakshi from './routes/Hotels/Lepakshi/Slider';
import KrishnaPalace from './routes/Hotels/Krishna_Palace/Slider';
import Ruth from './routes/Residences/Ruth/Slider';
import ManViz from './routes/Residences/Man_Viz/Slider';
import Project62 from './routes/Residences/Project_62/Slider';
import Alankaram from './routes/Residences/Alankaram/Slider';
import PatnaResidence from './routes/Residences/Patna_Residences/Slider';
import RanchiBungalow from './routes/Residences/Ranchi_Colonial_Bungalow/Slider';
import Nom from './routes/Hotels/NOM/Slider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Page not Found!</h1>,
  },
  {
    path: 'projects',
    element: (
      <>
        <Header />
        <ImageGallery />
      </>
    ),
    errorElement: <h1>Page not Found!</h1>,
  },
  {
    path: 'projects/hotels/rangbhoomi',
    element: (
      <>
        <Header />
        <Rangbhoomi />
      </>
    ),
  },
  {
    path: 'projects/hotels/krishna-palace',
    element: (
      <>
        <Header />
        <KrishnaPalace />
      </>
    ),
  },
  {
    path: '/projects/hotels/nom',
    element: (
      <>
        <Header />
        <Nom />
      </>
    ),
  },
  {
    path: '/projects/hotels/lepakshi',
    element: (
      <>
        <Header />
        <Lepakshi />
      </>
    ),
  },
  {
    path: '/projects/residences/alankaram',
    element: (
      <>
        <Header />
        <Alankaram />
      </>
    ),
  },
  {
    path: '/projects/residences/patna-residence',
    element: (
      <>
        <Header />
        <PatnaResidence />
      </>
    ),
  },
  {
    path: '/projects/residences/ranchi-bungalow',
    element: (
      <>
        <Header />
        <RanchiBungalow />
      </>
    ),
  },
  {
    path: '/projects/residences/ruth',
    element: (
      <>
        <Header />
        <Ruth />
      </>
    ),
  },
  {
    path: '/projects/residences/man-viz',
    element: (
      <>
        <Header />
        <ManViz />
      </>
    ),
  },
  {
    path: '/projects/residences/project-62',
    element: (
      <>
        <Header />
        <Project62 />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
