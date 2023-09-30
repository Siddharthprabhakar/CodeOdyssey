import React, { useState } from 'react';
import './header.css';

const SquareBox = ({ domain, imageSrc, info, animation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`square-box ${animation === 'wiggle' ? 'wiggle' : ''} ${isHovered ? 'hovered' : ''}`}>
      <img src={imageSrc} alt={domain} />
      </div>
  );
};

export default SquareBox;
