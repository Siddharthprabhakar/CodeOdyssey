/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import image1 from '../images/slide1.png'
import image2 from '../images/slide2.png'
import image3 from '../images/slide3.png'
import Cards from './card';
import InitialTransition from './Sectionthree'

const WelcomeSlide = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: image1,
      desc: "The website offers roadmaps to help students learn the skills they need and build the experience they need to succeed in their careers. It also offers a variety of resources to help students follow their roadmap, including learning resources and project ideas.",
      name: "ABOUT WEBSITE",
    },
    {
      id: 2,
      imgUrl: image2,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl: image3,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "ABOUT WEBSITE",
    }
  ];

  return (
    <>
      <div className="carcontainer">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
          <div id="slide" ref={slideRef}>
            {data.map((item) => (
              <div
                key={item.id}
                className="item"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              >
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="des">{item.desc}</div>
                  <button>See more</button>
                </div>
              </div>
            ))}
          </div>
          <div className="npbuttons">
            <button id="prev" onClick={handleClickPrev}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button id="next" onClick={handleClickNext}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
        <div>
        </div>
      </div>
      <Cards/>
      <InitialTransition/>
      
      {/* <Contact/> */}
      </>
  );
};

export default WelcomeSlide;
