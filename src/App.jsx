import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import PreLoader from './components/PreLoader';
import { useOutlet } from 'react-router-dom';
import WelcomeSlide from './components/WelcomeSlide';
import Footer from './components/footer';

function App() {
  const outlet = useOutlet()
  

  return (
    <>
    <PreLoader/>
    <div className="App">
      <Header />
      {outlet || <WelcomeSlide />}
      <Footer/>
    </div>
    </>
  );
}

export default App;
