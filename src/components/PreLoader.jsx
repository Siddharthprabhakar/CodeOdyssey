import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/ani";
import './preloader.css'

const PreLoader = () => {
    
    useEffect(() => {
    preLoaderAnim();
  }, []);
  
  return (
    <div className="preloader" style={{backgroundColor: "black"}}>
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;