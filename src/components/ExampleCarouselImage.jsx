import React from 'react';
import slide1Image from '../images/slide1.png'; 
import slide2Image from '../images/slide2.png' 
import slide3Image from '../images/slide3.png'; 

function ExampleCarouselImage({ text }) {
  let selectedImage;


  switch (text) {
    case 'First slide':
      selectedImage = slide1Image;
      break;
    case 'Second slide':
      selectedImage = slide2Image;
      break;
    case 'Third slide':
      selectedImage = slide3Image;
      break;
    default:
      selectedImage = slide1Image; 
      break;
  }

  return (
    <img className="d-block w-100" src={selectedImage} alt={`Slide: ${text}`}></img>
  );
}

export default ExampleCarouselImage;
