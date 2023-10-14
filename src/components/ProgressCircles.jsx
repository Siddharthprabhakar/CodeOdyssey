import React, { useEffect, useState } from 'react';
import './pgcircle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgressCircles = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY <= 200); // Set isVisible to true if scrollY is less than or equal to 200, else set to false
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div>
        <div
          className={`proCirclebox ${isVisible ? 'visible' : 'hidden'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container">
            <div className="progress blue">
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">90%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressCircles;
