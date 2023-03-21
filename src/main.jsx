import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Rangbhoomi from './routes/Hotels/Rangbhoomi/Slider';
import Lepakshi from './routes/Hotels/Lepakshi/Slider';
import KrishnaPalace from './routes/Hotels/Krishna_Palace/Slider';
import Nom from './routes/Hotels/NOM/Slider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
