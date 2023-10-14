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
  const [isVisibleCloudBox, setIsVisibleCloudBox] = useState(false);
  const [isVisibleAndroidBox, setIsVisibleAndroidBox] = useState(false);
  const [isVisibleWebBox, setIsVisibleWebBox] = useState(false);
  const isSmallScreen = window.innerWidth <= 1280; //for smallscreen size after that small screen componets will be seen

  const cloudBoxRef = useRef(null);
  const androidBoxRef = useRef(null);
  const webBoxRef = useRef(null);

  useEffect(() => {
    const cloudBoxObserver = new IntersectionObserver(
      ([entry]) => {
        console.log("Cloud Box Observer Called");
        if (entry.isIntersecting) {
          cloudBoxRef.current.classList.add('moveElement-animate');
        } else {
          cloudBoxRef.current.classList.remove('moveElement-animate');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );
    
    const androidBoxObserver = new IntersectionObserver(
      ([entry]) => {
        console.log("Android Box Observer Called");
        setIsVisibleAndroidBox(entry.isIntersecting);
        if (entry.isIntersecting) {
          androidBoxRef.current.classList.add('moveElement-animate');
        } else {
          androidBoxRef.current.classList.remove('moveElement-animate');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );
    
    const webBoxObserver = new IntersectionObserver(
      ([entry]) => {
        console.log("Web Box Observer Called");
        setIsVisibleWebBox(entry.isIntersecting);
        if (entry.isIntersecting) {
          webBoxRef.current.classList.add('moveElement-animate');
        } else {
          webBoxRef.current.classList.remove('moveElement-animate');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );
    

    if (cloudBoxRef.current) {
      cloudBoxObserver.observe(cloudBoxRef.current);
    }

    if (androidBoxRef.current) {
      androidBoxObserver.observe(androidBoxRef.current);
    }

    if (webBoxRef.current) {
      webBoxObserver.observe(webBoxRef.current);
    }

    // Clean up observers
    return () => {
      if (cloudBoxRef.current) {
        cloudBoxObserver.unobserve(cloudBoxRef.current);
      }

      if (androidBoxRef.current) {
        androidBoxObserver.unobserve(androidBoxRef.current);
      }

      if (webBoxRef.current) {
        webBoxObserver.unobserve(webBoxRef.current);
      }
    };
  }, []); // Ensure this effect runs only once

  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);

  const handleScroll = () => {
    if (parallaxRef.current) {
      setScrollY(parallaxRef.current.scrollTop);
    }
  };



  const calcOpacity = (scrollPosition, triggerPoint, fadeDistance, isScrollingDown) => {
    const distance = Math.abs(scrollPosition - triggerPoint);
    let opacity = 1 - distance / fadeDistance;
    opacity = Math.min(1, opacity);
    opacity = Math.max(0, opacity);
    
    // If scrolling up, reverse the opacity calculation
    if (!isScrollingDown) {
      opacity = 1 - opacity;
    }
    
    return opacity;
  };

  const cloudOpacity = calcOpacity(scrollY, 200, 500); // Adjust triggerPoint and fadeDistance as needed
  const androidOpacity = calcOpacity(scrollY, 900, 1500); // Adjust triggerPoint and fadeDistance as needed
  const webOpacity = calcOpacity(scrollY, 1200, 1900); // Adjust triggerPoint and fadeDistance as needed

  const cloudProps = useSpring({ opacity: isVisibleCloudBox ? cloudOpacity : 1 });
  const androidProps = useSpring({ opacity: isVisibleAndroidBox ? androidOpacity : 0 });
  const webProps = useSpring({ opacity: isVisibleWebBox ? webOpacity : 0 });

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
    <>
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
          <animated.div className="cloudybox" style={cloudProps} ref={cloudBoxRef}>
           <Link to='/cloud'><img src={cloudImage} alt="Cloud" /></Link>
            <div  className="clouddescription">
              <h3 className="h3ka">Cloud Computing</h3>
              <p className="pka">
                Cloud Computing: Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
                Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
                cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
              </p>
              </div>
        </animated.div>
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
          <animated.div className="androidbox" style={androidProps} ref={androidBoxRef}>
            <Link to='/android'><img src={androidImage} alt="android" /></Link>
            <div className="andydescription">
              <h3 className='h3ka'>Android Development</h3>
              <p className='pka'>
                Cloud Computing: Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
                Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
                cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
              </p>
              </div>
        </animated.div>
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
          <animated.div className="webbox" style={webProps} ref={webBoxRef}>
           <Link to='/webdev'><img src={webdev} alt="Web Development" /></Link> 
            <div className="webbydescription" ref={webBoxRef}>
              <h3 className="h3ka">Web Development</h3>
              <p className="pka">
                Cloud Computing: Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
                Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
                cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
              </p>
              </div>
        </animated.div>
      </ParallaxLayer>
    </Parallax>
    </div>
    </>
  )
}

export default WelcomeSlide;