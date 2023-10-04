import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import './home.css' 
import SquareBox from './SquareBox';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import cloudImage from '../images/Cloud.png'
import androidImage from '../images/ANDROID.png'
import webdev from '../images/webdev.png'
import video from '../images/ccbg.mp4'
import android from '../images/adbg.mp4'
import web from '../images/webbg.mp4'
import unvideo from '../images/Untitled.mp4'
import { Link, useLocation } from 'react-router-dom';

function WelcomeSlide() {
  const squareBoxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isSmallScreen = window.innerWidth <= 480; //for smallscreen size after that small screen componets will be seen

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (squareBoxRef.current) {
      observer.observe(squareBoxRef.current);
    }

    return () => {
      if (squareBoxRef.current) {
        observer.unobserve(squareBoxRef.current);
      }
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);

  const handleScroll = () => {
    if (parallaxRef.current) {
      setScrollY(parallaxRef.current.scrollTop);
    }
  };

  const calcTransform = (start, end, startY, endY) => {
    const scale = 1 + (end - start) / 3000;
    const translateY = ((endY - startY) / 2) * -1 + 300;
    return `translateY(${translateY}px) scale(${scale})`;
  };

  const [{ transform }, set] = useSpring(() => ({
    transform: 'translateY(0px) scale(1)',
  }));

  set({ transform: calcTransform(0, scrollY, 0, 1000) });

  if (isSmallScreen) {
    return (
      <>
      <div className="background-video" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: -1,
        }}>
          <video autoPlay muted loop className="video-bg" style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}>
            <source src={unvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      <Carousel className='carouselbody'>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
    <h3>About Website</h3>
    <p>The website offers roadmaps to help students learn the skills they need and build the experience they need to succeed in their careers. It also offers a variety of resources to help students follow their roadmap, including learning resources and project ideas.</p>
</Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

        <div className="box-container">
          {/* Cloud Computing Box */}
          <div className="box">
            <Link to='/cloud'><img src={cloudImage} alt="Cloud" /></Link>
            <h3>Cloud Computing</h3>
            <p>
              Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
              Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
              cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
            </p>
          </div>

          {/* Android Development Box */}
          <div className="box">
            <Link to='/android'><img src={androidImage} alt="Android Development" /></Link>
            <h3>Android Development</h3>
            <p>
              Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
              Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
              cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
            </p>
          </div>

          {/* Web Development Box */}
          <div className="box">
            <Link to='/webdev'><img src={webdev} alt="Web Development" /></Link>
            <h3>Web Development</h3>
            <p>
              Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
              Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
              cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
            </p>
          </div>
        </div>
    </>
    );
  }

  
  return (
    <div
      className="scrollElement"
      onScroll={handleScroll}
      ref={parallaxRef}
      style={{
        height: '100vh',
        overflowY: 'scroll',
        position: 'relative',
        backgroundColor: '#000',
      }}
    >
      {/* use of parallax component of react spring */}
      <Parallax pages={6} style={{ overflow: 'visible' }}>
      <ParallaxLayer speed={1}>
      <Carousel className='carouselbody'>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
         <Carousel.Caption>
          <h3  style={{  fontSize: '46px', 
            fontWeight: 'bold',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
            textTransform: 'uppercase', 
            paddingTop: "30px",
            letterSpacing: '2px', 
            color: '#FFFFFF', 
             }} >About Website</h3>
          <p style={{ fontSize: '20px', 
            fontWeight: 'semibold',
            padding: '10px',}}
          >The website offers roadmaps to help students learn the skills they need and build the experience they need to succeed in their careers. It also offers a variety of resources to help students follow their roadmap, including learning resources and project ideas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption >
        <h3 style={{ fontSize: '46px', 
            fontWeight: 'bold',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
            padding: '30px',
            paddingTop: "60px",
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            color: '#FFFFFF', 
            
      }}>
          Discover your next step with our roadmaps
      </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          {/* <h3 style={{ fontSize: '46px', 
            fontWeight: 'bold',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            color: '#FFFFFF', 
            }} >Third slide label</h3> */}
          <p style={{ fontSize: '20px', 
            fontWeight: 'semibold',
            padding: '30px',
            paddingTop: "60px",
            textAlign: "center",
            letterSpacing: '2px',}}>
          "Learners in the internet age don’t need more information. They need to know how to efficiently use the massive amount of information available at their fingertips – to determine what’s credible, what’s relevant, and when it's useful to reference."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </ParallaxLayer>
      
      <ParallaxLayer offset={1} speed={0.5} className="parallax-layer-1"z-index={1}>
          <animated.video
            autoPlay
            muted
            loop
            className="video-background"
            style={{
              transform,
              opacity: 0.4,
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </animated.video>
          <div className="cloudbox">
           <Link to='/cloud'><img src={cloudImage} alt="Cloud" /></Link>
            <div className="description">
              <h3>Cloud Computing</h3>
              <p>
                Cloud Computing: Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
                Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
                cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
              </p>
              </div>
        </div>
      </ParallaxLayer>


      <ParallaxLayer offset={2} speed={0.5} className="parallax-layer-2" z-index={2}>
          <animated.video
            autoPlay
            muted
            loop
            className="video-background"
            style={{
              transform,
              opacity: 0.4,
            }}
          >
            <source src={android} type="video/mp4" />
            Your browser does not support the video tag.
          </animated.video>
          <div className="androidbox">
            <Link to='/android'><img src={androidImage} alt="Cloud" /></Link>
            <div className="description">
              <h3>Android Development</h3>
              <p>
                Cloud Computing: Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
                Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
                cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
              </p>
              </div>
        </div>
      </ParallaxLayer>


      <ParallaxLayer offset={3.5} speed={0.5} className="parallax-layer-1" z-index={3}>
          <animated.video
            autoPlay
            muted
            loop
            className="video-background"
            style={{
              transform,
              opacity: 0.4,
            }}
          >
            <source src={web} type="video/mp4" />
            Your browser does not support the video tag.
          </animated.video>
          <div className="webbox">
           <Link to='/webdev'><img src={webdev} alt="Web Development" /></Link> 
            <div className="description">
              <h3>Web Development</h3>
              <p>
                Cloud Computing: Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
                Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
                cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
              </p>
              </div>
        </div>
      </ParallaxLayer>
    </Parallax>
    

    </div>
  )
}

export default WelcomeSlide;

