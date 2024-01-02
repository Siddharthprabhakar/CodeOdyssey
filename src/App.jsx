import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import PreLoader from './components/PreLoader';
import { useOutlet } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';
import WelcomeSlide from './components/WelcomeSlide';
import MobileWelcomeSlide from './components/MobileWelcomeSlide';
import Footer from './components/footer';
import LoginOverlay from './components/LoginOverlay';


export const AppContext = createContext();

function App() {
  const outlet = useOutlet()
  const size = useWindowSize()

  const [email, setEmail] = useState('');

  return (
    <>
    <PreLoader/>
    <AppContext.Provider value={ { email, setEmail }}>
    <div className="App">
      <LoginOverlay/>
      <Header />
      {outlet || ((size.width <= 1280) ? <MobileWelcomeSlide /> : <WelcomeSlide />) }
      <Footer/>
    </div>
    </AppContext.Provider>
    </>
  );
}

export default App;
