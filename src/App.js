// App.js
import './App.css';
import { useContext } from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Loader from './Store/Loader';
import ScrollTop from './Store/ScrollTop';
import { Store } from './Store/Store';

function App() {
  const { pageLoading } = useContext(Store);

  return (
    <>
      {pageLoading ? <Loader /> : <>
        <Header />
        <Outlet />
        <ScrollTop />
        <Footer />
      </>}

    </>
  );
}

export default App;
