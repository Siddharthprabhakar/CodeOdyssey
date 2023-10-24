import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import PreLoader from './components/PreLoader';
import { useOutlet } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';
import WelcomeSlide from './components/WelcomeSlide';
import MobileWelcomeSlide from './components/MobileWelcomeSlide';
import Footer from './components/footer';

function App() {
  const outlet = useOutlet()
  const size = useWindowSize()

  return (
    <>
    <PreLoader/>
    <div className="App">
      {/* <Header /> */}
      {outlet || ((size.width <= 1280) ? <MobileWelcomeSlide /> : <WelcomeSlide />) }
      <Footer/>
    </div>
    </>
  );
}

export default App;
