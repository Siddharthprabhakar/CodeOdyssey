import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import WelcomeSlide from './components/WelcomeSlide';
import PreLoader from './components/PreLoader';

function App() {

  return (
    <>
    <PreLoader/>
    <div className="App">
      <Header />
      <WelcomeSlide />
    </div>
    </>
  );
}

export default App;
