import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import StoreProvider from './Store/Store';

import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import BabyCollection from './Pages/BabyCollection';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Products from './Components/Products';
import Wishlist from './Pages/Wishlist';

const router = createHashRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/men', element: <Men /> },
      { path: '/women', element: <Women /> },
      { path: '/babycollection', element: <BabyCollection /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: '/products', element: <Products /> },
      { path: '/wishlist', element: <Wishlist /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
